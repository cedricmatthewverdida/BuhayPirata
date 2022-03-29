<script>
    // To be added
    import Player from './music-player-tabs/Player.svelte';
    let tabbedItems = [
    {
      label: "Player",
    //   component: PlayerTab,
    },
    {
      label: "Settings",
    //   component: SettingsTab,
    },
    {
      label: "Peer Server",
    //   component: PlayerTab,
    },
  ];
  let activeTab = 0;
</script>

<div class="window-body">
    <menu role="tablist">
        {#each tabbedItems as item}
          {#if item.label === "Player"}
            <button
              class="tabbedButtons"
              aria-selected="true"
              aria-controls={item.label}>{item.label}</button
            >
          {:else}
            <button
              class="tabbedButtons"
              aria-selected="false"
              aria-controls={item.label}>{item.label}</button
            >
          {/if}
        {/each}
      </menu>
    <Player />
  </div>