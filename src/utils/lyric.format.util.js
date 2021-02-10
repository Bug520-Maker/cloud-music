export const getFormatLyric=(lyric)=>{
    const lyricArray=[]
    const lyricExp=/\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    const lineLyric=lyric.split('\n');

    for(let item of lineLyric)
    {
        if(item)
        {
            const result=lyricExp.exec(item);
            if(!result) continue;
            const time1=result[1]*60*1000;
            const time2=result[2]*1000;
            const time3=result[3].length===3 ? result[3]*1:result[3]*10;
            const duration=time1+time2+time3;
            const content=item.replace(lyricExp,'').trim();
            const lyricObj={duration,content}
            lyricArray.push(lyricObj);
        }
    }
    return lyricArray
}