import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { baseAppAPI } from './api'
import ConfigReducer, { configSlide } from './slice/config'
import ChannelReducer, { channelSlide } from './slice/channel'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    // console.warn('We got a rejected action!', action)
    // const status = action?.payload?.data?.status
    // switch (status) {
    //   case 1000:
    //     if (action?.payload?.data?.message && action?.payload?.status !== 401) {
    //       ManagerToast.getInstance().showToast({
    //         message: action?.payload?.data?.message,
    //       })
    //     }
    //     break
    //   default:
    //     break
    // }
  }

  return next(action)
}

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAppAPI.middleware, rtkQueryErrorLogger),
  reducer: {
    [baseAppAPI.reducerPath]: baseAppAPI.reducer,
    [configSlide.name]: ConfigReducer,
    [channelSlide.name]: ChannelReducer,
    // declare reducer here
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
setupListeners(store.dispatch)
