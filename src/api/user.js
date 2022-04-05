// the youtube API
import axios from "axios";
import APIRequest  from "../utils/APIRequest";


const userAPI = {
    login: async (data) => {
        return await APIRequest({
            url: "api/auth/login",
            data,
            method: "POST",
        }).then((r) => {
            axios.defaults.headers.common["Authorization"] = `Bearer ${r.data.token.token}`;
            return r.data;
        });
    },
    register: async (data) => {
        return await APIRequest({
            url: "api/auth/register",
            data,
            method: "POST",
        }).then((r) => {
            return r.data;
        });
    },
    check: async () => {
        return await APIRequest({
            url: "api/auth/check",
            method: "GET",
        }).then((r) => {
            return r.data;
        });
    }
}

export default userAPI;