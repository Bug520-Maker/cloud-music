export function formatDt(item)
{
    if(item===undefined||item===null)
    {
        return 0;
    }
    else
    {
        let num=item/60000;
        let number=num.toString().split(".");
        let time='';
        if(number[1]===undefined)
        {
            number[1]="00";
        }
        let floatNum=parseFloat('0.'+number[1]);/*取到小数部分*/
        // console.log(floatNum,typeof floatNum);
        if(parseInt(floatNum*60)<10)
        {
            time="0"+number[0]+":" +'0'+(floatNum*60).toString().slice(0,1);
        }
        else
        {
            time="0"+number[0]+":" +(floatNum*60).toString().slice(0,2);
        }
        return time;
    }
}
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
/*随机数*/
export function rand(m,n)
{
    return Math.ceil(Math.random()*(n-m+1)+m-1);
}
/*设置图片大小*/
export const resetImgSize=(imgUrl,width,height)=>
{
    return `${imgUrl}?param=${width}y${height}&quality=100`
}
export function formatDate(time ,iShowhms)
{
    function addZoer(timE)
    {
        if(timE<10)
        {
            return '0'+timE
        }
        else{
            return timE
        }
    }
    let year=time.getFullYear();
    let month=addZoer(time.getMonth()+1);
    let date=addZoer(time.getDate());
    let hour=addZoer(time.getHours());
    let minute=addZoer(time.getMinutes());
    let second=addZoer(time.getSeconds());
    if(iShowhms)
    {
        return year+"-"+month+"-"+date+"-"+hour+"-"+minute+"-"+second;
    }
    else{
        return year+"-"+month+"-"+date
    }
}