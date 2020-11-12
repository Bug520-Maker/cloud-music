import {request} from "../request";
export function qualityList()/*获取精品歌单*/
{
    return request({
        url:'/playlist/highquality/tags',
        params:{
        
        }
    })
}
/*获取歌单列表*/
export function highquality()
{
    return request({
        url:'/top/playlist/highquality',
        params:{
            limit:30,
            cat:"华语"
        }
    })
}