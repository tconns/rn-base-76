import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChannelsState } from './types'
import { DetailChannelCatalog } from '@src/redux/service/channel/type'

const initialState: ChannelsState = {
  channelCatalog: [],
  allChannel: [],
}

export const channelSlide = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    saveChannelCatalog: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.channelCatalog = action.payload.data
      const allChannel: any = {}
      action.payload?.data?.forEach?.((catalog) => {
        catalog?.channels?.forEach?.((channel) => {
          allChannel[channel.id] = { ...channel }
        })
      })
      const allChanel: { [key: string]: DetailChannelCatalog } = { ...allChannel }
      const allChannelData = Object.values(allChanel)
      allChannelData.sort((a, b) => a.pressedIndex - b.pressedIndex)
      state.allChannel = allChannelData
    },
    // declare another action here
  },
})

export const { saveChannelCatalog } = channelSlide.actions

export default channelSlide.reducer
