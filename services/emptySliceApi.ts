import { RootState } from '@/store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})
export default emptySplitApi.reducer;