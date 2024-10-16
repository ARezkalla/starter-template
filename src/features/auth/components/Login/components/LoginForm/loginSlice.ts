import { apiSlice } from "@/app/store/queryApi"
import LoginApi from "./LoginApi"

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginValidation: builder.mutation<Record<string, any>, any>({
      query: (values) => ({
        api: LoginApi.login(values),
      }),
    }),
  }),
})

export const { useLoginValidationMutation } = loginSlice

export default loginSlice.reducer
