import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ConfigState } from './types'
import { IConfigRes } from '@src/redux/service/config'

const initialState: ConfigState = {
  config: {
    isInReview: 0,
  },
}

export const configSlide = createSlice({
  name: 'config',
  initialState,
  reducers: {
    saveConfig: (state, action: PayloadAction<{ [key: string]: any }>) => {
      const config = action.payload.data as IConfigRes
      state.config = {
        ...config,
      }
    },
  },
})

export const { saveConfig } = configSlide.actions

export default configSlide.reducer
