import {musicUrl} from "@/network/public/musicUrl";
import {albumContent} from "@/network/public/albumContent";
import {songListMsg} from "@/network/playlist/playlist";

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
            console.log(data);
                context.commit({
                type: 'getAlbumImg',
                albumImgUrl:data.album.blurPicUrl
            })
        })
    },
    /*用户歌单信息*/
    userSongList(context,payload)
    {
        songListMsg(payload.songListId).then(data=>{
            //console.log(data);
            context.commit({
                type:'getUserSongListMsg',
                userSongListMsg:data.playlist
            })
        })
    }

}