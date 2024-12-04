import AppInfoManager from '@src/app.info.manager'
import { appConfig } from '@src/configurations'
import md5 from 'blueimp-md5'

export interface IParamsToken {
  appVersion: string
  deviceId: string
  deviceName: string
  osVersion: string
  dtId: number
  spId: string
  deviceType: number
  platform: number
  versionCode: number
  clientId: string
  signature: string
  refreshToken?: string
}

export const getInputRefreshToken = (): { url: string; params: IParamsToken } => {
  const { platform, versionCode, appSecret, getDeviceId, getDeviceName } = appConfig().APP_CONFIG

  const clientId = AppInfoManager.getClientId()

  if (AppInfoManager.isLoggedIn()) {
    const refreshToken = AppInfoManager.getRefreshToken()
    const signatureLogin = md5(
      [getDeviceId(), getDeviceName(), versionCode, platform, refreshToken, appSecret].join('&&'),
    ).toString()
    return {
      url: '/user/nt/api/v1/auth/refresh-token',
      params: {
        ...AppInfoManager.getAppInfo(),
        appVersion: AppInfoManager.getAppInfo().versionCode.toString(),
        clientId,
        signature: signatureLogin,
        refreshToken: refreshToken,
      },
    }
  }
  const signatureGuest = md5([getDeviceId(), getDeviceName(), versionCode, platform, appSecret].join('&&')).toString()
  return {
    url: '/user/nt/api/v1/auth/enter-guest',
    params: {
      ...AppInfoManager.getAppInfo(),
      appVersion: AppInfoManager.getAppInfo().versionCode.toString(),
      clientId,
      signature: signatureGuest,
    },
  }
}
