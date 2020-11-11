<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container" @click="imgClick"><img :src="this.$store.state.albumImgUrl" class="albumImg"/></div>
        <div id="songInfo">
            <p>{{this.$store.state.singleDetails.name}} <span>{{this.$store.state.singleDetails.alias[0]}} </span></p>
            <p>{{this.$store.state.singleDetails.artists[0].name}}</p>
        </div>
        <audio :src="this.$store.state.songUrl" controls="controls" class="play-song" ref="playSong" autoplay="autoplay"></audio>
        <div  class="playPage" ref="playPage" :class="{active:isActive}">
            <div class="album-container" :class="{disappear:isActive}"><img :src="this.$store.state.albumImgUrl" :class="{appear:isActive}"/></div>
            <div id="songMsg">
                <p>{{this.$store.state.singleDetails.name}}</p>
                <p>{{this.$store.state.singleDetails.alias[0]}}</p>
                <ul>
                    <li>专辑：<span>{{this.$store.state.singleDetails.album.name}}</span></li>
                    <li>歌手：<span>{{this.$store.state.singleDetails.artists[0].name}}</span></li>
                    <li>来源  <span></span></li>
                </ul>
                <div class="lyric">
                   <pre>{{lyric}}</pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {songDetailes} from "../../network/playCoin/songDetal";
    import {songLyric} from "../../network/playCoin/songDetal";
    export default {
        name: "playCoin",
        mounted() {
            this.$refs.playSong.volume=0.2;
        },
        data()
        {
            return {
                isActive:false,
                songInfo:[],
                lyric:''
            }
        },
        methods:{
            imgClick()
            {
                // this.$refs.playPage.style.display="none";
                this.isActive ? this.isActive=false : this.isActive=true;
                songDetailes(this.$store.state.songId).then(data=>{
                    this.songInfo=data.songs;
                    //console.log(data.songs);
                })
                songLyric(this.$store.state.singleDetails.id).then(data=>{
                    console.log(data.lrc.lyric)
                    this.lyric=data.lrc.lyric;
                })
            },

        },
    }
</script>

<style scoped>
    .play-coin
    {
        width: 100%;
        height: 70px;
        border-top: 1px solid rgb(225, 225, 225);
        position: relative;
    }
    .play-song
    {
        width: 500px;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        outline: none;
    }
    #img-container
    {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        left: 15px;
        background-image: url("../../assets/img/playCoin/play.png");
        background-size: cover;
        border-radius: 5px;
    }
    #songInfo
    {
        position: absolute;
        left: 75px;
        top: 50%;
        transform: translateY(-50%);
    }
    #songInfo p:nth-of-type(1)
    {
        font-size: 13px;
        width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    #songInfo p:nth-of-type(1) span
    {
        color:  rgb(136, 150, 150);
    }
    #songInfo p:nth-of-type(2)
    {
        font-size: 13px;
        color: rgb(53, 53, 124);
        margin: 10px 0 0 0;
    }
    #img-container .albumImg
    {
        width: 50px;
        border-radius: 5px;
    }
    #img-container:hover
    {
        cursor: pointer;
    }
    .playPage
    {
        width:0px ;
        height: 0px;
        position: absolute;
        top: -536px;
        transition-duration: 0.5s;
        transition-property: width,height;
        overflow: hidden;
        position: relative;
        z-index: 99;
        background-color: white;
    }
    .play-coin div.active
    {
        width:1021px ;
        height: 535px;
        background-color: white;
    }
    .album-container
    {
        /*width: 310px;
        height:310px;*/
        width: 0px;
        height: 0px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: 80px;
        top: 60px;
        border: none;
        box-sizing:border-box;
        overflow: hidden;
        animation: test infinite linear 15s;
        transition-duration: 0.3s;
        transition-property: width,height;
    }
    .playPage .disappear
    {
        width: 310px;
        height:310px;
        border: 52px solid rgb(48, 49, 51);
    }
    @keyframes test {
        from{
            transform: rotateZ(0deg);
        }
        to
        {
            transform: rotateZ(1turn);
        }
    }
    .album-container img
    {
        width: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition-duration: 0.3s;
        transition-property: width;
    }
    .album-container .appear
    {
        width: 210px;
    }

    #songMsg
    {
        width: 400px;
        height: 400px;
        /*border: 1px solid skyblue;*/
        position: absolute;
        left: 550px;
        top: 30px;
    }
    #songMsg p:nth-of-type(1)
    {
        color: rgb(51, 51, 51);
        font-size: 20px;
        margin: 0 0 10px 0;
    }
    #songMsg p:nth-of-type(2)
    {
       color: rgb(76, 76, 76);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;
        margin: 0 0 15px 0;
    }
    #songMsg ul
    {
        display: flex;
        margin: 0 0 30px 0;
    }
    #songMsg ul li
    {
        margin: 0 30px 0 0;
        font-size: 12px;
        color:  rgb(136, 150, 150);
    }
    #songMsg ul li:nth-of-type(1)
    {
        width: 147px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    #songMsg ul li:nth-of-type(2)
    {
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    #songMsg ul li span
    {
        color: rgb(80, 145, 202);
        cursor:pointer;
    }
    .lyric{
        width: 400px;
        height: 280px;
        border-right: 1px solid rgb(230, 230, 230);
        overflow: auto;
    }
    .lyric::-webkit-scrollbar
    {
        width: 5px;

    }
    .lyric::-webkit-scrollbar-thumb
    {
        height: 20px;
        width: 5px;
        background-color: rgb(233, 233, 235);
        border-radius: 5px;
    }
</style>