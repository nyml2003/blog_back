import {defineStore} from "pinia";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useQuasar} from "quasar";
import {guestApi} from "boot/axios";
import {isEmptyObject, isInvalidValue} from "src/utils/normalLogic";

export const useAuthStore = defineStore("AuthStore", () => {
  const $q = useQuasar();
  const isAuthenticated = ref(false);

  async function checkToken(token) {
    try {
      const res = await guestApi.post("/user/verify/", {
        token: token,
      });
      if (isEmptyObject(res.data)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  function enableAuth() {
    isAuthenticated.value = true;
  }

  function disableAuth() {
    isAuthenticated.value = false;
  }

  function notifyError(message) {
    $q.notify({
      color: "negative",
      message: message,
      position: "top",
      icon: "report_problem",
      timeout: 0,
      actions: [
        {
          icon: "close",
          color: "white",
        },
      ],
    });
  }

  function notifySuccess(message) {
    $q.notify({
      color: "positive",
      message: message,
      position: "top",
      icon: "check_circle",
    });
  }

  async function checkAndSetAuth() {
    const token = localStorage.getItem("refreshToken");
    if (isInvalidValue(token)) {
      disableAuth();
      return;
    }
    try {
      const res = await checkToken(token);
      switch (res) {
        case true:
          enableAuth();
          break;
        case false:
          disableAuth();
          break;
        default:
          notifyError("未知错误,位置:AuthStore.js function checkAndSetAuth");
          disableAuth();
          break;
      }
    } catch (err) {
      console.log('err', err);
      notifyError(err);
      disableAuth();
    }
  }

  async function login(username, password, router) {
    try {
      const res = await guestApi.post("/user/login/", {
        username: username,
        password: password,
      });
      if (isInvalidValue(res)) {
        console.log(res)
        notifyError(res);
        return;
      }
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
      notifySuccess("登录成功");
      enableAuth();
      await router.push("/");
      return;
    } catch (err) {
      console.log(err)
      notifyError(err.response.data.detail);
    }
  }

  async function register(form, router) {
    try {
      const res = await guestApi.post("/user/register/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (isInvalidValue(res)) {
        console.log('register', res);
        notifyError(res);
        return;
      }
      if (res.data.hasOwnProperty("message")) {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        notifySuccess("注册成功");
        enableAuth();
        await router.push("/");
        return;
      } else if (res.data.hasOwnProperty("error")) {
        notifyError(res.data.error);
        return;
      }
    } catch (err) {
      if (err.response.data.hasOwnProperty("non_field_errors")) {
        notifyError(err.response.data.non_field_errors[0]);
        return;
      }
      if (err.response.data.hasOwnProperty("email")) {
        notifyError("邮箱不合法");
        return;
      }
    }
  }

  async function logout(router) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    disableAuth();
    await router.push("/");
  }

  return {
    isAuthenticated,
    register,
    login,
    logout,
    checkAndSetAuth,
  };
});
