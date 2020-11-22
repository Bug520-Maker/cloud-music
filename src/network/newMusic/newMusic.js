import {request} from "../request";
export function newSong(type)
{
    return request({
        url:'/top/song',
        params:{
            type
        }
    })
}