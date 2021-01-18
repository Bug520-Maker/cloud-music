<template>
    <div class="similar-singer">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <msg-list :is-show="false">
              <div slot="imgContainer" @click="singerClick(item)">
                <img v-lazy="item.picUrl+'?param=137y137'">
              </div>
              <div slot="state"><!--item.id可以获取相似歌手id-->
                {{item.name}}
              </div>
            </msg-list>
          </li>
        </ul>
    </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import {singerMsg} from "@/network/singer/singer";
export default {
     name: "SimilarSinger",
  components: {MsgList},
  props:{
       list:{
         type:Array,
         default()
         {
           return []
         }
       }
     },
  methods:{
       singerClick(item) {
         singerMsg(item.id).then(res=>{
           this.$emit('singer-click',res.data);
         })
       }
  }
}
</script>

<style scoped>
    img
    {
      width: 137px;
      border: 1px solid rgba(153,153,153,.4);
    }
    .similar-singer ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .similar-singer ul li
    {
      margin: 0 0 15px 0;
    }
</style>