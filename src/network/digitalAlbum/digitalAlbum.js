import {request} from "@/network/request";
/*数字专辑-新碟上架*/
export function digitalAlbum()
{
    return request({
        url:'/album/list',
        params:{
            limit:60
        }
    })
}
/*数字专辑排行榜*/
export function digitalTop(albumType,type)
{
    return request({
        url:'/album/songsaleboard',
        params:{
            limit:60,
            offset:1,
            albumType,
            type
        }
    })
}