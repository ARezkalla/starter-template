import { HttpResponse, http } from "msw"
import { mockApi } from "./api"

export const mockHandlers = {
  LoginSuccessHandler: http.post(mockApi.login, async ({ request }) => {
    const payload = await request.json()
    const { email, password } = payload as { email: string; password: string }
    if (email === "testmail1@test.com" && password === "admin01") {
      return HttpResponse.json({
        user: {
          id: 1,
          username: "user1",
          email: "testmail1@test.com",
          organization: {
            id: "orgId1",
            name: "Organization 1",
            country: "Country 1",
            industry: "Industry 1",
          },
          status_in_organization: "admin",
        },
      })
    } else {
      return HttpResponse.json({
        user: {
          id: 2,
          username: "user2",
          email: "testmail2@test.com",
          organization: {
            id: "orgId2",
            name: "Organization 2",
            country: "Country 2",
            industry: "Industry 2",
          },
          status_in_organization: "member",
        },
      })
    }
  }),
}

export const handlers = [
  //@ts-ignore
  ...Object.keys(mockHandlers).map((key) => mockHandlers[key]),
]
