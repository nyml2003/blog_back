import {route} from "quasar/wrappers";
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory,} from "vue-router";
import routes from "./routes";
import {useLoginStore} from "stores/LoginStore";
import {Notify} from "quasar";
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
  Router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth === true) {
      const loginStore = useLoginStore();
      if (loginStore.isLogged) {
        loginStore.checkPermission(to.meta.permission).then((res) => {
          if (res === 'no permission') {
            Notify.create({
              message: '您没有权限',
              color: 'red',
              icon: 'warning',
              position: 'top'
            })
            next({
              path: '/'
            })
          } else {
            next()
          }
        })
      } else {
        Notify.create({
          message: '请先登录',
          color: 'red',
          icon: 'warning',
          position: 'top'
        })
        next({
          path: '/login'
        })
      }
    } else if (to.meta.requireAuth === false) {
      const loginStore = useLoginStore();
      if (loginStore.isLogged) {
        Notify.create({
          message: '您已登录',
          color: 'green',
          icon: 'check',
          position: 'top'
        })
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else {
      next();
    }
  })
  return Router;
});

