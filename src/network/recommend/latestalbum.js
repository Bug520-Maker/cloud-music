/*最新音乐*/
import {request} from "../request"
export function latestalbum()
{
    return request({
        url:'/personalized/newsong',
        params:{
            limit:12
        }
    })
}