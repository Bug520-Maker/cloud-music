import axios from "axios"
export function request(config)
{
    const instance=axios.create({
        baseURL:'http://localhost:3000/',
        timeout:10000
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        //console.log(err)
    })
    instance.interceptors.response.use(res=>{
        return res.data/*服务器会返回很多参数，但是只要取到里面的data就可以*/
    },err=>{
        console.log(err)
    })
    
    return instance(config)
}