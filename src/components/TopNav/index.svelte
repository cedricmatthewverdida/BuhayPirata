
<script> 

  export let search = '';
  export let isLoadingResource = false;

</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="btn btn-ghost normal-case text-xl">Buhay Pirata</a>

      <div class="form-control">
        <input bind:value={search} type="text" placeholder="Search" class="input input-bordered">
      </div>

    </div>
    
    <div class="flex-none gap-2">
      
      <div class="dropdown dropdown-end">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Settings</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
</div>