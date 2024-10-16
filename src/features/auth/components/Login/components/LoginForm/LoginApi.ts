import BAPI from "@/app/services/api/api"

const LoginApi = {
  login(body: { email: string; password: string }) {
    return BAPI.post("login", {
      email: body.email,
      password: body.password,
    })
  },
}

export default LoginApi
