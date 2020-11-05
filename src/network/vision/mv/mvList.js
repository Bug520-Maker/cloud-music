/*获取mv*/
import {request} from "../../request";
export function mvList(region)/*获取mv排行*/
{
    return request({
        url:'/top/mv',
        params:{
            area:region
        }
    })
}
export function newmv(region)/*获取最新mv*/
{
    return request({
        url:'/mv/first',
        params:{
            area:region,
            limit:6
        }
    })
}
export function mvurl(id)/*获取mv播放地址*/
{
    return request({
        url:'/mv/url',
        params:{
            id
        }
    })
}