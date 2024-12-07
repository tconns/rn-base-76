import { baseAppAPI } from '@src/redux/api'
import { EnumMethod, RequestT, ResponseT } from '@src/redux/type'
import { appConfig } from '@src/configurations'
import { IConfigRes } from './types'
export * from './types'

export const ConfigTags = {
  namespace: 'Config',
  methods: [],
}

export const configApi = baseAppAPI
  .enhanceEndpoints({
    addTagTypes: [ConfigTags.namespace],
  })
  .injectEndpoints({
    endpoints: (builder) => {
      const { platform, versionCode } = appConfig().APP_CONFIG
      return {
        getConfig: builder.query<ResponseT<IConfigRes>, RequestT<undefined, undefined>>({
          query: (query) => {
            return {
              method: EnumMethod.GET,
              url: '/app-config-v2/api/v1/getConfig',
              params: {
                versionCode: versionCode,
                platform: platform,
              },
            }
          },
          async onQueryStarted(args, { dispatch, queryFulfilled }) {
            const result = await queryFulfilled
            // write logic here
            // dispatch(
            //   saveConfig({
            //     data: result?.data?.data,
            //   }),
            // )
          },
        }),
      }
    },
  })
export const { useGetConfigQuery, useLazyGetConfigQuery } = configApi
