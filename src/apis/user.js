import { request } from "@/utils";
import {commonErrorHandler} from "@/apis/common";

export function login(formData, onSuccess, onFailure) {
    return request({
        url: "account/login",
        method: "POST",
        data: formData
    }).then(
        resp => onSuccess(JSON.parse(resp?.data))
    ).catch(e => onFailure(e));
}

export function register(formData, onSuccess, onFailure) {
    return request({
        url: "account/register",
        method: "POST",
        data: formData
    }).then(() => onSuccess()).catch(e => onFailure(e));
}

// to be deprecated
export function getUserId() {
    return request({
        url: "account/user/id",
        method: "GET"
    })
}

export function getProfile(params= {}, onSuccess) {
    return request({
        url: "account/profile",
        method: "GET",
        params: params
    }).then(
        resp => onSuccess(JSON.parse(resp?.data))
    ).catch(e => {
        commonErrorHandler(e)
    })
}

export function updateProfile(formData, onSuccess, onFailure) {
    return request({
        url: "account/profile",
        method: "PUT",
        data: formData
    }).then(() => onSuccess()).catch(e => onFailure(e));
}