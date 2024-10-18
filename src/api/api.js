import axios from "axios";

class API {
    static async logout(params = {}) {
        try {
            return this.axiosRequest('post', 'account/logout', params)
        } catch (e) {
            console.log(e)
        }
    }

    static async getProfile(params = {}) {
        try {
            let result = await this.axiosRequest('get', 'account/profile', params)
            return JSON.parse(result?.data)
        } catch (e) {
            console.log(e)
            return {}
        }
    }

    static async updateProfile(params = {}) {
        try {
            await axios.putForm(process.env.REACT_APP_JIMOTO_API_BASE_URL + 'api/account/profile', params)
        } catch (e) {
            console.log(e)
        }
    }

    static async getLatestCommodities(params = {}) {
        try {
            let result = await this.axiosRequest('get', 'commodities/latest', params)
            return JSON.parse(result?.data)
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async getLikeList(params = {}) {
        try {
            let result = await this.axiosRequest('get', 'commodities/liked', params)
            return JSON.parse(result?.data)
        } catch (e) {
            console.log(e)
            return []
        }
    }

    static async unlike(id, params = {}) {
        try {
            await this.axiosRequest('post', `commodity/${id}/action/unlike`, params)
        } catch (e) {
            console.log(e)
        }
    }

    static getUploadApiUrl() {
        return process.env.REACT_APP_JIMOTO_API_BASE_URL + 'api/services/image/action/upload'
    }

    static async axiosRequest(method, url, params) {
        if (typeof params !== 'object') params = {};
        let _option = params;
        _option = {
            method,
            url,
            baseURL: process.env.REACT_APP_JIMOTO_API_BASE_URL + 'api/',
            timeout: 30000,
            params: null,
            data: null,
            headers: null,
            withCredentials: true,
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
            ...params,
        }
        return axios.request(_option).then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
            throw err
        })
    }
}

export default API;