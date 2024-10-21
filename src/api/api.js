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
            let result = await this.axiosRequest('get', `account/profile`, params)
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

    static async publishCommodity(params = {}) {
        await axios.postForm(process.env.REACT_APP_JIMOTO_API_BASE_URL + `api/commodity`, params)
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

    static async getAddressByLocation(latitude, longitude) {
        console.log("api getAddressByLocation called!")
        return await axios
            .get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${process.env.REACT_APP_GEOCODING_API_KEY}`, {withCredentials: false})
            .catch((err) => console.log(err))
    }

    static async axiosRequest(method, url, params) {
        if (typeof params !== 'object') params = {};
        let _option = params;
        _option = {
            method,
            url,
            baseURL: process.env.REACT_APP_JIMOTO_API_BASE_URL + 'api/',
            timeout: 30000,
            params: {...params},
            data: null,
            headers: null,
            withCredentials: true,
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
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