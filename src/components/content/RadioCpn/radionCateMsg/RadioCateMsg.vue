<!--获取创作翻唱，声音恋人等分类具体内容-->
<template>
  <div class="radio-cate-msg clearfix" @scroll="loadMore" ref="radioCateMsg">
   <ul>
     <li v-for="(item,index) in djRadios" :key="item.id">
       <msg-list is-flex="flex" :is-show="false" :duration-x-y="{x:'105%',y:'70%'}">
         <div slot="imgContainer" class="dj-img">
           <img :src="item.picUrl+'?param=133y133'" />
         </div>
         <div slot="state" class="dj-state">{{item.name}}</div>
         <div slot="creator" class="dj-creator">{{item.rcmdtext}}</div>
         <div slot="duration" class="dj-program-sub">
           节目: {{item.programCount}},
           订阅: {{item.subCount}}
         </div>
       </msg-list>
     </li>
   </ul>
  </div>
</template>

<script>
import {cateTop} from "@/network/radio/radio";
import MsgList from "@/components/common/msgList/MsgList";

export default {
  name: "RadioCateMsg",
  components: {MsgList},
  data()
  {
    return {
      djRadios:[]
    }
  },
  created() {
    cateTop(this.$route.query.categoryId,30,0).then(data=>{
     // console.log(data.djRadios);
      this.djRadios=data.djRadios;
    })
  },
  methods:{
    loadMore()
    {
      let flag=this.$refs.radioCateMsg.scrollHeight-Math.ceil(this.$refs.radioCateMsg.scrollTop)===this.$refs.radioCateMsg.clientHeight;
      if(flag)
      {
        cateTop(this.$route.query.categoryId,30,34).then(data=>{
          this.djRadios=[...this.djRadios,...data.djRadios];
        })
      }
     // console.log(this.djRadios.length)
    }
  }
}
</script>

<style scoped>
  .radio-cate-msg
  {
    height: 535px;
    overflow-y: auto;
  }
  .radio-cate-msg::-webkit-scrollbar
  {
    width: 2px;
  }
  .dj-img img
  {
    width:133px;
    height: 133px;
  }
  .radio-cate-msg ul
  {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap ;
    margin: 30px 0 0 30px;
  }
  .radio-cate-msg ul li
  {
    width: 350px;
    margin: 0 0 15px 0;
  }
  .dj-state
  {
    margin: 30px 0 15px 5px;
  }
  .dj-creator
  {
    color: #9f9f9f;
    font-size: 13px;
    margin: 0 0 15px 5px;
  }
  .dj-program-sub
  {
    color: #9f9f9f;
    width: 180px;
  }
</style>