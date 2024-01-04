import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Login.vue";

const routes = [
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/checkLoginStatus",
      name: "CheckLoginStatus"
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;