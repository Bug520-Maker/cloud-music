import {request} from '@/network/request'
import store from "@/store";
export function musicUpload(formData)
{
    return request({
        url:`/cloud?cookie=${store.state.userMsg.cookie}&time=${new Date().getTime()}`,
        method:'post',
        headers:{
            'Content-Type':'multipart/form-data',
        },
        data: formData,
    })
}
/*云盘数据获取*/
export function usrCloud()
{
    return request({
        url:'/user/cloud',
        method:'post',
        data:{
            cookie:store.state.userMsg.cookie,
            time:new Date().getTime()
        }
    })
}
//数据详情
export function cloudDetail(id)
{
    return request({
        url:'/user/cloud/detail',
        params:{
            id,
            cookie:store.state.userMsg.cookie,
            time:new Date().getTime()
        }
    })
}
