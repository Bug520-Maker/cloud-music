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
                 <div class="cover" @click="sheetRouter(index,item)"></div>
                   <msg-list play-count-l="95%"
                             :show-play="{show:true}">
                     <div slot="imgContainer">
                       <img v-lazy="item.picUrl+'?param=137y137&quality=100'"/>
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
        path: '/playListMsg',
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
.rec-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.rec-list ul li {
  margin: 0px 0 15px 0;
  position: relative;
}

.rec-list ul img {
  width: 137px;
  border-radius: 5px;
}

.cover {
  width: 140px;
  height: 140px;
  position: absolute;
  top: 0;
  background-image: url("../../../../assets/img/cover/coverall.png");
  z-index: 99;
  border-radius: 5px;
  background-position: -1px -1px;
}

.rec-title {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 20px 0;
  cursor: pointer;
}

.recommend-song-list-state {
  margin-top: 7px;
  width: 137px;
  color: #373737;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

</style>