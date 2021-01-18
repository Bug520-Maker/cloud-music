<!--mv播放页面的mv简介-->
<template>
  <div class="mv-msg">
    <div class="avatar">
      <img :src="videoData.cover" />
      <span class="artist-name">{{videoData.artistName}}</span>
    </div>
    <div class="name">{{videoData.name}}</div>
    <div class="publish-play">
      <span>发布：{{videoData.publishTime}}</span>
      <span>播放：{{videoData.playCount}}次</span>
    </div>
    <div class="desc">{{videoData.desc}}</div>
    <div class="control-btn">
      <button>
        <i class="iconfont icon-zanpress1"></i>
        赞()</button>
      <button>
        <i class="iconfont icon-jiarushoucang"></i>
        收藏({{videoData.subCount}})</button>
      <button>
        <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
        分享({{videoData.shareCount}})</button>
      <button>
        <i class="iconfont icon-download"></i>
        下载MV</button>
    </div>
  </div>
</template>

<script>
import {mvData} from "@/network/vision/mv/mvList";

export default {
  name: "VideoMsg",
  data()
  {
    return {
      videoData:{}
    }
  },
  props:{
    mvId:{
      type:String,
      default:'',
    }
  },
  created() {
    mvData(this.mvId).then(data=>{
      console.log(data.data);
      this.videoData=data.data;
    })
  }
}
</script>

<style scoped>
  .avatar img
  {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .avatar
  {
    display: flex;
  }
  /*artist的name*/
  .artist-name
  {
    color:#676767;
    margin:16px 0 0 10px;
  }
  /*设置state样式*/
  .name
  {
    font-size: 20px;
    font-weight: bolder;
    margin: 25px 0 15px;
  }
  /*发布/播放*/
  .publish-play span
  {
    font-size: 13px;
    color:#cfcfcf;
  }
  /*简介*/
  .desc{
    color: #373737;
    font-size: 13px;
    margin: 10px 0 30px;
  }
  /*控制按钮*/
  .control-btn button
  {
    padding: 5px 15px;
    margin: 0 10px 0 0;
    font-size: 13px;
    border-radius: 15px;
    background-color: #ffffff;
    border: 1px solid #d8d8d8;
    color: #656565;
  }
</style>