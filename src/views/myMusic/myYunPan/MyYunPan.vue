<template>
    <div class="my-yun-pan clearfix" :key="songId">
        <div class="yun-outer" v-show="this.$store.state.loginType===1">
          <div class="my-pan">我的音乐云盘</div>
          <div class="pan-container">
            <div class="pan">云盘容量</div>
          </div>
          <button class="play-all">
            <i class="iconfont icon-custom-play"></i>
            <span>播放全部</span>
            <i class="iconfont icon-jia"></i>
          </button>
          <!--上传音乐-->
          <button class="upload-music">
            <div>
              <i class="iconfont icon-jia1"></i>
              <span>上传音乐</span>
            </div>
            <input type="file" @change="uploadSong('song1')" ref="song1" accept="audio/*" />
          </button>
          <div class="nav-bar">
            <div v-for="item in ['音乐标题','歌手','专辑','格式','大小','上传时间']">
              {{item}}
            </div>
          </div>
          <div class="add-music" v-if="userCloud.length===0">
            <div>现在上传文件，电脑手机都能听</div>
            <div>超大空间，歌曲永久保存</div>
            <div id="inp">
              <span>选择文件</span>
              <input id="file" type="file" @change="uploadSong('song2')" ref="song2" accept="audio/*"/>
            </div>
          </div>
          <user-cloud :songs="userCloud" />
        </div>
      <div class="ask-to-login" v-if="this.$store.state.loginType===0">
        <img src="../../../assets/img/video-mv/mymusic.png" />
      </div>
    </div>
</template>

<script>
import {musicUpload, usrCloud} from "@/network/pan";
import UserCloud from "@/views/myMusic/myYunPan/childCpn/UserCloud";
    export default {
      name: "MyYunPan",
      components: {UserCloud},
      data(){
        return {
          userCloud:[],
          songId:''
        }
      },
      created() {
        if(this.$store.state.loginType===1)
        {
          usrCloud().then(res=>{
            this.userCloud=res.data;
            //console.log(res);
          })
        }
      },
      methods:{
        uploadSong(ref)
        {
          const fileLength=this.$refs[ref].files.length;
          let currentIndex=0;
          for(const item of this.$refs[ref].files)
          {
            currentIndex+=1;
            this.upload(item,currentIndex);
          }
        },
        upload(file,currentIndex){
          let formData=new FormData();
          formData.append('songFile',file);
          musicUpload(formData).then(data=>{
            console.log("文件上传成功")
            this.songId=data.songId
          }).catch(err=>{
            console.log(err);
            console.log("文件上传失败")
          })
        }
      }
    }
</script>

<style scoped>
  .my-pan{
    font-size: 18px;
    font-weight: bolder;
    margin: 30px 0 15px 30px;
  }
  .pan-container{
    margin: 0 0 10px 30px;
  }
  .pan-container .pan{
    font-size: 12px;
    color: #676767;
  }
  .play-all{
    padding: 5px 13px;
    margin: 0 10px 0 30px;
    color: #ffffff;
    background-color: #ec4141;
    font-size: 15px;
    border-radius: 15px;
  }
  .play-all span{
    margin: 0 10px;
  }
  .upload-music{
    padding: 0px 13px;
    background-color: #fff;
    font-size: 15px;
    border-radius: 15px;
    border: 1px solid #d8d8d8;
    color: #373737;
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 30px;
    line-height: 23px;
  }
  .upload-music > div{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .upload-music input{
    opacity: 0;
  }
  .upload-music span{
    margin: 0 10px 0 0;
  }
  .nav-bar{
    display: flex;
    font-size: 12px;
    color: #888888;
    border-top: 1px solid #f2f2f2;
    margin: 20px 0 0 0;
  }
  .nav-bar div{
    padding: 10px 45px 5px 5px;
  }
  .nav-bar div:nth-child(1)
  {
    width: 230px;
    margin: 0 0 0 100px;
  }
  .nav-bar div:hover{
    background-color: #f0f1f2;
  }
  .add-music{
    width: 325px;
    position: relative;
    top: 100px;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .add-music div:nth-child(1){
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }
  .add-music div:nth-child(2)
  {
    font-size: 14px;
    color: #373737;
    margin: 20px 0 30px 0;
    text-align: center;
  }
  .add-music input{
    opacity: 0;
  }
  #inp{
    background-color: #ec4141;
    width: 90px;
    overflow: hidden;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;

  }
  #inp span{
    position: absolute;
    font-size: 13px;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

</style>