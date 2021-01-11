import axios from "axios";
import { Loading } from 'element-ui';
import store from "@/store";
let loadingInstance;
export function request(config)
{
    const instance=axios.create({
        baseURL:'http://localhost:3000/',
        timeout:10000,
        //withCredentials:true
    })
    instance.interceptors.request.use(config=>{
     /*   loadingInstance = Loading.service({
            text:'加载中',
        })*/
        store.commit({
            type:'changeLoadingStatus',
            loadStatus:true
        })
        return config
    },err=>{
        //console.log(err)
    })
    instance.interceptors.response.use(res=>{
       /* if (loadingInstance) {
            loadingInstance.close()
        }*/
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