<!--分类下视频内容-->
<template>
    <div class="vis-msg">
      <div class="ask-to-login" v-if="this.$store.state.loginType===0">
        <img src="../../../assets/img/video-mv/mymusic.png" />
      </div>
      <!--视频内容-->
      <ul class="video-body" v-if="this.$store.state.loginType===1">
        <li v-for="(item,index) in videoMsg" :key="item.data.threadId">
          <msg-list play-count-l="95%"
                    :duration-x-y="{x:'80%',y:'82%'}">
            <div slot="imgContainer" class="img-container" v-lazy-container="{ selector: 'img' }" @click="playVideo(item)">
              <img :data-src="item.data.coverUrl+'?param=243y137.6'"
                   :data-loading="require('@/assets/img/placeholder/placeholder02.png')"/>
            </div>
            <div slot="state" class="state text-nowrap">
              {{item.data.title}}
            </div>
            <div slot="creator" class="creator" @click="userRouter(item.data.creator)">
              {{item.data.creator.nickname}}
            </div>
            <div slot="duration">{{duration(item.data.durationms,"mm:ss")}}</div>
            <div slot="playCount">{{playCount(item.data.playTime)}}</div>
          </msg-list>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
    import MsgList from "../../../components/common/msgList/MsgList";
    import {formatDate, formatPlayCount} from "@/utils/format/format";
    import {videoUrl} from "@/network/vision/vis/visList";

    export default {
        name: "visMsg",
      components: {MsgList},
      props:{
          videoMsg:{
            type:Array,
            default()
            {
              return []
            }
          }
      },
      methods:{
          duration(item,ft)
          {
            return formatDate(item,ft);
          },
        playCount(item)
        {
          return formatPlayCount(item);
        },
        playVideo(item) {
          videoUrl(item.data.vid).then(data=>{
            //console.log(data.urls[0].url);
            this.$router.push({
              path:'/videoPlay',
              query:{
                url:data.urls[0].url,
                mvId:item.data.vid
              }
            })
          })
        },
        userRouter(item)
        {
          this.$router.push({
            path:'/userDetail',
            query:{
              userId:item.userId
            }
          })
        }
      }
    }
</script>

<style scoped>
  /*具体视频样式*/
    .video-body
    {
      display: flex;
      flex-wrap:wrap ;
      margin: 20px 0 0 0;
      justify-content: space-between;
    }
     .video-body li
     {
       margin: 0 0 15px 0;
       width: 241px;
     }
    .state
    {
      width: 241px;
      font-size: 12px;
      color: #373737;
      margin: 5px 0 5px 0;
    }
  .img-container img
  {
    width: 241px;
  }
  .creator
  {
    font-size: 12px;
    color: #cfcfcf;
    cursor: pointer;
  }
</style>