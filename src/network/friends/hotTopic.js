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
/*获取用户动态*/
export function userDynamic(uid)
{
    return request({
        url:'/user/event',
        params:{
            uid,
            cookie:store.state.userMsg.cookie
        }
    })
}
/*获取话题详情*/
export function topicMsg(actid)
{
    return request({
        url:'/topic/detail',
        method:'post',
        data:{
            actid,
        }
    })
}