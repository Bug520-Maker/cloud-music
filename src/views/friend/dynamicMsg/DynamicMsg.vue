<!--动态详情-->
<template>
  <div class="dy-msg">
    <h3 >话题飙升榜</h3>
    <ul>
      <li v-for="(item,index) in top" :key="item.actId" @click="topicRouter(item)">
        <div>{{index+1}}</div>
        <list-info>
          <div slot="imgContainer" class="topicImg" >
            <img :src="item.sharePicUrl+'?param=76y76'" />
          </div>
          <div slot="state" class="dynamic-state">
            #{{item.title}}#
          </div>
          <div slot="creator">{{item.participateCount}}人参与 </div>
        </list-info>
      </li>
    </ul>
  </div>
</template>

<script>
import {hotTopic} from "@/network/friends/hotTopic";
import ListInfo from "@/components/common/ListInfo/ListInfo";

export default {
  name: "DynamicMsg",
  components: {ListInfo},
  data() {
    return {
      top: []
    }
  },
  created() {
    if (this.$store.state.loginType === 1) {
      hotTopic().then(data => {
        console.log(data.hot);
        this.top = data.hot;
      })
    }
  },
  methods: {
    topicRouter(item) {
      this.$router.push({
        path: '/friend/topicMsg',
        query: {
          actId: item.actId
        }
      })
      this.$emit('topic-msg')
    }
  }
}
</script>

<style scoped>
  h3{
    margin: 30px 0 20px 30px;
  }
  .dy-msg ul li:nth-child(even)
  {
    background-color: #f9f9f9;
  }
  .dy-msg ul li
  {
    display: flex;
    padding: 8px 0;
  }
  .dy-msg ul li > div:nth-child(1)
  {
    height: 60px;
    line-height: 60px;
    padding: 0px 30px;
  }
  .dy-msg ul li:hover
  {
    background-color: #f4f4f4;
  }
  .topicImg img
  {
    width: 60px;
    border-radius: 5px;
  }
  .dynamic-state
  {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
</style>