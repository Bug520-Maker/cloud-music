<!--热门话题-->
<template>
 <div class="hot-topic">
   <ul>
     <li v-for="(item,index) in list" :key="index">
       <list-info>
         <div slot="imgContainer" class="img-container">
           <img :src="item.sharePicUrl+'?param=50y50'" />
         </div>
         <div slot="state" class="title">
           {{item.title}}
         </div>
         <div slot="creator">
           {{item.participateCount}}人参与
         </div>
       </list-info>
     </li>
   </ul>
 </div>
</template>

<script>
import ListInfo from "@/components/common/ListInfo/ListInfo";
export default {
  name: "Topic",
  components: {ListInfo},
  props:{
    list:{
      type:Array,
      default()
      {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .img-container img
  {
    width: 40px;
    border-radius: 5px;
  }
  .title
  {
    width:153px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .hot-topic ul li
  {

  }
</style>