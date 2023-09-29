import {defineStore} from "pinia";
import {guestApi, userApi} from "boot/axios";
import axios from "axios";

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
        guestApi.post("/user/login/", {
          username: username,
          password: password,
        }).then((res) => {
          localStorage.setItem("accessToken", res.data.access);
          localStorage.setItem("refreshToken", res.data.refresh);
          this.getPermission();
        });
      },
      logout: function () {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        this.permission = [];
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

