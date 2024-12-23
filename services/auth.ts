import { emptySplitApi } from "./emptySliceApi"

export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = authApi