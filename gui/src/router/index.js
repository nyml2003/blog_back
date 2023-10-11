import {route} from "quasar/wrappers";
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory,} from "vue-router";
import routes from "./routes";
import {useLoginStore} from "stores/LoginStore";
import {Notify} from "quasar";
import {userApi} from "boot/axios";
import {computed, ref} from "vue";
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
  const loginStore = useLoginStore();
  const isLogged = ref(computed(() => loginStore.isLogged));
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
    if (!to.meta.hasOwnProperty('requireAuth')) {
      next();
      return;
    }
    if (to.meta.requireAuth !== isLogged.value) {
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
      userApi.post('/user/group/', {group: to.meta.group}).then((res) => {
        if (res.data.hasOwnProperty('error')) {
          Notify.create({
            message: res.data.get('error'),
            color: 'red',
            icon: 'error',
            position: 'top'
          })
          next({
            path: '/'
          })
          return;
        }
      }).catch((err) => {
        console.log(err);
      })
    }
    next();
    return;
  });
  return Router;
});

