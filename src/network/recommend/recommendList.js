import {request} from "../request"

export function recommendList(limit)
{
    return request({
        url:'/personalized',
        params:{
            limit:limit
        }
    })
}