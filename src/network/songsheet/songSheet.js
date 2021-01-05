import {request} from "../request";
export function qualityList()/*获取精品歌单*/
{
    return request({
        url:'/playlist/highquality/tags',
        params:{
        
        }
    })
}
/*获取精品歌单列表*/
export function highquality(type)
{
    return request({
        url:'/top/playlist/highquality',
        params:{
            limit:30,
            cat:type
        }
    })
}
/*获取精品歌单标签列表*/
export function highTags()
{
    return request({
        url:'/playlist/highquality/tags',
    })
}
/*获取歌单评论*/
export function songSheetComm(id)
{
    return request({
        url:'/comment/playlist',
        params:{
            id,
            limit:30
        }
    })
}
/*歌单收藏者用户*/
export function songSheetCollect(id)
{
    return request({
        url:'/playlist/subscribers',
        params:{
            id,
            limit:50
        }
    })
}