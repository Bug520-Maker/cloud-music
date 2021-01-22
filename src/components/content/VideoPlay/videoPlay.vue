<template>
    <div class="video-play" :key="key"><!--视频播放组件容器-->
        <div class="video-container">
          <video :volume="0.2"
                 :src="mvurl|| this.$store.state.mvurldata.url"
                 controls="controls"
                 ref="videoPlay"
                 autoplay="autoplay"
                 v-show="this.$store.state.mvurldata.url!=null||mvurl!=null">
          </video>
          <div class="charge"  v-show="this.$store.state.mvurldata.url===null && mvurl===null"></div>
          <!--MV简略介绍-->
          <video-msg :mvId="mvId" v-if="path!==''" :path="path"/>
        </div>
      <!--相关Mv推荐-->
      <related-rec :mvId="mvId" @related-rec="changeVideo"/>
      <!--视频评论-->
      <video-comment :vId="mvId" v-if="path==='/vision/vis'"/>
      <!--MV评论-->
      <mv-comment :mvId="mvId" v-if="path==='/vision/mv'||path==='/singerDetails'"/>
    </div>
</template>
<script>

    import RelatedRec from "@/components/content/VideoPlay/relatedRec/relatedRec";
    import VideoMsg from "@/components/content/VideoPlay/videoMsg/VideoMsg";
    import VideoComment from "@/components/content/VideoPlay/videoComment/VideoComment";
    import MvComment from "@/components/content/VideoPlay/MVcomment/MvComment";
    export default {
        name: "videoPlay",
      components: {MvComment, VideoComment, Comment, VideoMsg, RelatedRec},
      data()
        {
            return {
                isCharge:true,
                mvurl:'',
                mvId:'',
                path:'',
                key:0
            }
        },
      methods: {
        controlVolume(num) {
          this.$refs.videoPlay.volume = num
        },
        changeVideo(simiMsg) {
          this.mvurl=simiMsg.url;
          this.mvId=simiMsg.mvId;
          this.key++;
            //console.log(simiMsg)
        }
      },
        created() {
            this.mvurl=this.$route.query.url;
            this.mvId=this.$route.query.mvId;
        },
        mounted() {
            this.controlVolume(0.1);
        },
        beforeRouteEnter(to,from,next)/*获取*/
        {
          next(vm=>{
              vm.path=from.path;
              console.log(vm.path)
          })
        }
    }
</script>

<style scoped>
    .video-play
    {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      height: 495px;
      overflow:auto;
    }
    .video-play::-webkit-scrollbar
    {
      width: 2px;
    }
    .video-container{
      margin: 0 20px 0 0;
    }
    video
    {
       /* width: 600px;
        height: 338px;*/
      width:480px;
      height:320px;
      display: inline-block;
    }
    .charge
    {
        width: 328px;
        height: 328px;
        margin: 50px 0 0 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 6px rgba(0,0,0,.2);
        background-image: url("../../../assets/img/video-mv/charge.png");
        background-size:cover;
        background-position: -2px 0;
    }
</style>