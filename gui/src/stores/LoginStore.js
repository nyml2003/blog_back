import {defineStore} from "pinia";
import {guestApi, userApi} from "boot/axios";

export const useLoginStore = defineStore("LoginStore", {
    actions: {
      checkToken: function (token) {
        return new Promise((resolve, reject) => {
          guestApi.post("/user/verify/", {
            "token": token
          }).then((res) => {
            resolve("token valid")
          }).catch((err) => {
            resolve("token invalid")
          })
        })
      },
      login: function (username, password) {
        return new Promise((resolve, reject) => {
          guestApi.post("/user/login/", {
            username: username,
            password: password,
          }).then((res) => {
            localStorage.setItem("accessToken", res.data.access);
            localStorage.setItem("refreshToken", res.data.refresh);
            resolve('success')
          }).catch((err) => {
            if (err.response.status === 401) {
              if (err.response.data.detail === "No active account found with the given credentials") {
                resolve('不存在该用户或密码错误')
              }
            }
          })
        })
      },
      register(form) {
        return new Promise((resolve, reject) => {
          guestApi.post("/user/register/", form, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then((res) => {
            if (res.data.hasOwnProperty('message')) {
              localStorage.setItem("accessToken", res.data.access);
              localStorage.setItem("refreshToken", res.data.refresh);
              this.isLogged = true
              resolve(res.data.message)
            } else if (res.data.hasOwnProperty('error')) {
              resolve(res.data.error)
            }
          }).catch((err) => {
            if (err.response.data.hasOwnProperty('non_field_errors')) {
              resolve(err.response.data.non_field_errors[0])
            }
            if (err.response.data.hasOwnProperty('email')) {
              resolve('邮箱不合法')
            }
          })
        })
      },
      logout: function () {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      },
      checkLogged: function () {
        return new Promise((resolve, reject) => {
          const accessToken = localStorage.getItem("accessToken");
          const refreshToken = localStorage.getItem("refreshToken");
          if (accessToken === null || refreshToken === null) {
            resolve("not logged")
          } else {
            this.checkToken(refreshToken).then((res) => {
              resolve(res)
            }).catch((err) => {
              resolve(err)
            })
          }
        })
      },
      checkPermission: function (permission) {
        return new Promise((resolve, reject) => {
          userApi.post("/user/permission/", {
            "permission": permission
          }).then((res) => {
            if (res.data.has('message')) {
              resolve(res.data.get('message'))
            } else {
              resolve('no permission')
            }
          })
        })
      },
    },
    state: () => ({
      return: {
        isLogged: null,
      }
    })
  })
;

