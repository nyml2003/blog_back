import {Platform} from "quasar";

const platform = Platform.is.desktop ? 'Desktop' : 'Mobile';
const routes = [
  {
    path: "/",
    component: () => import(`layouts/MainLayout${platform}.vue`),
    children: [
      {path: "", component: () => import("pages/IndexPage.vue")},
      {path: "friend", component: () => import("pages/FriendPage.vue")},
      {path: "game", component: () => import("pages/GamePage.vue")},
      {
        path: "blog", component: () => import(`pages/${platform}/BlogPage${platform}.vue`),
      },
      {
        path: 'blog/:id',
        name: 'BlogDetail',
        component: () => import(`components/${platform}/BlogDetail${platform}.vue`),
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
        meta: {requireAuth: true, group: 'NormalUserGroup'},
        children: [
          {
            path: 'profile/desktop',
            name: 'ProfileDesktop',
            meta: {requireAuth: true, group: 'NormalUserGroup'},
            component: () => import("pages/Desktop/ProfilePageDesktop.vue")
          },
          {
            path: 'profile/mobile',
            name: 'ProfileMobile',
            meta: {requireAuth: true, group: 'NormalUserGroup'},
            redirect: '/user/profile/mobile/info',
            children: [
              {
                path: 'info',
                name: 'ProfileMobileInfo',
                meta: {requireAuth: true, group: 'NormalUserGroup'},
                component: () => import("pages/mobile/ProfileMobileInfo.vue"),
              },
              {
                path: 'comment',
                name: 'ProfileMobileComment',
                meta: {requireAuth: true, group: 'NormalUserGroup'},
                component: () => import("pages/mobile/ProfileMobileComment.vue"),
              },
              {
                path: 'statistics',
                name: 'ProfileMobileStatistic',
                meta: {requireAuth: true, group: 'NormalUserGroup'},
                component: () => import("pages/mobile/ProfileMobileStatistic.vue"),
              }
            ]
          },
        ]
      },
    ],
  },
  {
    path: "/admin",
    meta: {requireAuth: true, group: 'NormalAdminGroup'},
    redirect: '/admin/index',
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: 'index',
        name: 'AdminIndex',
        meta: {requireAuth: true, group: 'NormalAdminGroup'},
        component: () => import("pages/AdminPage.vue"),
      },
      {
        path: 'manage',
        name: 'Manage',
        meta: {requireAuth: true, group: 'NormalAdminGroup'},
        redirect: '/admin/manage/blog',
        component: () => import("pages/ManagePage.vue"),
        children: [
          {
            path: 'blog',
            name: 'BlogManage',
            meta: {requireAuth: true, group: 'NormalAdminGroup'},
            component: () => import("components/manage/BlogPostManage.vue"),
          },
          {
            path: 'blog/edit',
            props: true,
            name: 'BlogEdit',
            component: () => import("components/BlogEdit.vue"),
          },
          {
            path: 'user',
            name: 'UserManage',
            meta: {requireAuth: true, group: 'NormalAdminGroup'},
            component: () => import("components/manage/UserManage.vue"),
          },
          {
            path: 'comment',
            name: 'CommentManage',
            meta: {requireAuth: true, group: 'NormalAdminGroup'},
            component: () => import("components/manage/CommentManage.vue"),
          },
          {
            path: 'tag',
            name: 'TagManage',
            meta: {requireAuth: true, group: 'NormalAdminGroup'},
            component: () => import("components/manage/TagManage.vue"),
          },
          {
            path: 'friend',
            name: 'FriendManage',
            meta: {requireAuth: true, group: 'NormalAdminGroup'},
            component: () => import("components/manage/FriendManage.vue"),
          }]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
