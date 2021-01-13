import {request} from "@/network/request";
import store from '@/store/index'
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
            cookie:store.state.userMsg.cookie
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
/*刷新登录*/
export function refreshLogin()
{
    return request({
        url:'/login/refresh',
        params:{
            cookie:store.state.userMsg.cookie,
            timestamp:new Date().getTime()
        }
    })
}