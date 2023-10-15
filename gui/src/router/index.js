import {route} from "quasar/wrappers";
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory,} from "vue-router";
import routes from "./routes";
import {Notify,Loading} from "quasar";
import {userApi} from "boot/axios";
import {useAuthStore} from "stores/AuthStore";
import {storeToRefs} from "pinia";
// /*
//  * If not building with SSR mode, you can
//  * directly export the Router instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Router instance.
//  */
//

export default route(function (/* { store, ssrContext } */) {
  const authStore = useAuthStore();
  const {isAuthenticated} = storeToRefs(authStore);
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({left: 0, top: 0}),
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });
  Router.beforeEach(async (to, from, next) => {
    Loading.show();
    if (!to.meta.hasOwnProperty('requireAuth')) {
      next();
      return;
    }
    if (to.meta.requireAuth !== isAuthenticated.value) {
      Notify.create({
        message: '访问的页面和登录状态不匹配',
        color: 'red',
        icon: 'error',
        position: 'top'
      })
      next({
        path: '/'
      })
      return;
    }
    if (to.meta.hasOwnProperty('group')) {
      const res = await userApi.post('/user/group/', {group: to.meta.group});
      if (res.data.hasOwnProperty('error')) {
        if (res.data.error === 'permission denied') {
          Notify.create({
            message: '权限不足',
            color: 'red',
            icon: 'error',
            position: 'top'
          })
        } else {
          Notify.create({
            message: '未知错误',
            color: 'red',
            icon: 'error',
            position: 'top'
          })
        }
        next({
          path: '/'
        })
        return;
      }
    }
    next();

  });
  Router.afterEach(() => {
    Loading.hide();
  })
  return Router;
});

