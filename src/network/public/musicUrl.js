/*获取音乐url*/
import {request} from "../request"
export function musicUrl(musicId)
{
    return request({
        url:'/song/url',
        params:{
            id:musicId
        }
    })
}