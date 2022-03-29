<script>
  import SearchItems from "./SearchItems.svelte";
  import youtubeAPI from "../../api/youtube";
  import { searchResults } from "../../store/store";
  console.log("inside the search results", $searchResults);

  let videoName = "";
  let currentMediaTime = null;
  let currentMediaDuration = null;
  let audioData = {
    url: "",
    title: "",
    thumbnail: "https://via.placeholder.com/150",
  };
  const search = async (e, name) => {
    await youtubeAPI.search(name).then((res) => {
      searchResults.set(res);
    });
  };

  const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  const grabVideo = async (e, videoId) => {
    await youtubeAPI.grabVideo(videoId).then((res) => {
      audioData = res;
      const audio = document.getElementById("media");
      // @ts-ignore
      audio.load();
      // Grab duration of audio
      // @ts-ignore
      audio.addEventListener("loadedmetadata", function () {
        currentMediaDuration = convertTime(this.duration);
      });
    });
  };

  // Get current time of audio playing
  const getCurrentTime = () => {
    const audio = document.getElementById("media");
    // @ts-ignore
    currentMediaTime = audio.currentTime;
    // @ts-ignore
    const slider = document.getElementById("range26");
    // @ts-ignore
    slider.value = audio.currentTime;
  };

  // use slider to seek audio
  const seekAudio = (e) => {
    const audio = document.getElementById("media");
    // @ts-ignore
    audio.currentTime = e.target.value;
  };
</script>

<article role="tabpanel" id="music" class="container">
  <fieldset>
    <div class="field-row" style="margin-bottom: 2em;">
      <label for="search">Search</label>
      <input
        type="text"
        bind:value={videoName}
        style="border: 1px solid #7f9db9; width: 20em;"
      />
      <button
        on:click={(e) => {
          search(e, videoName);
        }}>Search Music</button
      >
    </div>

    <ul class="tree-view">
      {#each $searchResults as item}
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li>
          <a
            href="#"
            on:click={(e) => {
              e.preventDefault();
              grabVideo(e, item.id);
            }}
            style="cursor: pointer;"
            ><svelte:component this={SearchItems} objAttr={item} /></a
          >
        </li>
      {/each}
    </ul>

    <legend>Search Music</legend>
  </fieldset>

  <fieldset>
    <legend>Currently Playing</legend>
    <center>
      <img src={audioData.thumbnail} alt="poster" width="180" />
      <p>{audioData.title}</p>
      <div class="field-row" style="width: 300px">
        <label for="range26">{convertTime(currentMediaTime)}</label>
        <input
          id="range26"
          type="range"
          min="0"
          max={Number(currentMediaDuration).toFixed(0)}
          value={currentMediaTime || "0"}
          on:change={seekAudio}
        />
        <label for="range27">{currentMediaDuration == null ? "00:00" : currentMediaDuration}</label>
      </div>
      <div class="field-row" style="width: 150px; margin-top: 1em;">
        <button id="playBTN">Play</button>
        <button>Stop</button>
      </div>
      <div class="field-row" style="width: 300px">
        <audio controls id="media" on:timeupdate={getCurrentTime} autoplay hidden>
          <source src={audioData.url} id="audioSrc" type="audio/webm" />
        </audio>
      </div>
    </center>
  </fieldset>
</article>

<style>
  .container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 2em 2em;
  }
</style>
