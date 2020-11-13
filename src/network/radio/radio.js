import {request} from "../request"
/*获取电台分类*/
export function catrgoryRadio()
{
    return request({
        url:'/dj/catelist',
        params:{
        
        }
    })
}
/*获取分类下的具体*/
export function catelistType(type)
{
    return request({
        url:'/dj/recommend/type',
        params:{
            type
        }
    })
}
/*获取电台banner*/
export function radionBanner()
{
    return request({
        url:'/dj/banner',
        params:{
        }
    })
}