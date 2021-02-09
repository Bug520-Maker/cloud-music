<!--音乐播放-->
<template>
  <div class="play">
    <audio :src="this.$store.state.songUrl" ref="playSong" @timeupdate="getCurrentTime" />
    <div class="play-control">
        <div class="pause" @click="playMusic">
          <div class="play-mode">
            <i class="iconfont icon-liebiaoxunhuan"></i>
          </div>
          <i class="iconfont icon-skipnext prev"></i>
          <div class="play-or-pause">
            <i class="iconfont icon-custom-play custom-play" v-show="!isPlay"></i>
            <i class="iconfont icon-pause" v-show="isPlay"></i>
          </div>
          <i class="iconfont icon-skipnext next"></i>
          <div class="lyric">词</div>
        </div>
      <div class="slide">
        <div class="currentTime">{{ formatDate(currentTime,"mm:ss") }}</div>
        <div class="wrapper" @mousedown="silderDown">
          <el-slider v-model="value" :show-tooltip="false" @input="sliderChange" @change="sliderEnd"></el-slider>
        </div>
        <div class="totalTime">
          {{formatDate(this.$store.state.songDetail.dt,"mm:ss")}}
        </div>
      </div>
    </div>
    <div class="right-control"></div>
  </div>
</template>

<script>
import {formatDate} from "@/utils/format/format";

export default {
  name: "player",
  data()
  {
    return {
      value:0,
      isChange:false,
      currentTime:0,
      isMove:false,
      isPlay:false
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
        this.currentTime=value/100*this.$store.state.songDetail.dt;
      }
    },
    sliderEnd(value)
    {
      this.$refs.playSong.currentTime=value/100*this.$store.state.songDetail.dt/1000;
      this.currentTime=value/100*this.$store.state.songDetail.dt;
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
        const totalTime=this.$store.state.songDetail.dt;
        this.value=this.currentTime/totalTime*100;
      }
    },
    formatDate(time,ft)
    {
      return formatDate(time,ft);
    }
  },
  mounted() {
    this.$refs.playSong.volume = 0.1;
  },
  created() {
    this.$store.watch((state,getter)=>{
      return state.songUrl
    },(newArg,oldArg)=>{

    })
  }
}
</script>

<style scoped>
.play{
  display: flex;
}
.play-control
{
  width: 490px;
  height: 50px;
  /*border:1px solid skyblue;*/
  margin: 0 30px 0 0;
}
.right-control{
  width: 200px;
  background-color: #42b983;
  height: 50px;
  margin-right: 30px;
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
  font-size: 16px;
  display: inline-block;
}
/*桌面歌词*/
.lyric{
 font-size: 12px;
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