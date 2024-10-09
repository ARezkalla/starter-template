import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react"
import { AxiosError, AxiosResponse } from "axios"

const bapiBaseQuery =
  (): BaseQueryFn<{ api: Promise<AxiosResponse<any>> }, unknown, unknown> =>
  async ({ api }) => {
    try {
      const response = await api
      return { data: response }
    } catch (AxiosError) {
      const err = AxiosError as AxiosError
      return {
        error: {
          status: err.response?.status,

          data: err.response?.data || err.message,
        },
      }
    }
  }

export const apiSlice = createApi({
  baseQuery: bapiBaseQuery(),
  endpoints: () => ({}),
})
