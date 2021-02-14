<!--音乐播放-->
<template>
  <div class="play">
    <audio :src="this.$store.state.songUrl" ref="playSong" @timeupdate="getCurrentTime" @ended="endHandle"/>
    <div class="play-control">
        <div class="pause">
          <!--用户播放模式-->
          <div class="play-mode" @click="changePlayMode">
            <i class="iconfont icon-liebiaoxunhuan" v-show="this.$store.state.playMode===1" :title="playModeMap.get(1)"></i>
            <i class="iconfont icon-danquxunhuan" v-show="this.$store.state.playMode===2" :title="playModeMap.get(2)"></i>
            <i class="iconfont icon-suijibofang" v-show="this.$store.state.playMode===0" :title="playModeMap.get(0)"></i>
          </div>
          <!--上一首-->
          <i class="iconfont icon-skipnext prev" @click="changeSong(-1)"></i>
          <div class="play-or-pause"  @click="playMusic">
            <i class="iconfont icon-custom-play custom-play" v-show="!isPlay"></i>
            <i class="iconfont icon-pause" v-show="isPlay"></i>
          </div>
          <!--下一首-->
          <i class="iconfont icon-skipnext next" @click="changeSong(1)"></i>
          <div class="lyric" @click="isLyric">词</div>
        </div>
      <div class="slide">
        <div class="currentTime">{{ formatDate(currentTime,"mm:ss") }}</div>
        <div class="wrapper" @mousedown="silderDown">
          <el-slider v-model="value" :show-tooltip="false" @input="sliderChange" @change="sliderEnd"></el-slider>
        </div>
        <div class="totalTime">
          {{formatDate(this.$store.state.currentSong.dt,"mm:ss")}}
        </div>
      </div>
    </div>
    <div class="right-control">
      <div class="music-effect">
        <div>标准</div>
      </div>
      <!--设置音量-->
      <div class="vol">
        <div>
          <i class="iconfont icon-yangshengqi"></i>
        </div>
        <div id="vol-progress">
          <el-slider v-model="vol"></el-slider>
        </div>
      </div>
      <!--设置播放列表-->
      <div class="play-list">
        <i class="iconfont icon-play-list-2-fill"></i>
      </div>
    </div>
    <div class="lyric-container" :class="{live:isShowLyric}" v-if="this.$store.state.lyric!==''">{{this.$store.state.lyric}}</div>
  </div>
</template>

<script>
import {formatDate} from "@/utils/format/format";

