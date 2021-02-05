import {request} from "@/network/request";
import store from "@/store";
export function perFM()
{
    return request({
        url:'/personal_fm',
        params:{
            cookie:store.state.userMsg.cookie,
            timp:new Date().getTime()
        }
    })
}