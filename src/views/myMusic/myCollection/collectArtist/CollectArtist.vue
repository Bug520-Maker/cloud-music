<!--收藏地歌手-->
<template>
  <div class="collect-artist">
    <h4>
      收藏的歌手
      ({{collectArtists.length}})
    </h4>
    <ul>
      <li v-for="(item,index) in collectArtists" :key="item.id">
        <list-info is-flex="flex">
          <div slot="imgContainer" class="collect-artist-img">
            <img :src="item.picUrl" />
          </div>
          <div slot="state" class="collect-artist-state">{{item.name}}</div>
          <div slot="creator" class="collect-artist-creator">专辑：{{item.albumSize}}</div>
          <div slot="time" class="collect-artist-count">MV: {{item.mvSize}}</div>
        </list-info>
      </li>
    </ul>
  </div>
</template>

<script>
import {collectArtist} from "@/network/myMusic/myCollection/myCollection";
import ListInfo from "@/components/common/ListInfo/ListInfo";

export default {
  name: "CollectArtist",
  components: {ListInfo},
  data()
  {
    return {
      collectArtists:[]
    }
  },
  created() {
    collectArtist().then(res=>{
      //console.log(res.data);
      this.collectArtists=res.data;
    })
  }
}
</script>

<style scoped>
h4{
  margin: 25px 0 10px 0;
}
.collect-artist ul li:nth-child(odd)
{
  background-color: #f9f9f9;
}
  .collect-artist-img img
  {
    width: 60px;
    border-radius: 5px;
  }
  .collect-artist-state
  {
    font-size: 14px;
    margin: 23px 0 0 0;
    width: 300px;
  }
  .collect-artist-creator
  {
    width: 260px;
    margin: 24px 0 0 0;
  }
  .collect-artist-count
  {
    font-size: 12px;
    margin: 24px 0 0 0;
    color: #9b9b9b;
  }
</style>