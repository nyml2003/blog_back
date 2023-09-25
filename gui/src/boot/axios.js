import {boot} from 'quasar/wrappers'
import axios from 'axios'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const baseAxiosConfig = {
  // baseURL: process.env.NODE_ENV === 'production' ? 'https://ventusvocatflumen.cn/api' : 'http://localhost:8090/api',
  baseURL: process.env.NODE_ENV === 'production' ? 'http://8.130.84.162:8080/api' : 'http://localhost:8090/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}
const guestApi=axios.create(baseAxiosConfig);
const userApi=axios.create(baseAxiosConfig);
userApi.interceptors.request.use(
  config => {
    if (localStorage.getItem("accessToken") === null) {
      return config;
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    const api = axios.create(baseAxiosConfig);
    return api.post("/token/verify/", {
      "token": localStorage.getItem("accessToken")
    }).catch((err) => {
      if (err.response.status === 401) {
        return api.post("/token/refresh/", {
          "refresh": localStorage.getItem("refreshToken")
        }).then((res) => {
          localStorage.setItem("accessToken", res.data.access);
          config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
          return config;
        })
      }
      else {
        return config;
      }
    }).then((res) => {
        return config;
    })
  }
)

export default boot(({app}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = guestApi
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export {guestApi,userApi}
