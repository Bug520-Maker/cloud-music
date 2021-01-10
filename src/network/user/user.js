import {request} from "@/network/request";
export function userDetail(uid)
{
    return request({
        url:'/user/detail',
        params:{
            uid
        }
    })
}