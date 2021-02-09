<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container">
          <div class="cover" @click="imgClick"></div>
            <img :src="((this.$store.state.songDetail.al.picUrl==='') ? this.$store.state.songDetail.al.picUrl='':
                         this.$store.state.songDetail.al.picUrl+'?param=50y50' )|| normalUrl+'?param=50y50'"
                 class="albumImg"/><!--获取歌曲封面图片-->
        </div>
        <div id="songInfo">
            <p class="text-nowrap">{{this.$store.state.songDetail.name||'网易云'}}   <!--获取歌曲名称-->
                <span :title="this.$store.state.songDetail.alia[0]">
                    {{this.$store.state.songDetail.alia[0]}}    <!--获取歌曲简介-->
                </span>
            </p>
            <p @click="pClick">{{this.$store.state.songDetail.ar[0].name||'青春不散'}}</p>  <!--获取单曲 歌手-->
        </div>
      <player/>
        <PlayPage id="play-page"  :isActive="{isLive:isActive}" :oLRC="oLRC" :class="{active:isActive}"/>
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
  created() {

  },
  data() {
    return {
      songInfo: [],
      normalUrl: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
      isActive: false,
      oLRC: {
        ti: "", //歌曲名
        ar: "", //演唱者
        al: "", //专辑名
        by: "", //歌词制作人
        offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
        ms: [] //歌词数组{t:时间,c:歌词}
      },
      lyric: '',//歌词
      songDetails: {},
      musicURL: '',
      albumImg: '',

    }
  },
  methods: {
    imgClick() {
      this.isActive ? this.isActive = false : this.isActive = true;
      if (this.$store.state.songDetail.id !== '') {
        songLyric(this.$store.state.songDetail.id).then(data => {
          try {
            this.lyric = data.lrc.lyric;
            this.createLrcObj(data.lrc.lyric);
            //this.createLrcObj(data.tlyric.lyric);
          } catch (e) {

          }
        })
      }
    },
    pClick() {
      if (this.$store.state.songDetail.ar[0].id !== '') {
        this.$router.push({
          path: '/singerDetails',
          query: {
            artistId: this.$store.state.songDetail.ar[0].id
          }
        })
      }
    },

    createLrcObj(lrc) {
      if (lrc.length === 0) {
        return;
      }
      this.oLRC.ms.length = 0;
      let lrcs = lrc.split('\n');                                                     //用回车拆分成数组
      for (let i in lrcs)                                                             //遍历歌词数组
      {
        lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, "");                            //去除前后空格
        let t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]")); //取[]间的内容
        let s = t.split(":");                                             //分离:前后文字
        if (isNaN(parseInt(s[0]))) { //不是数值
          for (let i in oLRC) {
            if (i != "ms" && i == s[0].toLowerCase()) {
              this.oLRC[i] = s[1];
            }
          }
        } else {                                               //是数值
          let arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
          let start = 0;
          for (let k in arr) {
            start += arr[k].length;                //计算歌词位置
          }
          let content = lrcs[i].substring(start);    //获取歌词内容
          for (let k in arr) {
            let t = arr[k].substring(1, arr[k].length - 1);   //取[]间的内容
            let s = t.split(":");                   //分离:前后文字
            this.oLRC.ms.push({                               //对象{t:时间,c:歌词}加入ms数组
              t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
              c: content
            });
          }
        }
      }
      this.oLRC.ms.sort(function (a, b) {      //按时间顺序排序
        return a.t - b.t;
      });
    }
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