import {request} from "../request";
export function newSong(type)
{
    return request({
        url:'/top/song',
        params:{
            type
        }
    })
}
/*所有新碟*/
export function allNewDish(area)
{
    return request({
        url:'/album/new',
        params:{
            area,
            limit:60
        }
    })
}
/*新碟上架*/
export function newDish(area,type,year,month)
{
    return request({
        url:'/top/album',
        params:{
            limit:60,
            area,
            type,
            year,
            month
        }
    })
}
/*获取专辑内容*/
export function albumConent(id)
{
    return request({
        url:'/album',
        params:{
            id
        }
    })
}