<template>
  <div class="user-play-list-info">
    <tab-control :list="['歌曲列表','评论','收藏者']">
      <div slot="歌曲列表">
        <song-lists :song-lists="songLists"></song-lists>
      </div>
    </tab-control>
  </div>
</template>

<script>
import TabControl from "@/components/common/tabController/TabControl";
import {songDetailes} from "@/network/playCoin/songDetal";
import SongLists from "@/components/content/songList/SongLists";
export default {
  name: "UserPlayListInfo",
  components: {SongLists, TabControl},
  data()
  {
    return {
      songLists:[],
      userSongListMsg:this.$store.state.userSongListMsg
    }
  },
  created() {
    for(let item of this.$store.state.userSongListMsg.trackIds)
    {
      let song = {
        name: '',
        alias: [{}],
        artists: [{
          name: ''
        }],
        album: {
          name: ''
        },
        duration: 0
      };
      songDetailes(item.id).then(data=>{
        console.log(data.songs[0]);
        song.name=data.songs[0].name;
        song.alias[0]=data.songs[0].alia[0];
        song.artists[0].name=data.songs[0].ar[0].name;
        song.album.name=data.songs[0].al.name;
        song.duration=data.songs[0].dt;
        song.id=data.songs[0].id;
        song.album.id=data.songs[0].al.id;
        this.songLists.push(song);
      })
    }
  },
  watch:{
    userSongListMsg:{
      handler(newMsg,oldMsg)
      {
        console.log(newMsg);
      },
      deep: true,
    }
  }
}
</script>

<style scoped>

</style>