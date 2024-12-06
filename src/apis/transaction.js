import {request} from "@/utils";

export function getTransactionList(onSuccess) {
    return request({
        url: '/transactions',
        method: 'GET',
    }).then(resp=>onSuccess(JSON.parse(resp.data))).catch(e=>console.log(e))
}