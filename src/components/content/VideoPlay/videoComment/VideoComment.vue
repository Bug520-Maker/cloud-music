<!--视频品论-->
<template>
  <div class="video-comment">
    <h5>精彩评论</h5>
    <comment :comments="hotComments" comments-width="500px"/>
    <h4 class="newComment">最新评论</h4>
    <comment :comments="comments" comments-width="500px"/>
  </div>
</template>

<script>
import {videoComm} from "@/network/vision/vis/visList";
import Comment from "@/components/content/comment/Comment";

export default {
  name: "VideoComment",
  components: {Comment},
  data()
  {
    return {
      hotComments:[],
      comments:[]
    }
  },
  props:{
    vId:{
      type:String,
      default:''
    }
  },
  created() {
   // console.log(this.vId)
    videoComm(this.vId).then(data=>{
      //console.log(data);
      this.hotComments=data.hotComments;
      this.comments=data.comments;
    })
  }
}
</script>

<style scoped>
  .video-comment
  {
    position: relative;
  }
  h5{
    margin: 20px 0 10px 0;
  }
  h4{
    margin: 30px 0 10px 0;
  }
</style>