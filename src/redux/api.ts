import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseApi'
import { urlConfig } from '@src/configurations'

export const baseAppAPI = createApi({
  baseQuery: baseQueryWithReauth(urlConfig().URL_CONFIG.baseUrl),
  reducerPath: 'api_vtvcab_on',
  endpoints: () => ({}),
})
