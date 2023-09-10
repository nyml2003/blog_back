const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "game", component: () => import("pages/GamePage.vue") },
      { path: "blog", component: () => import("pages/BlogPage.vue") },
      { path: "test", component: () => import("components/BlogDetail.vue") },
      { path: "upload", component: () => import("pages/UploadPage.vue") },
      { path: 'edit', component: () => import("components/BlogEdit.vue") },
      {
        path: 'blog/:id',
        name: 'BlogDetail',
        component: () => import("components/BlogDetail.vue")
      },
      {
        path: 'blog/:id/edit',
        name: 'BlogEdit',
        component: () => import("components/BlogEdit.vue")
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
