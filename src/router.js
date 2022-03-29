import Router from "@easyroute/core";
import hashMode from "@easyroute/core/hash-mode";
import Home from "./lib/Home.svelte";
import Login from "./lib/Login.svelte";
import { currentRoute } from "./store/store";

const router = new Router({
  mode: hashMode,
  routes: [
    {
      path: "/",
      component: Login,
      name: "Login",
    },
    {
      path: "/home",
      component: Home,
      name: "Home",
    },
  ],
});

router.afterEach((route, params, next) => {
  console.log("current route:", route.name);
  currentRoute.set(route.name);
});

export default router;
