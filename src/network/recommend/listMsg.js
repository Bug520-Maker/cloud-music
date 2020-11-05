import {request} from "../request"

export function listMsg(id)/*获取歌单详情*/
{
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}