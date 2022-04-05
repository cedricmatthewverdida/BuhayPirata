import Router from "@easyroute/core";
import hashMode from "@easyroute/core/hash-mode";
import Home from "./lib/Home.svelte";
import Login from "./lib/Login.svelte";
import { currentRoute } from "./store/store";
import userAPI from "./api/user";

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
      beforeEnter: checkAuth,
    },
  ],
});

router.afterEach((route, params, next) => {
  console.log("current route:", route.name);
  currentRoute.set(route.name);
});

async function checkAuth(to, from, next){
  const user = await userAPI.check().then((r) => r.user).catch(() => null);
  if(user){
    next();
  }else{
    next("/");
  }
}


export default router;
