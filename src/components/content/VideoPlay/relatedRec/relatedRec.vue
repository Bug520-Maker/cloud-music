<!--相关推荐-->
<template>
  <div class="related-rec">
    <h4>相关推荐</h4>
    <ul>
      <li v-for="(item,index) in relateMv" :key="item.vid">
        <msg-list
            is-flex="flex"
            :duration-x-y="{x:'65%',y:'75%'}"
            play-count-l="90%">
          <div slot="imgContainer" class="img-container" @click="playVideo(item)">
            <img :src="item.coverUrl+'?param=140y80'" />
          </div>
            <div slot="state" class="state">{{item.title}}</div>
            <div slot="creator" class="creator">{{item.creator[0].userName}}</div>
          <div slot="duration">{{duration(item.durationms,"mm:ss")}}</div>
          <div slot="playCount">{{playCount(item.playTime)}}</div>
        </msg-list>
      </li>
    </ul>
  </div>
</template>

<script>
import {relatedVideo, videoUrl} from "@/network/vision/vis/visList";
import MsgList from "@/components/common/msgList/MsgList";
import {formatDate, formatPlayCount} from "@/utils/format/format";
import {mvurl} from "@/network/vision/mv/mvList";

export default {
  name: "relatedRec",
  components: {MsgList},
  data()
  {
    return {
      relateMv:[]
    }
  },
  props:{
    mvId:{
      type:String,
      default:''
    }
  },
  created() {
    relatedVideo(this.mvId).then(data=>{
      //console.log(data.data);
      this.relateMv=data.data;
    })
  },
  methods:{
    duration(item,ft)
    {
      return formatDate(item,ft)
    },
    playCount(item)
    {
      return formatPlayCount(item)
    },
    playVideo(item)
    {
      switch (item.type) {
        case 1:
          videoUrl(item.vid).then(data => {
            //console.log(data.urls[0].url);
              let simiRec={
              url:data.urls[0].url,
              mvId:item.vid,
                type:item.type
            }
            this.$emit('related-rec',simiRec)
          });break;
        case 0:
          mvurl(item.vid).then(res=> {
               let simiRec= {
              url: res.data.url,
              mvId: item.vid,
                 type:item.type
            }
            this.$emit('related-rec',simiRec)
          });break;
        default:
          console.log("err")
      }

    }
  }
}
</script>

<style scoped>

  .related-rec h4
  {
    margin: 0 0 10px 0;
  }
  .img-container
  {
    margin: 0 10px 0 0 ;
  }
  .related-rec .state
  {
    font-size: 13px;
    margin-top: 10px;
    width: 126px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .creator
  {
    font-size: 12px;
    color: #9f9f9f;
    margin: 10px 0 0 0;
  }
</style>