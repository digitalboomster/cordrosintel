import { createRouter, createWebHistory } from "vue-router";
import Shell from "@/layouts/Shell.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Shell,
      redirect: "/banking",
      children: [
        {
          path: "banking",
          name: "banking",
          component: () => import("@/views/BankingView.vue"),
        },
        {
          path: "im",
          name: "im",
          component: () => import("@/views/IMView.vue"),
        },
        {
          path: "securities",
          name: "securities",
          component: () => import("@/views/SecuritiesView.vue"),
        },
        {
          path: "research",
          name: "research",
          component: () => import("@/views/ResearchView.vue"),
        },
        {
          path: "wealth",
          name: "wealth",
          component: () => import("@/views/WealthView.vue"),
        },
        {
          path: "registrars",
          name: "registrars",
          component: () => import("@/views/RegistrarsView.vue"),
        },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/banking" },
  ],
});

export default router;
