<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container" @click="imgClick"><img :src="this.$store.state.albumImgUrl" class="albumImg"/></div>
        <audio :src="this.$store.state.songUrl" controls="controls" class="play-song" ref="playSong" autoplay="autoplay"></audio>
        <div  class="playPage" ref="playPage" :class="{active:isActive}">
            <div class="album-container"><img :src="this.$store.state.albumImgUrl"/></div>
            <div id="songMsg">

            </div>
        </div>

    </div>
</template>

<script>
    import {songDetailes} from "../../network/playCoin/songDetal";
    export default {
        name: "playCoin",
        updated() {
            this.$refs.playSong.volume=0.2;
        },
        data()
        {
            return {
                isActive:false,
                songInfo:[]
            }
        },
        methods:{
            imgClick()
            {
                // this.$refs.playPage.style.display="none";
                this.isActive ? this.isActive=false : this.isActive=true;
                songDetailes(this.$store.state.songId).then(data=>{
                    this.songInfo=data.songs;
                })
            }
        }
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
        transition-duration: 0.2s;
        transition-property: width,height;
        overflow: hidden;
        position: relative;
    }
    .play-coin div.active
    {
        width:1021px ;
        height: 535px;
        background-color: white;
    }
    .album-container
    {
        width: 310px;
        height:310px;
        background-color: #0077aa;
        border-radius: 50%;
        position: absolute;
        left: 80px;
        top: 60px;
        border: 52px solid rgb(48, 49, 51);
        box-sizing:border-box;
        overflow: hidden;
        animation: test infinite linear 15s;
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
        width: 210px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    #songMsg
    {
        width: 400px;
        height: 200px;
        background-color: pink;
        position: absolute;
        left: 550px;
        top: 30px;
    }
</style>