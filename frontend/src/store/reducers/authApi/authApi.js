import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),
    registration: builder.mutation({
      query: (user) => ({
        url: '/registration',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegistrationMutation } = authApi
