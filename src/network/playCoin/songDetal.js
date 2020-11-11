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
/*获取歌词*/
export function songLyric(id)
{
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}