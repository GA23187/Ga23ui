import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/HomeIndex.vue"),
        meta: { title: "首页", keepAlive: false, showTab: true },
      },
      {
        path: "/tsx",
        name: "Tsx",
        component: () => import("@/test/tsx/demo"),
        meta: { title: "测试tsx", keepAlive: false, showTab: true },
      },
      {
        path: "/globalVar",
        name: "globalVar",
        component: () => import("@/test/testScss/globalVar.vue"),
        meta: { title: "测试scss全局变量", keepAlive: false, showTab: true },
      },
      {
        path: "/cssModel",
        name: "CssModel",
        component: () => import("@/test/testCssModel"),
        meta: { title: "测试css-model", keepAlive: false, showTab: true },
      },
      {
        path: "/static",
        name: "Static",
        component: () => import("@/test/testStatic/index.vue"),
        meta: { title: "测试静态资源", keepAlive: false, showTab: true },
      },
      {
        path: "/pinia",
        name: "Pinia",
        component: () => import("@/test/testPinia/index.vue"),
        meta: { title: "测试pinia", keepAlive: false, showTab: true },
      },
      {
        path: "/mockAxios",
        name: "MockAxios",
        component: () => import("@/test/testMockAxios"),
        meta: { title: "测试mock-axios", keepAlive: false, showTab: true },
      },
    ],
  },
];
