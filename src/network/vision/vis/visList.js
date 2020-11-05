/*获取视频标签链表*/
import {request} from "../../request"
export function labelList()
{
    return request({
        url:'/video/group/list',
    })
}
export function visCategory()
{
    return request({
        url:'/video/category/list',
    })
}
/*获取视频标签/分类下的视频*/
export function visGroup(id)
{
    return request({
        url:'/video/group',
        params:{
            id
        }
    })
}
/*获取全部视频*/
export function allvideoList()
{
    return request({
        url:'/video/timeline/all',
    })
}