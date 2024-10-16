import axios from "axios"
import Config from "./config"

const axiosConfig = () => {
  axios.interceptors.request.use(
    async (reqConfig) => {
      const token = localStorage.getItem("token")
      if (token) {
        reqConfig.headers.Authorization = `Bearer ${token}`
      }
      return reqConfig
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axios.interceptors.response.use(
    (respone) => {
      return respone
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          //   await refreshToken()
          const token = localStorage.getItem("token")
          error.config.headers.Authorization = `Bearer ${token}`
          return axios.request(error.config)
        } catch (error) {
          throw new Error("Error refreshing token")
        }
      }
      return Promise.reject(error)
    },
  )

  axios.defaults.baseURL = Config.baseURL
  axios.defaults.headers.post["Content-Type"] = "application/json"
}

export default axiosConfig