export default {
  name: "player",
  data()
  {
    return {
      value: 0,
      vol:20,
      isChange: false,
      currentTime: 0,
      isMove: false,
      isPlay: false,
      playModeMap:new Map([
        [0, '随机播放'],
        [1,'顺序播放'],
        [2, '单曲循环']
      ]),
      isShowLyric:false,//是否显示歌词
    }
  },
  methods:{
    silderDown()
    {
      this.isMove=true
    },
    sliderChange(value)
    {
      if(this.isMove)
      {
        this.isChange=true;
        this.value=value;
        this.currentTime=value/100*this.$store.state.currentSong.dt;
      }
    },
    sliderEnd(value)
    {
      this.$refs.playSong.currentTime=value/100*this.$store.state.currentSong.dt/1000;
      this.currentTime=value/100*this.$store.state.currentSong.dt;
      this.isChange=false;
      this.isMove=false;
    },
    playMusic()
    {
      this.isPlay?this.$refs.playSong.pause():this.$refs.playSong.play();
      this.isPlay=!this.isPlay
    },
    getCurrentTime(e)
    {
      if(!this.isChange)
      {
        this.currentTime=e.target.currentTime*1000;
        const totalTime=this.$store.state.currentSong.dt;
        this.value=this.currentTime/totalTime*100;
      }
      //实时歌词
      let songIndex=0;
      for(let index in this.$store.state.lyricList)
      {
        if(this.$store.state.lyricList[index].duration>e.target.currentTime*1000)
        {
          songIndex=index;
          break;
        }
      }
      if(this.$store.state.lyricList[songIndex-1]&&this.$store.state.lyric!==this.$store.state.lyricList[songIndex-1].content)
      {
        this.$store.commit({
          type:'changeLineLyric',
          lineLyric:this.$store.state.lyricList[songIndex-1].content
        })
      }
    },
    formatDate(time,ft)
    {
      return formatDate(time,ft);
    },
    //是否显示歌词
    isLyric()
    {
      this.isShowLyric=!this.isShowLyric
    },
    changePlayMode()//改变播放模式 单曲循环 随机播放 顺序播放
    {
      let playMode=this.$store.state.playMode+1;
      if(playMode>2)
      {
        playMode=0;
      }
      this.$store.commit({
        type:'changePlayMode',
        playMode:playMode
      })
    },
    //切歌
    changeSong(tag)
    {
      this.$store.dispatch({
        type:'changeSongAction',
        tag
      }).then(data=>{
        this.playMusic();
      })

    },
    //播放完毕
    endHandle()
    {
      if(this.$store.state.playMode===2)
      {
        this.$refs.playSong.currentTime=0;
        this.$refs.playSong.play();
      }
      else{
        this.changeSong(1)
      }
    }
  },
  mounted() {
    this.$refs.playSong.volume = 0.1;
  },
  created() {
    this.$store.watch((state,getter)=>{
      return state.songUrl
    },(newArg,oldArg)=>{
      this.isPlay=false;
    })
  }
}
</script>

<style scoped>
.play{
  display: flex;
}
.play-control {
  width: 490px;
  height: 50px;
  /*border:1px solid skyblue;*/
  margin: 0 30px 0 0;
}
/*设置标准，音量，播放列表*/
.right-control{
  width: 200px;
  height: 50px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-control i{
  font-size: 20px;
  color: #313132;
}
.right-control .music-effect div{
  border: 1px solid #000;
  font-size: 12px;
  color: #353536;
  padding: 1px 2px;
}
/*音量条*/
#vol-progress{
  margin:-6px 0 0 0;
}
#vol-progress .el-slider{
  width: 70px;
  height: 3px;
}
#vol-progress div.el-slider__button-wrapper{
  height: 6px !important;
}
.vol{
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-evenly;
}
/*歌词*/
.lyric-container{
  position: fixed;
  padding: 10px 20px;
  background-color: rgba(0,0,0,.4);
  left: 50%;
  transform: translateX(-50%);
  top: 83%;
  z-index: 9999999;
  color: #fff;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 1s;
}
.lyric-container.live{
  opacity: 1;
}
.pause{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 /* background-color: #42b983;*/
  width: 330px;
  margin: 0 auto;
  height: 35px;
}
/*播放模式*/
.pause .play-mode i{
  font-size: 18px;
  display: inline-block;
  color: #313132;
}
/*桌面歌词*/
.lyric{
 font-size: 12px;
}
.lyric:hover{
  color: #ec4141;
  cursor: pointer;
}
/*滑动两侧时间*/
.slide{
  display: flex;
  justify-content: space-between;
}
.totalTime,.currentTime{
  font-size: 12px;
  color: #939395;
}
.pause i{
  font-size: 25px;
}
.prev{
  display: inline-block;
  transform:rotateZ(180deg);
}
.play-or-pause{
  width: 35px;
  height:35px;
  background-color:#ebebed;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
}
i.custom-play{
  font-size: 16px;
  display: inline-block;
  margin: 0 0 0 2px;
}
.play-or-pause:hover{
  background-color: #ddddde;
}
.play-mode,.lyric{
  width: 16px;
  height:16px;
  line-height: 16px;
 /* background-color: #ec4141;*/
}
/*设置滑动条样式*/
.el-slider{
  height: 6px;
  margin: 5px auto 0;
  width: 420px;
}

</style>