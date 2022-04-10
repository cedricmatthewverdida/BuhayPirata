<script>
  import { EasyrouteProvider, RouterOutlet } from "@easyroute/svelte";
  import { currentRoute } from "./store/store";
  import router from "./router";
  import userAPI from "./api/user";
  import Cookie from 'js-cookie'

  let routeName = "";
  currentRoute.subscribe((route) => {
    routeName = route;
  });

  const logout = async () => {
    await userAPI.logout().then(() => {
      Cookie.remove("token");
      router.push("/");
    });
  };
</script>


  <EasyrouteProvider {router}>
    <RouterOutlet />
  </EasyrouteProvider>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>