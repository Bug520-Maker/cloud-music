/*获取歌手专辑*/
import {request} from "../request"
export function singeralbum(singerId)
{
    return request({
        url:'/artist/album',
        params:{
            id:singerId
        }
    })
}