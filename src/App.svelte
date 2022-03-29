<script>
  import { EasyrouteProvider, RouterOutlet } from "@easyroute/svelte";
  import { currentRoute } from './store/store';
  import router from './router';
  import "xp.css/dist/XP.css";
  
  let routeName = ""
  currentRoute.subscribe(route => {
    routeName = route;
  });
</script>

<main class="window" style="width: auto;">
  <div class="title-bar">
    <div class="title-bar-text">{routeName}</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize" />
      <button aria-label="Maximize" />
      <button aria-label="Close" />
    </div>
  </div>
  <EasyrouteProvider {router}>
    <RouterOutlet />
  </EasyrouteProvider>
</main>
