import {request} from "@/network/request";
/*登录*/
export function userLogin(phone,password)
{
    return request({
        url:'/login/cellphone',
        params:{
            phone,
            password
        }
    })
}
/*登录状态*/
export function loginStatus()
{
    return request({
        url:'/login/status',
        params:{
            timemap:new Date().getTime()
        }
    })
}
/*退出登录*/
export function logout()
{
    return request({
        url:'/logout',
    })
}