import {request} from "../request";
/*获取歌单分类*/
export function playlist()
{
    return request({
        url:'/playlist/catlist',
        params:{
        
        }
    })
}
/*热门歌单分类*/
export function hotlist()
{
    return request({
        url:'/playlist/hot',
        params:{
        
        }
    })
}
/*歌单详情*/
export function songListMsg(id)
{
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}
/*推荐网友精选歌单*/
export function songList(cat,limit,offset)
{
    return request({
        url:'/top/playlist',
        params:{
            cat,
            limit,
            offset
        }
    })
}