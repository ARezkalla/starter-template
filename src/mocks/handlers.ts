import { HttpResponse, http } from "msw"
import { mockApi } from "./api"

export const mockHandlers = {
  LoginSuccessHandler: http.post(mockApi.login, () => {
    return HttpResponse.json({
      user: {
        id: 1,
        username: "admin",
        email: "userTest@gmail.com",
      },
    })
  }),
}

export const handlers = [
  //@ts-ignore
  ...Object.keys(mockHandlers).map((key) => mockHandlers[key]),
]
