import {request} from "@/network/request";
export function hotTopic()
{
    return request({
        url:'/hot/topic',
        params:{
            limit:10
        }
    })
}