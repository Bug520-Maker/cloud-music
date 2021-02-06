<template>
  <div class="artists">
    <ul>
      <li v-for="(item,index) in list" :key="item.id" @click="singerRouter(item)">
        <div class="seniority">{{index+4}}</div>
        <list-info is-flex="flex">
          <div slot="imgContainer" class="artists-img-container">
            <img :src="resetImgSize(item.picUrl,60,60)" />
          </div>
          <div slot="state" class="artists-state">{{item.name}}</div>
          <div slot="time"  class="artists-hot">热度: {{item.score}}</div>
        </list-info>
      </li>
    </ul>
  </div>
</template>

<script>
import ListInfo from "@/components/common/ListInfo/ListInfo";
import {resetImgSize} from "@/utils/format/format";
export default {
  name: "ChildCpn",
  components: {ListInfo},
  data(){
    return {
      artistLists:[]
    }
  },
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
    resetImgSize(imgUrl,width,height)
    {
      return resetImgSize(imgUrl,width,height);
    },
    singerRouter(item)
    {
      this.$router.push({
          path:'/singerDetails',
          query:{
            artistId:item.id
          }
      })
    }
  },

}
</script>

<style scoped>
  .artists-img-container{
    margin: 5px 0 0 30px;
  }
  .seniority{
    margin: 0px 0 0 30px;
    font-size: 20px;
    color: #9f9f9f;
  }
  .artists-img-container img
  {
    width: 60px;
    border-radius: 5px;
  }
  .artists-state{
    font-size: 14px;
    margin: 24px;
    width: 450px;
  }
  .artists-hot{
    font-size: 12px;
    color: #9b9b9b;
    margin: 24px 0 0px;
  }
  .artists ul li{
    display: flex;
    align-items: center;
  }

  .artists ul li:nth-child(odd)
  {
    background-color: #f9f9f9;
  }
  .artists ul li:hover{
    background-color: #f0f1f2;
  }
</style>