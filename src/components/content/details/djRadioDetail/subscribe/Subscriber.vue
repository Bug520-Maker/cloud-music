<!--电台订阅者-->
<template>
  <div class="subscriber">
    <ul>
      <li v-for="(item,index) in subscribers" :key="item.userId">
        <msg-list class="subscriber-list" :is-show="false">
          <div slot="imgContainer">
            <img :src="item.avatarUrl" class="avatar"/>
          </div>
          <div slot="state" class="subscriber-state">{{item.nickname}}</div>
        </msg-list>
      </li>
    </ul>
  </div>
</template>

<script>
import {djsubscribe} from "@/network/radio/radio";
import MsgList from "@/components/common/msgList/MsgList";

export default {
  name: "Subscriber",
  components: {MsgList},
  data()
  {
    return {
      subscribers:[]
    }
  },
  props:{
    rid:{
      type:Number,
      default:0
    }
  },
  created() {
    djsubscribe(this.rid).then(data=>{
      //console.log(data.subscribers);
      this.subscribers=data.subscribers
    })
  }
}
</script>

<style scoped>
  .subscriber ul
  {
    display: flex;
    flex-wrap: wrap;
  }
  .subscriber ul li
  {
    width: 350px;
  }
  img.avatar
  {
    width: 85px;
    border-radius: 50%;
  }
  .subscriber-list
  {
    display: flex;
  }
  .subscriber-state
  {
    margin: 30px 0 0 20px;
  }
</style>