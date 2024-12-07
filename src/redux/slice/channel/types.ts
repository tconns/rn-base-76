import { ChannelCatalogT, DetailChannelCatalog } from '@src/redux/service/channel/type'

export type ChannelsState = {
  channelCatalog: ChannelCatalogT[]
  allChannel: DetailChannelCatalog[]
}
