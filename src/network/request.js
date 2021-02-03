import axios from "axios";
import store from "@/store";
import loading from '@/utils/loading/index';
export function request(config)
{
    const instance=axios.create({
        baseURL:/*'http://123.207.32.32:9001'*/'http://localhost:3000',
        timeout:5000,
    })
    instance.interceptors.request.use(config=>{
        store.commit({
            type:'changeLoadingStatus',
            loadStatus:true
        })
        return config
    },err=>{
        //console.log(err)
    })
    instance.interceptors.response.use(res=>{
        store.commit({
            type:'changeLoadingStatus',
            loadStatus:false
        })
        return res.data/*服务器会返回很多参数，但是只要取到里面的data就可以*/
    },err=>{
        console.log(err)
    })
    
    return instance(config)
}