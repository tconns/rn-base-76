import { RootState } from '../../store'

export const selectChannelCatalog = (state: RootState) => state.channel.channelCatalog
export const selectAllChannel = (state: RootState) => state.channel.allChannel
