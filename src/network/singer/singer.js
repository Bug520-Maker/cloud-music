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