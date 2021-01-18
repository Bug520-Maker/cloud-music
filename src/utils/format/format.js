export function formatDt(item)
{
    if(item==undefined||item==null)
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