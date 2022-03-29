<script>
  import frontimage from '../assets/frontimage.jpg' ;
  import router from '../router';
  import { currentRoute } from '../store/store';
  import useCurrentRoute from '@easyroute/svelte/useCurrentRoute';
  import {onMount} from 'svelte';
  const useRoute = useCurrentRoute().getValue;
</script>

<div class="window-body">
    
  <div class="field-row center">
    <img src={frontimage} style="width: 128px;" alt="frontimage" class="center">
  </div>

  <div class="field-row center">
    <span>please enter your login details</span>
  </div>
  <div class="field-row center">
    <label for="username">Username: </label>
    <input
      id="username"
      type="text"
      style="margin-left: 1em; width: 250px;"
      placeholder="username"
    />
  </div>
  <div class="field-row center">
    <label for="password">Password: </label>
    <input
      id="password"
      type="password"
      style="margin-left: 1em; width: 250px;"
    />
  </div>
  <div class="field-row center">
    <button class="center" on:click={() => router.push('/home')} style="width: 150px;">Login</button>
  </div>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
