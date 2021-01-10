import {request} from "@/network/request";
export function userFavorite(uid)
{
    return request({
        url:'/user/playlist',
        params:{
            uid
        }
    })
}