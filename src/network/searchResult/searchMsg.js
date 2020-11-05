/*传入关键字 展示搜索结果*/
import {request} from "../request"
export function searchMsg(keywords)
{
    return request({
        url:'/search/suggest',
        params:{
            keywords
        }
    })
}
/*纯搜索*/
export function search(keywords,type)
{
    return request({
        url:'/search',
        params:{
            keywords,
            type
        }
    })
}
/*搜索多重匹配*/
export function searchMult(keywords)
{
return request({
    url:'/search/multimatch',
    params:{
        keywords
    }
})}