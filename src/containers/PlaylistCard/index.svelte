<script>
    import Card from '../../components/Card/index.svelte';
    export let MusicList = [];
</script>

{#if MusicList.length < 0}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-warning">
                    <strong>No results found!</strong>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="container mx-auto">
        <div class="grid grid-cols-4 gap-4">
            {#each MusicList as item}
                    <Card item={item}/>
            {/each}
        </div>
    </div>
{/if}
