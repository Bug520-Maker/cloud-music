/*获取专辑信息*/
import {request} from "../request"
export function albumContent(albumId)
{
    return request({
        url:'/album',
        params:{
            id:albumId
        }
    })
}