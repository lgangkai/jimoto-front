import {request} from "@/utils";
import {commonErrorHandler} from "@/apis/common";
import item from "@/pages/Home/Components/ContentList/item";

export function getLikeList(onSuccess) {
    return request({
        url: 'commodities/liked',
        method: 'GET'
    }).then(resp => {
        onSuccess(JSON.parse(resp?.data))
    }).catch(e => {
        commonErrorHandler(e)
    })
}

export function getLikedUsers(itemId, onSuccess) {
    return request({
        url: `commodity/${itemId}/liked-users`,
        method: 'GET'
    }).then(resp => onSuccess(JSON.parse(resp?.data))).catch(e => console.log(e));
}

export function like(id, onSuccess) {
    return request({
        url: `commodity/${id}/action/like`,
        method: 'POST',
    }).then(resp => onSuccess()).catch(e => commonErrorHandler(e));
}

export function unlike(id, onSuccess) {
    return request({
        url: `commodity/${id}/action/unlike`,
        method: 'POST'
    }).then(resp => {
        onSuccess()
    }).catch(e => {
        commonErrorHandler(e)
    })
}

export function getCommodity(itemId, onSuccess, onFailure) {
    return request({
        url: `commodity/${itemId}`,
        method: 'GET',
    }).then(resp => {
        onSuccess(JSON.parse(resp.data))
    }).catch(e => {
        console.log(e)
        onFailure()
    })
}

export function getCommodities(params = {}, onSuccess, onFailure) {
    return request({
        url: "commodities",
        method: "GET",
        params: params
    }).then(resp => {onSuccess(JSON.parse(resp.data))}).catch((e)=> {
        console.log(e)
        onFailure()
    })
}

export function getUserSoldCommodities(onSuccess, onFailure) {
    return request({
        url: "commodities/sold",
        method: "GET",
    }).then(resp => {onSuccess(JSON.parse(resp.data))}).catch((e)=> {
        console.log(e)
        onFailure()
    })
}

export function publishCommodity(formData, onSuccess, onFailure) {
    return request({
        url: "commodity",
        method: "POST",
        data: formData
    }).then(resp => {
        onSuccess()
    }).catch(e => {
        onFailure(e)
    })
}