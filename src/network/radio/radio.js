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
/*推荐电台*/
export function recRadio()
{
    return request({
        url:'/personalized/djprogram',
    })
}
/*个性推荐*/
export function PersionalizedRec()
{
    return request({
        url:'/dj/personalize/recommend',
        params:{
            limit:5
        }
    })
}
export function Rec()
{
    return request({
        url:'/dj/recommend',
    })
}
/*付费精品*/
export function PayFan()
{
    return request({
        url:'/dj/toplist/pay',
        params:{
            limit:40
        }
    })
}
/*电台详情*/
export function RadioMsg(id)
{
    return request({
        url:'/dj/detail',
        params:{
            rid:id
        }
    })
}
//推荐类型
export function cateRec()
{
    return request({
        url:'dj/category/recommend',
    })
}
/*类别热门*/
export function cateTop(id)
{
    return request({
        url:'/dj/radio/hot',
        params:{
            cateId:id
        }
    })
}
/*节目*/
export function program(rid)
{
    return request({
        url:'/dj/program',
        params:{
            rid,
            asc:false
        }
    })
}
/*电台订阅者列表*/
export function djsubscribe(id)
{
    return request({
        url:'/dj/subscriber',
        params:{
            id
        }
    })
}
/*节目详情*/
export function programmMsg(id)
{
    return request({
        url:'/dj/program/detail',
        params:{
            id
        }
    })
}