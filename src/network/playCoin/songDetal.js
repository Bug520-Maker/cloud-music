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
/*获取歌曲评论*/
export function songComment(id)
{
    return request({
        url:'/comment/music',
        params:{
            id,
            limit:30
        }
    })
}
/*相似音乐*/
export function simiSongs(id)
{
    return request({
        url:'/simi/song',
        params:{
            id
        }
    })
}