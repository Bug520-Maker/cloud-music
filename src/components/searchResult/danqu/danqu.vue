<template>
    <div class="search-result clearfix">
        <div class="single-title">
            <div>音乐标题</div>
            <div>歌手</div>
            <div>专辑</div>
            <div>时长</div>
            <div>热度</div>
        </div>
        <ul>
            <li v-for="(item,index) in this.$store.state.songs" :key="index">
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
    import {songDetailes} from "../../../network/playCoin/songDetal";

    export default {
        name: "danqu",
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
                this.songId=this.$store.state.songs[index].id;
                musicUrl(this.$store.state.songs[index].id).then(res=>{
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl,
                        songId:this.songId
                    })
                });
                albumContent(this.$store.state.songs[index].album.id).then(data=>{
                    this.$store.commit({
                        type:'getAlbumImg',
                        albumImgUrl:data.album.blurPicUrl
                    })
                })
                console.log(this.$store.state.searchList.songs[index]);
                this.$store.commit({
                    type:'getSingleInfo',
                    details:this.$store.state.searchList.songs[index]
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
    .single-title/*显示音乐标题 ，歌手 ，专辑，时长*/
    {
        display: flex;
        width: 100%;
        position: absolute;
        top: 93px ;
        left: 0;
    }
    .single-title div
    {
        text-align: center;
        color: rgb(136, 150, 150);
        font-size: 13px;
    }
    .single-title div:nth-child(1)
    {
        flex-grow: 1;
    }
    .single-title div:nth-child(2)
    {
        flex-grow: 0.5;
    }
    .single-title div:nth-child(3)
    {
        flex-grow: 0.5;
    }
    .single-title div:nth-child(4)
    {
        flex-grow: 0.1;
    }
    .single-title div:nth-child(5)
    {
        flex-grow: 0.5;
    }
    .search-result
    {
        float: left;
        margin: 30px 0 0 0;
        width: 100%;
    }
    .search-result ul li
    {
        display: flex;
        padding: 5px 0 5px 30px;
        font-size: 13px;
    }
    .search-result ul
    {
        margin: 2px 0 0 0;
        width: 100%;
    }
    .search-result ul li div
    {
        flex:1;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .search-result ul li div:nth-child(1) span
    {
        color: rgb(136, 150, 150);
        margin: 0 0 0 5px;
    }
    .search-result ul li div:nth-of-type(1)
    {
        flex-grow: 1;
    }
    .search-result ul li div:nth-of-type(2)
    {
        flex-grow: 0.5;
    }
    .search-result ul li div:nth-of-type(3)
    {
        flex-grow: 0.5;
    }
    .search-result ul li div:nth-of-type(4)
    {
        flex-grow: 0.2;
        text-align: left;
    }
    .search-result ul li div:nth-of-type(5)
    {
        flex-grow: 0.5;
        background-color: #f2f2f2;
    }

    .search-result ul li:nth-child(odd)
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