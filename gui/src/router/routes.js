const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "game", component: () => import("pages/GamePage.vue") },
      { path: "blog", component: () => import("pages/BlogPage.vue"),
      },
      { path: "test", component: () => import("components/BlogDetail.vue") },
      { path: 'edit', component: () => import("components/BlogEdit.vue") },
      {
        path: 'blog/:id',
        name: 'BlogDetail',
        component: () => import("components/BlogDetail.vue"),
      },
      {
        path: 'blog/edit/:id',
        name: 'BlogEdit',
        meta: {requireAuth: true, permission:'change_blog'},
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
      }
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
