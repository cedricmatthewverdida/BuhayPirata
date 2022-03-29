import { writable } from "svelte/store";

export let currentRoute = writable("");
export let searchResults = writable([]);
