import {request} from "@/network/request";
import store from "@/store";
/*收藏的专辑*/
export function collectAlbum()
{
    return request({
        url:'/album/sublist',
        params:{
            cookie:store.state.userMsg.cookie,
        }
    })
}
/*收藏歌手*/
export function collectArtist()
{
    return request({
        url:'/artist/sublist',
        params:{
            cookie:store.state.userMsg.cookie,
        }
    })
}
/*收藏的视频*/
export function collectVideo()
{
    return request({
        url:'/mv/sublist',
        params:{
            cookie:store.state.userMsg.cookie,
        }
    })
}