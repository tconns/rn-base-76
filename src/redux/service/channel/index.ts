import { EnumMethod, ResponseT } from '@src/redux/type'
import { IChannelCatalogRes } from './type'
import { baseAppAPI } from '@src/redux/api'
import { saveChannelCatalog } from '@src/redux/slice/channel'

export const ChannelTags = {
  namespace: 'Channel',
  methods: [],
}

export const channelApi = baseAppAPI
  .enhanceEndpoints({
    addTagTypes: [ChannelTags.namespace],
  })
  .injectEndpoints({
    endpoints: (builder) => {
      return {
        getChannelCatalog: builder.query<ResponseT<IChannelCatalogRes>, unknown>({
          query: (query) => {
            return {
              method: EnumMethod.GET,
              url: '/live-channel/api/v2/channels/byCatalog',
            }
          },
          async onQueryStarted(args, { dispatch, queryFulfilled }) {
            const result = await queryFulfilled
            if (result?.data?.data?.channels) {
              dispatch(
                saveChannelCatalog({
                  data: result?.data?.data?.channels,
                }),
              )
            }
          },
          providesTags: [
            // { type: 'User', id: 'login' },
            // { type: 'User', id: 'logout' },
          ],
        }),
      }
    },
  })
export const { useGetChannelCatalogQuery, useLazyGetChannelCatalogQuery } = channelApi
