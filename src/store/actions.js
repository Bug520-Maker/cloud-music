import Vue from 'vue'
import {musicUrl} from "@/network/public/musicUrl";
import {albumContent} from "@/network/singer/singer";
import {songListMsg} from "@/network/playlist/playlist";
import {songDetailes, songLyric} from "@/network/playCoin/songDetal";
import {programmMsg} from "@/network/radio/radio";

import {getRandom} from "@/utils/random.util";
import {getFormatLyric} from "@/utils/lyric.format.util";
import {checkMusic} from "@/network/public/checkMusic";
export default {
    /*获取音乐的播放地址*/
    getMusicUrl(context,payload)
    {
        musicUrl(payload.songId).then(res => {               /*向playCoin发送歌曲的url*/
                context.commit({
                type: 'getSongUrl',
                url: res.data[0].url,
                songId: payload.songId
            })
        })
    },
    /*向playCoin发送封面图片*/
    getMusicAlbum(context,payload)
    {
        albumContent(payload.albumId).then(data=> {
           // console.log(data);
                context.commit({
                type: 'getAlbumImg',
                albumImgUrl:data.album.blurPicUrl
            })
        })
    },
    /*用户歌单信息*/
    userSongList(context,payload)
    {
        return new Promise((resolve,reject)=>{
            songListMsg(payload.songListId).then(data=>{
               // console.log(data);
                context.commit({
                    type:'getUserSongListMsg',
                    userSongListMsg:data.playlist
                });
                resolve()
            })
        })
    },
    /*获取歌曲详情*/
    getSongDetail(context,payload)
    {
        checkMusic(payload.id).then(data=>{
            if(!data.message)
            {
                Vue.prototype.$toast.show('该歌曲暂时无法播放');
                return ;
            }
            else{
                //判断当前歌曲是否在用户的播放列表中
                const songIndex=context.state.playList.findIndex((item,index)=>{
                    return item.id===payload.id
                })
                //存在
                if(songIndex!==-1)
                {
                    context.commit({
                        type:'changeCurrentSongIndex',
                        songIndex:songIndex
                    })
                    context.commit({
                        type:'changeCurrentSong',
                        song:context.state.playList[songIndex]
                    })
                    context.dispatch({
                        type:'getLyricList',
                    })
                    //获取歌曲url
                    context.dispatch({
                        type:'getMusicUrl',
                        songId:payload.id
                    })
                }
                else if(songIndex===-1)
                {
                    songDetailes(payload.id).then(data=>{
                        //当前歌曲加入到用户播放列表
                        context.commit({
                            type:'changePlayList',
                            song:data.songs[0]
                        });
                        //获取歌曲url
                        context.dispatch({
                            type:'getMusicUrl',
                            songId:payload.id
                        })
                        //更改播放列表歌曲索引
                        context.commit({
                            type:'changeCurrentSongIndex',
                            songIndex:context.state.playList.length-1
                        })
                        //更换当前歌曲
                        context.commit({
                            type:'changeCurrentSong',
                            song:data.songs[0]
                        })
                        //获取歌词
                        context.dispatch({
                            type:'getLyricList',
                        })
                    })
                }
            }
        }).catch(err=>{
            Vue.prototype.$toast.show('该歌曲暂时无法播放')
        })

    },
    getDjRadioDetail(context,payload)
    {
        return new Promise((resolve,reject)=>{
            programmMsg(payload.id).then(data=>{
                const {mainSong}=data.program;
                let song = {
                    ar: [{name: ''}],
                    alia: [{}],
                    name: '',
                    al: {
                        name: '',
                        picUrl:''
                    },
                    dt:0
                };

                song.name = mainSong.name;
                song.ar[0].name = mainSong.artists[0].name;
                song.alia[0] =mainSong.alias[0];
                song.al.name = mainSong.album.name;
                song.al.picUrl=payload.picUrl;
                song.dt=mainSong.duration;
                context.commit({
                    type: 'changeCurrentSong',
                    song: song
                })
                resolve(mainSong.id);
            })
        })
    },
    //切歌
    changeSongAction(context,payload)
    {
       return new Promise((resolve,reject)=>{
            let currentIndex=context.state.currentSongIndex;
            switch(context.state.playMode)
            {
                case 0:
                    let randomIndex=getRandom(0,context.state.playList.length-1);
                    while (context.state.currentSongIndex===randomIndex)
                    {
                        randomIndex=getRandom(0,context.state.playList.length-1)
                    }
                    currentIndex=randomIndex;break;
                default:
                    currentIndex+=payload.tag
                    if(currentIndex<0)
                    {
                        currentIndex=context.state.playList.length-1;
                    }
                    else if(currentIndex>=context.state.playList.length)
                    {
                        currentIndex=0;
                    }
            }
            context.commit({
                type:'changeCurrentSong',
                song:context.state.playList[currentIndex]
            })
            context.commit({
                type:'changeCurrentSongIndex',
                songIndex:currentIndex
            })
            context.dispatch({
                type:'getMusicUrl',
                songId:context.state.currentSong.id
            })
           context.dispatch({
               type:'getLyricList'
           })
           resolve();
        })
    },
    //获取歌词并格式化
    getLyricList(context,payload)
    {
        songLyric(context.state.currentSong.id).then(data=>{
            if(data.lrc&&data.lrc.lyric){
                const lyricList=getFormatLyric(data.lrc.lyric);
                context.commit({
                    type:'changeLyricList',
                    lyricList:lyricList
                })
            }
        })
    },
    //获取歌单详情
    getSongListMsgAction(context,payload)
    {
        songListMsg(payload.id).then(data=>{
            context.commit({
                type:'changePlayListDetail',
                playListDetail:data.playlist
            })
        })
    },
    //飙升榜
    getUpRankingAction(context,payload)
    {
        songListMsg(payload.id).then(data=>{
            context.commit({
                type:'changeUpRanking',
                upRanking:data.playlist
            })
        })
    },
    //新歌榜
    getNewRankingAction(context,payload)
    {
        songListMsg(payload.id).then(data=>{
            context.commit({
                type:'changeNewRanking',
                newRanking:data.playlist
            })
        })
    },
    //原创榜
    getOriginRankingAction(context,payload)
    {
        songListMsg(payload.id).then(data=>{
            context.commit({
                type:'changeOriginRanking',
                originRanking:data.playlist
            })
        })
    },
    //热歌榜
    getHotRankingAction(context,payload)
    {
        songListMsg(payload.id).then(data=>{
            context.commit({
                type:'changeHotRanking',
                hotRanking:data.playlist
            })
        })
    },
}