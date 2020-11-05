/*纯搜索*/
import {request} from "../request"
export function search(keywords)
{
    return request({
        url:'/search',
        params:{
            keywords
        }
    })
}