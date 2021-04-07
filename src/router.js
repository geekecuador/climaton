import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
    // redirect: `${adminRoot}/bioclick`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/bioclick`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "bioclick",
        component: () =>
          import(/* webpackChunkName: "bioclick" */ "./views/app/bioclick"),
        redirect: `${adminRoot}/bioclick/home`,
        children: [
          {
            path: 'home',
            component: () => import(/* webpackChunkName: "bioclick" */ './views/app/bioclick/Start')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'retos',
            component: () => import(/* webpackChunkName: "bioclick" */ './views/app/bioclick/Retos'),
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }, 
          {
            path: 'reto',
            component: () => import(/* webpackChunkName: "bioclick" */ './views/app/bioclick/Reto')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }
        ]
      },
      {
        path: "second-menu",
        component: () =>
          import(/* webpackChunkName: "second-menu" */ "./views/app/second-menu"),
        redirect: `${adminRoot}/second-menu/second`,
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "bioclick" */ './views/app/second-menu/Second') }
        ]
      },
      {
        path: "single",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/single")
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "/huella-carbono",
    redirect: "/huella-carbono/calculadora",
    component: () => import(/* webpackChunkName: "error" */ "./views/app/huella/"),
    children: [
      {
        path: "calculadora",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/app/huella/Huella")
      },
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
