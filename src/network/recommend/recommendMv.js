import {request} from "../request"

export function recommendMv()
{
    return request({
        url:'/personalized/mv',
        params:{
        
        }
    })
}