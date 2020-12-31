<template>
    <div class="sheetMsg"><!--显示歌单下的歌曲列表和歌单信息-->
        <div class="introduce">
            <div><img :src="this.$store.state.playlist.coverImgUrl+'?param=184y184'" /></div>
            <div class="msg">
                <span >{{this.$store.state.playlist.name}}</span>
                <span>{{this.$store.state.playlist.creator.nickname}}</span>
                <span>标签：<span v-for="(item,index) in this.$store.state.playlist.tags" :key="index">
                                {{item}}/
                           </span>
                </span>
                <span>
                    <span style="color: rgb(103, 103, 103)">歌曲：{{this.$store.state.playlist.trackCount}} </span>
                    <span style="display: inline-block;margin-left: 10px;color: rgb(103, 103, 103)"> 播放量：{{Math.floor((this.$store.state.playlist.playCount)/1000000)}}万</span>
                </span>
                <span style="color: rgb(103, 103, 103)">简介：{{this.$store.state.playlist.description}}</span>
            </div>
        </div>
        <!-- <span>{{this.$store.state.playlist.trackIds}}</span>-->
        <ul id="title">
            <li v-for="(item,index) in title" :key="index" @click="itemClick(index)" :class="{active:currentIndex==index}">
                {{item}}
            </li>
        </ul>
        <ul class="title-header">
            <li>音乐标题</li>
            <li>歌手</li>
            <li>专辑</li>
            <li>时长</li>
        </ul>
       <ul class="songList">
            <li v-for="(item,index) in songInformation" :key="index" @click="liclick(index,item)" >
                <div>
                    <i class="iconfont icon-love"></i>
                    <i class="iconfont icon-Addtodownload"></i>
                </div>
                <div>{{item[0].name}}</div>
                <div>{{item[0].ar[0].name}}</div>
                <div>{{item[0].al.name}}</div>
                <div></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import{musicUrl} from "../../../network/public/musicUrl";
    import {songDetailes} from "../../../network/playCoin/songDetal";
    import {albumContent} from "../../../network/public/albumContent";

    export default {
        name: "songSheetList",
        data()
        {
            return {
                title:['歌曲列表','评论','收藏者'] ,
                currentIndex:0,
                songInformation:[],
                artist: {}
            }
        },
        methods:{
            liclick(index,item)
            {
                musicUrl(item[0].id).then(res=>{
                    //console.log(res.data[0]);
                    this.$store.commit({
                        type:'getSongUrl',
                        url:res.data[0].url
                    })
                })
                this.$store.commit({
                    type:'getAlbumImg',
                    albumImgUrl:this.songInformation[index][0].al.picUrl
                })
                let songDetails={
                    name:this.songInformation[index][0].name,
                    artists:[
                        {name:this.songInformation[index][0].ar[0].name}
                    ],
                    alias:[''],
                    album:{name:this.songInformation[index][0].al.name},
                    id:this.songInformation[index][0].id
                }
                console.log(songDetails)
                this.$store.commit({
                    type:'getSingleInfo',
                    details:songDetails
                })
            },
            itemClick(index)
            {
                this.currentIndex=index;
            }
        },
        created() {
           // console.log(this.$store.state.playlist.tracks)
            for (let item of this.$store.state.playlist.tracks)
            {

                songDetailes(item.id).then(data=>{
                   //console.log(data.songs)
                    try {
                        this.songInformation.push(data.songs);
                    }catch (e) {

                    }

                })

            }

        }
    }
</script>

<style scoped>
    @import "../../../assets/font/163.music_font/iconfont.css";
    .sheetMsg img
    {
        width: 184px;
        border-radius: 8px;
    }
    .sheetMsg{
        padding: 30px 0 0 20px;
        height: 506px;
        overflow: auto;
        width:760px;
        scrollbar-color: transparent transparent;
    }
   .sheetMsg::-webkit-scrollbar
    {
        width: 2px;
    }
    .introduce
    {
        display: flex;
    }
    .introduce .msg
    {
        width: 300px;
        margin: 0 0 0 30px;
    }
    .introduce .msg > span
    {
        display: block;
        margin: 0 0 10px 0;
    }
    .introduce .msg > span:nth-of-type(1)
    {
        font-weight: bold;
        font-size: 18px;
    }
    .introduce .msg > span:nth-of-type(5)
    {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;
    }
    .introduce .msg > span:nth-of-type(2)
    {
        font-size: 12px;
        color: rgb(11, 88, 193);
    }
    .introduce .msg > span:nth-of-type(3)
    {
        font-size: 13px;
    }
    .introduce .msg > span:nth-of-type(3) span
    {
        color: rgb(11,88,193);
    }
    .introduce .msg > span:nth-of-type(4)
    {
        font-size: 13px;
    }
    .sheetMsg .songList
    {
        margin: 0;
    }
    .sheetMsg .songList li
    {
        font-size: 14px;
        padding: 5px 5px;
    }
    .sheetMsg .songList li:hover
    {
        background-color: rgb(240, 241, 242);
    }
    .sheetMsg .songList li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .sheetMsg #title
    {
        display: flex;
    }
    .sheetMsg #title li
    {
        margin: 30px 20px 0 0;
        font-size: 14px;
        padding-bottom: 5px;
        cursor: pointer;
    }
    .sheetMsg #title li.active
    {
        border-bottom: 3px solid rgb(236, 65, 65);
        font-weight: 600;
    }
    .title-header
    {
        display: flex;
    }
    .title-header li
    {
        margin-right: 5px;
        font-size: 13px;
        color: rgb(136, 136, 136);
        padding: 10px 0;
    }
    .title-header li:hover
    {
        background-color:rgb(240, 241, 242);
        cursor:pointer;
    }
    .title-header li:nth-of-type(1)
    {
        flex-grow: 1.7;
        margin-left: 40px;
        padding-left: 40px;
    }
    .title-header li:nth-of-type(2)
    {
        flex-grow: 0.8;
    }
    .title-header li:nth-of-type(3)
    {
        flex-grow: 1;
    }
    .title-header li:nth-of-type(4)
    {
        flex-grow: 0.5;
    }
    .sheetMsg .songList li
    {
        display: flex;
        width: 100%;
    }
    .sheetMsg .songList li div:nth-of-type(1) i
    {
        margin: 0 10px 0 0;
    }
    .sheetMsg .songList li div:nth-of-type(1) i:nth-of-type(2)
    {
        font-size: 12px;
    }
    .sheetMsg .songList li div:nth-of-type(2)
    {
        width: 38%;
        padding-left: 26px;
    }
    .sheetMsg .songList li div:nth-of-type(3)
    {
        width: 19%;
    }
    .sheetMsg .songList li div:nth-of-type(4)
    {
       width: 22%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .sheetMsg .songList li div:nth-of-type(5)
    {
        width: 10%;
    }
    .sheetMsg .songList li div
    {
        margin: 0 3px 0 0;
        font-size: 13px;
        color: rgb(136, 136, 136);
        cursor: pointer;
    }

</style>