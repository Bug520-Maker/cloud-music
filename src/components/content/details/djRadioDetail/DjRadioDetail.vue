<template>
 <div class="dj-radio-detail">
  <details-page>
    <div slot="imgContainer">
      <img v-lazy="radioMsg.picUrl+'?param=184y184'" class="dj-img"/>
    </div>
    <div slot="title">
      {{radioMsg.name}}
    </div>
    <div slot="creator" class="anchor-name">
      <div class="avatar">
        <img :src="radioMsg.dj.avatarUrl+'?param=30y30'" />
      </div>
      <div class="profile">{{radioMsg.dj.nickname}}</div>
    </div>
    <div slot="controlBtn">
      <button>
        <i class="iconfont icon-play1"></i>
        播放全部
        <i class="iconfont icon-jia1"></i>
      </button>
      <button>
        <i class="iconfont icon-wujiaoxingxingxing"></i>
        订阅
        ({{radioMsg.subCount}})
      </button>
      <button>
        <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"> </i>
        分享
        ({{radioMsg.shareCount}})
      </button>
    </div>
    <div slot="targetMsg" class="cate-desc">
      <div>
        <span class="innovate">{{radioMsg.category}}</span>
        <span class="desc">{{radioMsg.desc}}</span>
      </div>
    </div>
  </details-page>
   <tab-control :list="['节目('+radioMsg.programCount+')','订阅者('+radioMsg.subCount+')']">
     <div :slot="'节目('+radioMsg.programCount+')'">
       <programmer :rid="radioMsg.id" v-if="radioMsg.id!==undefined"/>
     </div>
     <div :slot="'订阅者('+radioMsg.subCount+')'">
       <subscriber :rid="radioMsg.id" v-if="radioMsg.id!==undefined" />
     </div>
   </tab-control>
 </div>
</template>

<script>
import {RadioMsg} from "@/network/radio/radio";
import DetailsPage from "@/components/common/detailsPage/DetailsPage";
import TabControl from "@/components/common/tabController/TabControl";
import Programmer from "@/components/content/details/djRadioDetail/program/Programmer";
import Subscriber from "@/components/content/details/djRadioDetail/subscribe/Subscriber";

export default {
  name: "DjRadioDetail",
  components: {Subscriber, Programmer, TabControl, DetailsPage},
  data()
  {
    return {
      radioMsg:{
        dj:{}
      }
    }
  },
  created(){
    //console.log(this.$route.query.anchorId);
    RadioMsg(this.$route.query.anchorId).then(res=>{
      //console.log(res);
      this.radioMsg=res.data;
    })
  }
}
</script>

<style scoped>
  .dj-radio-detail
  {
    height: 535px;
    overflow-y: auto;
  }
  .dj-radio-detail::-webkit-scrollbar
  {
    width: 2px;
  }
  .dj-img
  {
    border: 1px solid rgba(153,153,153,.4);
  }
  .avatar img
  {
    width:30px;
    height:30px;
    border-radius: 50%;
    border: 1px solid rgba(153,153,153,.4);
  }
  .profile
  {
    font-size: 12px;
    color: #507daf;
    margin: 8px;
  }
  .innovate
  {
    border:1px solid #f28c8c;
    padding: 2px;
    font-size: 12px;
    color:#ec4141;
    margin: 0 8px 0 0;
  }
  .cate-desc
  {
    margin: 20px 0 0 0;
  }
</style>