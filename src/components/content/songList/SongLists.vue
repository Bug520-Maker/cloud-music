<!--为所有歌曲列表封装一个组件-->
<template>
    <div id="song-list">
        <ul>
            <li v-for="(item,index) in songLists">
                <i class="iconfont icon-love love" ></i>
                <i class="iconfont icon-download down" ></i>
                <div class="songName" @dblclick="playSong(index)">{{item.name }}  <span>{{item.alias[0]}}</span></div>
                <div class="singerName">{{item.artists[0].name}}</div>
                <div class="albumName">{{item.album.name}}</div>
                <div class="duartion">{{duration(item.duration)}}</div>
                <div ></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {musicUrl} from "@/network/public/musicUrl";
    import {albumContent} from "@/network/public/albumContent";
    import {formatDt} from "@/assets/function/formatDt";

    export default {
        name: "SongLists",
        props:{
            songLists:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        data()
        {
            return {
                songUrl:'',
                songId:''
            }
        },
        methods:{
            playSong(index)
            {
                this.songId=this.songLists[index].id||this.$store.state.songs[index].id;
                musicUrl(this.songId).then(res=>{               /*向playCoin发送歌曲的url*/
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl,
                        songId:this.songId
                    })
                });
                /*向playCoin发送封面图片*/
                albumContent(this.songLists[index].album.id||this.$store.state.songs[index].album.id).then(data=>{
                    this.$store.commit({
                        type:'getAlbumImg',
                        albumImgUrl:this.songLists[index].alImgUrl || data.album.blurPicUrl
                    })
                })
               /*搜索结果中的单曲详细信息*/
                this.$store.commit({
                    type:'getSingleInfo',
                    details:this.songLists[index]||this.$store.state.searchList.songs[index]
                })
            },
            duration(item)
            {
                return formatDt(item);
            }
        },
    }
</script>

<style scoped>
    @import "../../../assets/font/163.music_font/iconfont.css";
    #song-list
    {
      width: 730px;
    }
    #song-list ul li
    {
        display: flex;
        padding: 5px 0 5px 20px;
        font-size: 12px;
    }
    #song-list ul
    {
        margin: 2px 0 0 0;
        width: 100%;
    }
    #song-list ul li div
    {
        flex:1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    #song-list ul li div:nth-child(1) span
    {
        color: rgb(136, 150, 150);
        margin: 0 0 0 5px;
    }
    #song-list ul li div:nth-of-type(1)
    {
        flex-grow: 1;
    }
    #song-list ul li div:nth-of-type(2)
    {
        flex-grow: 0.5;
    }
    #song-list ul li div:nth-of-type(3)
    {
        flex-grow: 0.5;
    }
    #song-list ul li div:nth-of-type(4)
    {
        flex-grow: 0.2;
        text-align: left;
    }
    #song-list ul li div:nth-of-type(5)
    {
        flex-grow: 0.5;
        background-color: #f2f2f2;
    }

    #song-list ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .singerName,.albumName
    {
        color: rgb(97, 97, 98);
    }
    .songName
    {
        color: rgb(80, 145, 202);
        cursor: pointer;
    }
    /*设置图标字体样式*/
    .love,.down
    {
        color: rgb(136, 150, 150);
        cursor: pointer;
    }
    .down
    {
        font-size: 14px;
        margin: 0 10px;
    }
    .duartion
    {
      color: #9f9f9f;
    }
    #song-list ul li:hover
    {
      background-color: #f0f1f2;
    }
</style>