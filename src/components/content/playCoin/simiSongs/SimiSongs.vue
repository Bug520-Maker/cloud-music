<!--相似歌曲-->
<template>
  <div class="simi-song">
    <h5>相似歌曲</h5>
    <ul>
      <li v-for="(item,index) in simiSongs" :key="item.id">
        <list-info>
          <div slot="imgContainer">
            <img :src="item.album.picUrl+'?param=50y50'">
          </div>
          <div slot="state" class="state">{{item.name}}</div>
          <div slot="creator" class="creator">{{item.artists[0].name}}</div>
        </list-info>
      </li>
    </ul>
  </div>
</template>

<script>
import {simiSongs} from "@/network/playCoin/songDetal";
import ListInfo from "@/components/common/ListInfo/ListInfo";

export default {
  name: "SimiSongs",
  components: {ListInfo},
  data()
  {
    return {
      simiSongs:[]
    }
  },
  created() {
    this.$store.watch((state,getters)=>{
      return state.songId
    },()=>{
      simiSongs(this.$store.state.songId).then(data=>{
        //console.log(data);
        this.simiSongs=data.songs;
      })
    })
  }
}
</script>

<style scoped>
  .simi-song
  {
    position: absolute;
    left: 700px;
    top: 800px;
  }
  .img-container img
  {
    border: 1px solid rgba(153,153,153,.4);
    border-radius: 5px;
  }
  .simi-song .state
  {
    margin: 7px 0 0 0;
  }
  .creator
  {
    margin: 8px 0 0 0;
  }

</style>