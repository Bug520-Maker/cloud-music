import {request} from "../request";
/*获取热门歌手*/
export function topsinger()
{
    return request({
        url:'/top/artists',
        params:{
            limit:30,
        }
    })
}
/*获取歌手分类*/
export function singerCategory(area,type,initial)
{
    return request({
        url:'/artist/list',
        params:{
            limit:30,
            area:area || -1,
            type:type || -1,
            initial:initial || -1
        }
    })
}
export function top50(id)
{
    return request({
        url:'/artist/top/song',
        params:{
            id
        }
    })
}
/*获取歌手mv*/
export function mvofsinger(id)
{
    return request({
        url:'/artist/mv',
        params:{
            id
        }
    })
}
/*获取歌手描述*/
export function singerDesc(id)
{
    return request({
        url:'/artist/desc',
        params:{
            id
        }
    })
}
/*获取歌手详细信息*/
export function singerMsg(id)
{
    return request({
        url:'/artist/detail',
        params:{
            id
        }
    })
}
/*获取歌手专辑*/
export function singeralbum(singerId)
{
    return request({
        url:'/artist/album',
        params:{
            id:singerId
        }
    })
}
/*获取专辑内容*/
export function albumContent(id)
{
    return request({
        url:'/album',
        params:{
            id
        }
    })
}
/*获取相似歌手*/
export function simiArtist(id)
{
    return request({
        url:'/simi/artist',
        params:{
            id
        }
    })
}