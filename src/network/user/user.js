import {request} from "@/network/request";
export function userDetail(uid)
{
    return request({
        url:'/user/detail',
        params:{
            uid
        }
    })
}
/*用户电台*/
export function userRadio(uid)
{
    return request({
        url:'/user/dj',
        params:{
            uid
        }
    })
}
/*获取用户歌单*/
export function userPlaylist(uid)
{
    return request({
        url:'/user/playlist',
        params:{
            uid,
            limit:40
        }
    })
}