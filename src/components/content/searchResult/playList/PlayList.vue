<template>
  <div class="gedan">
     <ul>
       <li v-for="(item,index) in playList" :key="item.id" @click="playListClick(item)">
         <search-result-cpn>
           <div slot="imgContainer">
             <img :src="item.coverImgUrl+'?param=60y60'" />
           </div>
           <div slot="stateName" class="playlist-state-name text-nowrap">
             {{item.name}}
           </div>
           <div slot="count" class="playlist-count">{{item.trackCount}}首</div>
           <div slot="creator" class="playlist-creator">
             <span>by </span>
             {{item.creator.nickname}}
           </div>
         </search-result-cpn>
       </li>
     </ul>
  </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    import MsgList from "@/components/common/msgList/MsgList";
    import {songListMsg} from "@/network/playlist/playlist";
    export default {
        name: "PlayList",
        components: {MsgList, SearchResultCpn},
        data()
        {
          return {
              playList:[]
          }
        },
        created()
        {
            //console.log(this.$store.state.searchList.playlists);
            this.playList=this.$store.state.searchList.playlists;
        },
      methods:{
        playListClick(item)
        {
          songListMsg(item.id).then(res=>{
            this.$router.push({
              path:'/sheetMsg',
              query:{
                songListMsg:res.playlist
              }
            });
          })
        }
      }
    }
</script>

<style scoped>
.gedan ul li:nth-child(even) {
  background-color: #f9f9f9;
}

.gedan ul li:hover {
  background-color: #f0f1f2;
}

.playlist-state-name {
  width: 275px;
}

.playlist-count {
  color: #9f9f9f;
  width: 50px;
  overflow: hidden;
  margin: 0 50px;
}

.playlist-creator {
  color: #676767;
}

.playlist-creator span {
  color: #cacaca;
  margin: 0 10px 0 0;
}
</style>