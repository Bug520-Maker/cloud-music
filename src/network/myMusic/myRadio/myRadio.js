import {request} from "@/network/request";
import store from "@/store";
export function userRadio(uid)
{
    return request({
        url:"/user/dj",
        params:{
           uid,
            cookie:store.state.userMsg.cookie
        }
    })
}