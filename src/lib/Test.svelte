<script>
  import TopNav from '../components/TopNav/index.svelte';
  import Footer from '../components/Footer/index.svelte';
  import PlaylistCard from '../containers/PlaylistCard/index.svelte';
  import youtubeAPI from '../api/youtube';
  import { searchResults } from '../store/store';
  // @ts-ignore
  import _ from 'lodash';
  

  let search = '';
  let isLoadingResource = false;

  const searchQuery = _.debounce(async (name) => {
      if(name.length > 0) {
          isLoadingResource = true;
          await youtubeAPI.search(name).then((res) => {
              isLoadingResource = false;
              searchResults.set(res);
          });
      }
  }, 2000);


  $: search, searchQuery(search);
  
</script>

<TopNav bind:search={search} />

<PlaylistCard MusicList={$searchResults}/>

<Footer />