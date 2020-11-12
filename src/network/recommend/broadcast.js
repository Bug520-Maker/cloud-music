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
export function broadcastList()
{
    return request({
        url:'/personalized/privatecontent/list',
        params:{
        
        }
    })
}