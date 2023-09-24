import {defineStore} from "pinia";
import {guestApi, userApi} from "boot/axios";
import axios from "axios";

export const useLoginStore = defineStore("LoginStore", {
    actions: {
      checkToken: function (token) {
        return new Promise((resolve, reject) => {
          guestApi.post("/token/verify/", {
            "token": token
          }).then((res) => {
            resolve("token valid")
          }).catch((err) => {
            resolve("token invalid")
          })
        })
      },
      login: function (username, password) {
        guestApi.post("/token/", {
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
      getPermission: function () {
        userApi.get('/user/permission/').then((res) => {
          console.log(res)
          this.permission = res.data;
        })
      },
      checkPermission: function (permission) {
        return new Promise((resolve, reject) => {
          if (this.permission.includes(permission)) {
            resolve()
          } else {
            resolve('no permission')
          }
        })
      },
    },
    state: () => ({
      return: {
        isLogged: null,
        permission: [],
      }
    })
  })
;

