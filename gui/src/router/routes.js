import {Platform} from "quasar";

const platform = Platform.is.desktop ? 'Desktop' : 'Mobile';
console.log('platform: ', platform);
const routes = [
  {
    path: "/",
    component: () => import(`layouts/MainLayout${platform}.vue`),
    children: [
      {path: "", component: () => import("pages/IndexPage.vue")},
      {path: "game", component: () => import("pages/GamePage.vue")},
      {
        path: "blog", component: () => import(`pages/BlogPage${platform}.vue`),
      },
      {path: "test", component: () => import("components/BlogDetail.vue")},
      {path: 'edit', component: () => import("components/BlogEdit.vue")},
      {
        path: 'blog/:id',
        name: 'BlogDetail',
        component: () => import(`components/BlogDetail${platform}.vue`),
      },
      {
        path: 'blog/edit/:id',
        name: 'BlogEdit',
        meta: {requireAuth: true, permission: 'change_blog'},
        component: () => import("components/BlogEdit.vue"),
      },
      {
        path: 'login',
        name: 'Login',
        meta: {requireAuth: false},
        component: () => import("pages/LoginPage.vue")
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import("pages/RegisterPage.vue")
      },
      {
        path: "/user",
        meta: {requireAuth: true},
        children: [
          {
            path: 'profile',
            name: 'Profile',
            component: () => import("pages/ProfilePage.vue")
          },
          {
            path: 'comment',
            name: 'Comment',
            component: () => import("pages/CommentPage.vue")
          }
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
