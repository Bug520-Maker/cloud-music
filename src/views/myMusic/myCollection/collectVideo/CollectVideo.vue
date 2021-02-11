<!--收藏的视频-->
<template>
  <div class="collect-video">
    <h4>收藏的视频
        ({{collectVideos.length}})
    </h4>
    <ul>
      <li v-for="(item,index) in collectVideos" :key="item.id">
        <msg-list :duration-x-y="{x:'80%',y:'80%'}"
                   play-count-l="70%">
          <div slot="imgContainer" class="collect-video-img">
            <img v-lazy="item.coverUrl+'?param=236y133'" />
          </div>
          <div slot="state" class="collect-video-state text-nowrap">
            {{item.title}}
          </div>
          <div slot="creator" class="collect-video-creator">
            {{item.creator[0].userName}}
          </div>
          <div slot="duration">{{duration(item.durationms,"mm:ss")}}</div>
          <div slot="playCount">{{playCount(item.playTime)}}</div>
        </msg-list>
      </li>
      <li style="width: 234px"></li>
    </ul>
  </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import {collectVideo} from "@/network/myMusic/myCollection/myCollection";
import {formatDate, formatPlayCount} from "@/utils/format/format";
export default {
  name: "CollectVideo",
  components: {MsgList},
  data()
  {
    return {
      collectVideos:[]
    }
  },
  created() {
    collectVideo().then(res=>{
      //console.log(res.data)
      this.collectVideos=res.data;
    })
  },
  methods:{
    duration(item,ft)
    {
      return formatDate(item,ft)
    },
    playCount(item)
    {
      return formatPlayCount(item);
    }
  }
}
</script>

<style scoped>
h4{
  margin: 25px 0 10px 0;
}
  .collect-video ul
  {
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-between;
  }
  .collect-video ul li
  {
    margin:0 0 20px 0
  }
  .collect-video-img img
  {
    width: 234px;
    height: 133px;
  }
  .collect-video-state
  {
    width: 234px;
  }
  .collect-video-creator
  {
    font-size: 13px;
    color: #cfcfcf;
    margin: 5px 0 0 0;
  }
</style>