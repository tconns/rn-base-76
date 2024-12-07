import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { getInputRefreshToken } from './refreshToken'
import AppInfoManager from '@src/app.info.manager'
import { urlConfig } from '@src/configurations'

// create a new mutex
const mutex = new Mutex()

export const getBaseQuery = (config: { baseUrl: string; extraOptions?: any }) =>
  fetchBaseQuery({
    baseUrl: config.baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
    },
    prepareHeaders: (headers) => {
      // TcoND: Sau này có thể thêm vào từ LocalStorage để gửi lên Server mở rộng tính năng đa ngôn ngữ
      // const saveLang = LocalStorage.getItem('saveLang')
      headers.set('Accept-Language', 'vi-VN,vi;q=0.9')
      const token = AppInfoManager.getAccessToken()
      // console.log(`Access token ${Date.now()}: ${token}`)
      if (token && !config?.extraOptions?.disableToken) {
        headers.set('Authorization', `${token}`)
      }
      return headers ?? {}
    },
  })

export const baseQueryWithReauth: (baseUrl: string) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = (
  baseUrl: string,
) => {
  return async (args, api, extraOptions) => {
    const baseQuery = getBaseQuery({ baseUrl: (extraOptions as any)?.baseUrl || baseUrl, extraOptions })

    const baseRefreshQuery = getBaseQuery({
      baseUrl: urlConfig().URL_CONFIG.baseUrl,
      extraOptions: { ...extraOptions, disableToken: true },
    })

    await mutex.waitForUnlock()

    let result = await baseQuery(args, api, extraOptions)

    if (result?.error && result?.error?.status === 401) {
      const inputRefreshToken = getInputRefreshToken()

      // Kiểm tra xem mutex có bị khóa không
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          const refreshResult: any = await baseRefreshQuery(
            {
              url: inputRefreshToken.url,
              method: 'POST',
              body: inputRefreshToken.params,
              headers: {},
            },
            api,
            extraOptions,
          )

          if (refreshResult.data && refreshResult?.data?.status === 0) {
            //   api.dispatch(tokenReceived(refreshResult.data))
            const token = refreshResult.data?.data?.accessToken
            AppInfoManager.setAccessToken(token)
            AppInfoManager.setRefreshToken(refreshResult.data?.data?.refreshToken)
            // AppInfoManager.setUserInfo(refreshResult.data?.data?.userInfo)
            AppInfoManager.setClientId(refreshResult?.data?.data?.clientId)
            // thử lại câu truy vấn ban đầu
            result = await baseQuery(args, api, extraOptions)
          } else {
            // đăng xuất người dùng nếu không thể làm mới token
            //   api.dispatch(loggedOut())
          }
        } finally {
          // Release phải được gọi một lần mutex nên được giải phóng lại.
          release()
        }
      } else {
        // Đợi cho đến khi mutex có sẵn mà không khóa nó
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    }

    return result
  }
}
