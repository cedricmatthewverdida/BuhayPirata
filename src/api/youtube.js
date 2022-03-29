// the youtube API
import APIRequest  from "../utils/APIRequest";


const youtubeAPI = {
    search: async (searchname) => {
		return await APIRequest({
			url: "api/search-music",
			data: {
				name: searchname,
			},
			method: "POST",
		}).then((r) => {
			return r.data;
		});
	},
	grabVideo: async (url) => {
		return await APIRequest({
			url: `api/play-music/${url}`,
			method: "GET",
		}).then((r) => {
			return r.data;
		});
	}
}

export default youtubeAPI;