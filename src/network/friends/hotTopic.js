import {request} from "@/network/request";
import store from "@/store";
export function hotTopic()
{
    return request({
        url:'/hot/topic',
        params:{
            limit:10,
            cookie:store.state.userMsg.cookie
        }
    })
}