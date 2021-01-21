import {request} from "../../request"

export function banner()/*获取歌单详情*/
{
    return request({
        url:'/banner',
        params:{
        type:0
        }
    })
}