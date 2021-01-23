import {request} from "@/network/request";
export function checkMusic(id)
{
    return request({
        url:'/check/music',
        params:{
            id
        }
    })
}