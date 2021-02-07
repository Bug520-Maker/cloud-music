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
            offset:0,
            albumType,
            type
        }
    })
}
/*语种风格馆*/
export function languageStyle(area)
{
    return request({
        url:'/album/list/style',
        params:{
           area,
            limit:30
        }
    })
}