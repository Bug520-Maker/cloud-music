import {request} from "@/network/request";
import store from "@/store";
export function perFM()
{
    return request({
        url:'/personal_fm',
        cookie:store.state.userMsg.cookie
    })
}