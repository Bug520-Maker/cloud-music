<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container">
          <div class="cover" @click="imgClick"></div>
            <img :src="((this.$store.state.currentSong.al.picUrl==='') ? this.$store.state.currentSong.al.picUrl='':
                         this.$store.state.currentSong.al.picUrl+'?param=50y50' )|| normalUrl+'?param=50y50'"
                 class="albumImg"/><!--获取歌曲封面图片-->
        </div>
        <div id="songInfo">
            <p class="text-nowrap">{{this.$store.state.currentSong.name||'网易云'}}   <!--获取歌曲名称-->
                <span :title="this.$store.state.currentSong.alia[0]">
                    {{this.$store.state.currentSong.alia[0]}}    <!--获取歌曲简介-->
                </span>
            </p>
            <p @click="pClick">{{this.$store.state.currentSong.ar[0].name||'青春不散'}}</p>  <!--获取单曲 歌手-->
        </div>
      <player/>
        <PlayPage id="play-page" :isActive="{isLive:isActive}" :class="{active:isActive}"/>
    </div>
</template>

<script>
import PlayPage from "./playPage/PlayPage";
import {songLyric} from "@/network/playCoin/songDetal";
import Player from "@/components/content/playCoin/player";

export default {
  name: "playCoin",
  components: {
    Player,
    PlayPage
  },
  data() {
    return {
      normalUrl: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
      isActive: false,
    }
  },
  methods: {
    imgClick() {
      this.isActive ? this.isActive = false : this.isActive = true;
    },
    pClick()
    {
      if (this.$store.state.currentSong.ar[0].id !== '') {
        this.$router.push({
          path: '/singerDetails',
          query: {
            artistId: this.$store.state.currentSong.ar[0].id
          }
        })
      }
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
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    #img-container
    {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        left: 15px;
        background-image: url("../../../assets/img/playCoin/play.png");
        background-size: cover;
        border-radius: 5px;
        background-color: #42b983;
    }
    #img-container:hover .cover{
      display: block;
    }
    .cover{
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #000;
      opacity: 0.5;
      border-radius: 5px;
      display: none;
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
      cursor: pointer;
    }
    #img-container .albumImg
    {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    #img-container:hover
    {
        cursor: pointer;
    }
    /*设置播放页面样式*/
    #play-page {
      width: 1021px;
      height: 535px;
      position: absolute;
      top:-536px;
      transition: all 0.3s;
      z-index: 99;
      background-color:white;
      /*overflow: hidden;*/
      transform: scale(0);
      transform-origin: left bottom;
      z-index: 999999;
    }

    #play-page.active {
      background-color: #ffffff;
      transform: scale(1);
    }
</style>