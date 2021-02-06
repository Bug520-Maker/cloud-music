<template>
    <div class="created-play-list">
      <favorite-music/>
      <my-list-cpn :list="userPlayList"
                   :path="['/playListMsg']"
                   :songListId="songListId">
        <div slot="left-0">
          <i class="iconfont icon-love"></i>
        </div>
        <div slot="right-0" class="rightIcon">
          <i class="iconfont icon-xinaixin"></i>
        </div>
        <div v-for="(item,index) in userPlayList.slice(1,userPlayList.length)"  :slot="'left-'+(index+1)" >
          <i class="iconfont icon-yinle-liebiao"></i>
        </div>
      </my-list-cpn>
    </div>
</template>

<script>
import FavoriteMusic from "@/views/createdPlayList/FavoriteMusic";
import {userFavorite} from "@/network/myMusic/myFavoriteMusic/favoriteMusic";
import MyListCpn from "@/components/common/myListCpn/MyListCpn";
export default {
  name: "CreatedPlayList",
  data()
  {
    return {
       userPlayList:[],
       //songListInfo:{}
       songListId:0
    }
  },
  components: {MyListCpn, FavoriteMusic},
  created() {
    userFavorite(3937315155).then(data=>{
      //console.log(data.playlist);
      this.userPlayList=data.playlist;
    })
  },
  methods:{
    /*songListClick(index)
    {
      this.songListId=this.userPlayList[index].id;
      this.$store.dispatch({
        type:'userSongList',
        songListId:this.songListId
      })
    }*/
  }
}
</script>

<style scoped>
.rightIcon
{
  border: 1px solid rgb(203, 203, 203);
  padding: 0px 10px;
  height: 25px;
  margin: 5px 0 0 10px;
  line-height: 25px;
  border-radius: 18px;
}
</style>