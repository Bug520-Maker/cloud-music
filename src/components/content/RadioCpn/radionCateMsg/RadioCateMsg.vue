<!--获取创作翻唱，声音恋人等分类具体内容-->
<template>
  <div class="radio-cate-msg clearfix" @scroll="loadMore" ref="radioCateMsg">
    <h3>{{this.$route.query.titleText}}</h3>
   <ul>
     <li v-for="(item,index) in djRadios" :key="item.id">
       <msg-list is-flex="flex" :is-show="false" :duration-x-y="{x:'105%',y:'70%'}">
         <div slot="imgContainer" class="dj-img" @click="djRouter(item)">
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
import {isScrollBottom} from "@/utils/scroll-to-bottom";

export default {
  name: "RadioCateMsg",
  components: {MsgList},
  data()
  {
    return {
      djRadios:[],
      more:true,
      isScroll:true,
    }
  },
  created() {
    cateTop(this.$route.query.categoryId,30,0).then(data=>{
      this.more=data.hasMore;
      this.djRadios=data.djRadios;
    })
  },
  methods:{
    loadMore()
    {
      let flag=isScrollBottom(this.$refs.radioCateMsg.scrollTop,this.$refs.radioCateMsg.scrollHeight,this.$refs.radioCateMsg.offsetHeight)
      if(flag&&this.more)
      {
        if(this.isScroll)
        {
          this.isScroll=false
          cateTop(this.$route.query.categoryId,30,this.djRadios.length).then(data=>{
            this.more=data.hasMore;
            this.djRadios=[...this.djRadios,...data.djRadios];
            this.isScroll=true;
          })
        }
      }
     // console.log(this.djRadios.length)
    },
    djRouter(item){
      console.log(item)
      this.$router.push({
        path:"/djradioMsg",
        query:{
          anchorId:item.id
        }
      })
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
    width: 5px;
  }
  .radio-cate-msg::-webkit-scrollbar-thumb{
    background-color:#e1e1e1;
    height: 50px;
    border-radius: 10px;
  }
  .radio-cate-msg h3{
    margin: 30px 0 0 30px;
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
    margin: 20px 0 0 30px;
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