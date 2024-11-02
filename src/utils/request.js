import axios from "axios";
import {getToken} from "@/utils/token";

const request = axios.create({
    baseURL: process.env.REACT_APP_JIMOTO_API_BASE_URL + 'api/',
    timeout: 5000,
});

request.interceptors.request.use((config)=> {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

request.interceptors.response.use((response)=> {
    return response.data;
}, (error) => {
    return Promise.reject(error);
})

export { request };