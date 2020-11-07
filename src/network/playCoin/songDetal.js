import {request} from "../request";
/*获取歌曲详细信息*/
export function songDetailes(ids)
{
    return request({
        url:'/song/detail',
        params:{
           ids
        }
    })
}