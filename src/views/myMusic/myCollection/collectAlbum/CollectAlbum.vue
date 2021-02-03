<!--收藏的专辑-->
<template>
  <div class="collect-album">
    <h4>收藏的专辑
      <span>({{collectAlbums.length}})</span>
    </h4>
     <ul>
       <li v-for="(item,index) in collectAlbums" :key="item.id">
         <list-info is-flex="flex">
           <div slot="imgContainer" class="collect-album-img">
             <img :src="item.picUrl+'?param=60y60'" />
           </div>
           <div slot="state" class="collect-album-state">
             {{item.name}}
             <span>{{item.alias[0]}}</span>
           </div>
           <div slot="creator" class="collect-album-creator">
             {{item.artists[0].name}}
           </div>
           <div slot="time" class="collect-album-count">
             {{item.size}} 首
           </div>
         </list-info>
       </li>
     </ul>
  </div>
</template>

<script>
import {collectAlbum} from "@/network/myMusic/myCollection/myCollection";
import ListInfo from "@/components/common/ListInfo/ListInfo";

export default {
  name: "CollectAlbum",
  components: {ListInfo},
  data()
  {
    return {
      collectAlbums:[]
    }
  },
  created() {
    if(this.$store.state.loginType===1)
    {
      collectAlbum().then(res=>{
        //console.log(res.data);
        this.collectAlbums=res.data;
      })
    }
  }
}
</script>

<style scoped>
  h4{
    margin: 25px 0 10px 0;
  }
  .collect-album ul li:nth-child(odd)
  {
    background-color: #f9f9f9;
  }
  .collect-album-img img
  {
    border-radius: 5px;
    width: 60px;
  }
  .collect-album-state
  {
    font-size: 14px;
    width: 300px;
    margin: 23px 0 0 10px;
  }
  .collect-album-creator
  {
    width: 200px;
    color: #9b9b9b;
    margin: 24px 0 0 0;
  }
  .collect-album-count
  {
    font-size: 12px;
    margin: 24px 0 0 0;
    color: #9b9b9b;
  }
</style>