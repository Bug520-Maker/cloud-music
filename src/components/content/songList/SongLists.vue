<!--为所有歌曲列表封装一个组件-->
<template>
    <div id="song-list">
        <ul>
            <li v-for="(item,index) in songLists">
                <i class="iconfont icon-love love" ></i>
                <i class="iconfont icon-Addtodownload down" ></i>
                <div class="songName" @dblclick="playSong(index)">{{item.name }}  <span>{{item.alias[0]}}</span></div>
                <div class="singerName">{{item.artists[0].name}}</div>
                <div class="albumName">{{item.album.name}}</div>
                <div>{{duration(item.duration)}}</div>
                <div></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {musicUrl} from "../../../network/public/musicUrl";
    import {albumContent} from "../../../network/public/albumContent";

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
                //console.log(this.songId);                                               /*向playCoin发送歌曲的url*/
                musicUrl(this.songId).then(res=>{
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl,
                        songId:this.songId
                    })
                });
                albumContent(this.songLists[index].album.id||this.$store.state.songs[index].album.id).then(data=>{
                    this.$store.commit({                                   /*向playCoin发送封面图片*/
                        type:'getAlbumImg',
                        albumImgUrl:this.songLists[index].alImgUrl || data.album.blurPicUrl
                    })
                })
               // console.log(this.$store.state.searchList.songs[index]);
                this.$store.commit({
                    type:'getSingleInfo',
                    details:this.songLists[index]||this.$store.state.searchList.songs[index]
                })
            },
            duration(item)
            {
                let num=item/60000;
                let number=num.toString().split(".");
                let time="0"+number[0]+":"+number[1].slice(0,2);
                return time;
            }
        },
    }
</script>

<style scoped>
    @import "../../../assets/font/searchResult/iconfont.css";
    #song-list ul li
    {
        display: flex;
        padding: 5px 0 5px 30px;
        font-size: 13px;
    }
    #song-list ul
    {
        margin: 2px 0 0 0;
        width: 100%;
    }
    #song-list ul li div
    {
        flex:1;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
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
        font-size: 12px;
        margin: 0 10px;
    }
</style>