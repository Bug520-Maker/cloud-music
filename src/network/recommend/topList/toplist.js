import {request} from "../../request";

export function allList()/*获取所有详情*/
{
    return request({
        url:"/toplist",
        params:{
        
        }
    })
}
/*榜单内容摘要*/
export function listcontentDetail()
{
    return request({
        url:"/toplist/detail",
        params:{
        
        }
    })
}
/*获取歌手榜*/
export function artistToplist(type)
{
    return request({
        url:'/toplist/artist',
        params:{
            type
        }
    })
}