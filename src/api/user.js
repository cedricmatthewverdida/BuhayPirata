// the youtube API
import axios from "axios";
import Cookies from "js-cookie";
import APIRequest  from "../utils/APIRequest";


const userAPI = {
    login: async (data) => {
        return await APIRequest({
            url: "api/auth/login",
            data,
            method: "POST",
        }).then((r) => {
            Cookies.set("token", r.data.token.token);
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
    },
    logout: async () => {
        return await APIRequest({
            url: "api/auth/logout",
            method: "GET",
        }).then((r) => {
            return r.data;
        });
    }
}

export default userAPI;