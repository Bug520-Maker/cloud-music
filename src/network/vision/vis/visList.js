import store from '../../../store/index';

/*获取视频标签链表*/
import {request} from "../../request"
export function labelList()
{
    return request({
        url:'/video/group/list',
    })
}
/*获取视频分类列表*/
export function visCategory()
{
    return request({
        url:'/video/category/list',
        params:{
            cookie:store.state.userMsg.cookie,
            timestamp:new Date().getTime()
        }
    })
}
/*获取视频标签/分类下的视频*/
export function visGroup(id)
{
    return request({
        url:'/video/group',
        withCredentials:true,
        method:'post',
        data:{
            id,
            cookie:store.state.userMsg.cookie
        }
    })
}
/*获取全部视频*/
export function allvideoList()
{
    return request({
        url:'/video/timeline/all',
        params:{
            cookie:store.state.userMsg.cookie
        }
    })
}
/*获取视频播放地址*/
export function videoUrl(id)
{
    return request({
        url:'/video/url',
        params:{
            id
        }
    })
}
/*获取相关视频*/
export function relatedVideo(id)
{
    return request({
        url:'/related/allvideo',
        params: {
            id
        }
    })
}
/*获取推荐视频*/
export function Recvideo()
{
    return request({
        url:'/video/timeline/recommend',
        params:{
        }
    })
}