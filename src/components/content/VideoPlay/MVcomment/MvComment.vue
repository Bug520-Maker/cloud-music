<!--mv评论-->
<template>
  <div class="mv-comment">
    <h5>精彩评论</h5>
    <comment :comments="hotComments" comments-width="500px"/>
    <h4 class="newComment">最新评论</h4>
    <comment :comments="comments" comments-width="500px"/>
  </div>
</template>

<script>
import {mvComment} from "@/network/vision/mv/mvList";
import Comment from '@/components/content/comment/Comment'
export default {
  name: "MvComment",
  components:{
    Comment
  },
  data()
  {
    return {
         hotComments:[],
         comments:[]
    }
  },
  props:{
    mvId:{
      type:String,
      default:''
    }
  },
  created() {
    mvComment(this.mvId).then(data=>{
     // console.log(data);
      this.hotComments=data.hotComments;
      this.comments=data.comments;
    })
  }
}
</script>

<style scoped>
.mv-comment {
  position: relative;
}

h5 {
  margin: 20px 0 10px 0;
}

h4 {
  margin: 30px 0 10px 0;
}
</style>