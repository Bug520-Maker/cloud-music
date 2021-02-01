<!--首页推荐歌单-->
<template>
   <div>
       <p class="rec-title" @click="recClick">
         推荐歌单
         <i class="iconfont icon-arrow-right1"></i>
       </p>
       <div class="rec-list">
           <ul>
               <li v-for="(item,index) in recList" :key="index">
                   <msg-list play-count-l="55%"
                             :show-play="{show:true}">
                     <div slot="imgContainer">
                       <img v-lazy="item.picUrl+'?param=137y137'"
                            @click="sheetRouter(index,item)"/>
                     </div>
                     <div slot="state" class="recommend-song-list-state">
                       {{item.name}}
                     </div>
                     <div slot="playCount">
                       {{playCount(item.playCount)}}
                     </div>
                   </msg-list>
               </li>
           </ul>
       </div>
   </div>
</template>

<script>
import {recommendList} from "@/network/recommend/recommendList";
import MsgList from "@/components/common/msgList/MsgList";
import {formatPlayCount} from "@/utils/format/format";

export default {
  name: "recommendSongSheet",
  components: {MsgList},
  data() {
    return {
      recList: [],
    }
  },
  created() {
    recommendList(10).then(data => {
      this.recList = data.result;
      //console.log(data.result);
    })
  },
  methods: {
    sheetRouter(index, item) {/*路由直歌单详情页*/
      this.$router.push({
        path: '/sheetMsg',
        query: {
          playListId: this.recList[index].id
        }
      })
    },

    /*推荐歌单*/
    recClick() {
      this.$router.push('/findMusic/songSheet');
    },
    playCount(item) {
      return formatPlayCount(item);
    }
  }
}
</script>

<style scoped>
    .rec-list ul
    {
        display: flex;
        flex-wrap: wrap;
        background-color:transparent;
    }
    .rec-list ul li
    {
        flex: 1;
        margin: 0px 0 15px 0;
      position: relative;
    }
    .rec-list ul img
    {
        width: 137px;
        border-radius:5px ;
    }
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    .recommend-song-list-state
    {
      margin-top: 7px;
        width:137px ;
        color:#373737;
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>