<!--歌曲评论-->
<template>
  <div class="song-comment">
    <p>评论</p>
    <div></div>
    <h5>精彩评论</h5>
    <comment :comments="hotComments" comments-width="500px"/>
    <h4 class="newComment">最新评论</h4>
    <comment :comments="comments" comments-width="500px" />
  </div>
</template>

<script>
import {songComment, songDetailes} from "@/network/playCoin/songDetal";
import Comment from "@/components/content/comment/Comment";

export default {
  name: "SongComment",
  components: {Comment},
  data()
  {
    return {
      comments:[],
      hotComments:[]
    }
  },
  created() {
    this.$store.watch((state,getters)=>{
      return state.songId
    },()=>{
      //console.log(this.$store.state.songId);
      songComment(this.$store.state.songId).then(data=>{
        //console.log(data);
        this.comments=data.comments;
        this.hotComments=data.hotComments;
      })
    })

  }
}
</script>

<style scoped>
  .song-comment
  {
    margin: 0px 60px;
    width: 500px;
  }
  .song-comment p{
    font-size: 16px;
    font-weight: bolder;
    margin: 60px 0 30px 0;
  }
  .newComment
  {
    margin: 50px 0 0 0;
  }
</style>