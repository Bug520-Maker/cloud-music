export function formatPlayCount(count)
{
    if(count<100000)
    {
        return count;
    }
    else if(count>=100000)
    {
        count=parseInt(count/10000);
        return count+'万'
    }
}
/*设置图片大小*/
export const resetImgSize=(imgUrl,width,height)=>
{
    return `${imgUrl}?param=${width}y${height}&quality=100`
}
/*时间解析*/
export function formatDate(date, fmt) {
    date=new Date(date);
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}