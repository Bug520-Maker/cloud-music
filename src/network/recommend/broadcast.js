/*独家放送*/
import {request} from "../request"
export function broadcast()
{
    return request({
        url:'/personalized/privatecontent',
        params:{
        
        }
    })
}