<!--用户歌单-->
<template>
  <div class="user-playlist">
    <ul>
      <li v-for="(item,index) in userPlaylists" :key="item.id">
        <msg-list :duration-x-y="{x:'5%',y:'113%'}" :show-play="{show:true,width:'50px',height:'50px'}">
          <div slot="imgContainer" class="user-playlist-img">
            <img v-lazy="item.coverImgUrl+'?param=177y177'" />
          </div>
          <div slot="state" class="user-playlist-state">
            {{item.name}}
          </div>
          <div slot="duration" class="count">{{item.trackCount}}首</div>
          <div slot="playCount" >{{item.playCount}}</div>
          <div slot="playIcon" class="user-playlist-icon">
            <i class="iconfont icon-play3"></i>
          </div>
        </msg-list>
      </li>
    </ul>
  </div>
</template>

<script>
import {userPlaylist} from "@/network/user/user";
import MsgList from "@/components/common/msgList/MsgList";

export default {
  name: "UserPlaylist",
  components: {MsgList},
  data()
  {
    return {
      userPlaylists:[]
    }
  },
  props:{
    userId:{
      type:String,
      default:''
    }
  },
  created() {
    userPlaylist(this.userId).then(data=>{
      //console.log(data.playlist);
      this.userPlaylists=data.playlist;
    })
  }
}
</script>

<style scoped>
.user-playlist {
  padding: 0 20px;
}
  .user-playlist-img img
  {
    width: 177px;
    height: 177px;
  }
  .user-playlist ul
  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .user-playlist ul li
  {
    margin: 0 0 35px 0;
  }
  /*歌单歌曲数*/
  .count
  {
    color:#9f9f9f ;
  }
  .user-playlist-state
  {
    width: 177px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .user-playlist .user-playlist-icon i
  {
    font-size: 25px;
  }
</style>