<template>
 <div class="user-playList">
   <div class="all">总{{this.$store.state.playList.length}}首</div>
    <ul class="song-list">
      <li v-for="(item,index) in this.$store.state.playList" @click="liClick(item,index)">
        <div class="song-name text-nowrap"
             :class="{active:index===_this.$store.state.currentSongIndex}"
             @click="playSong(item)">{{item.name}}</div>
        <div class="artist text-nowrap"
             :class="{active:index===_this.$store.state.currentSongIndex}"
             @click="artistRouter(item)">{{item.ar[0].name}}</div>
        <div class="duration">{{formatDate(item.dt,"mm:ss")}}</div>
      </li>
    </ul>
 </div>
</template>

<script>
import {formatDate} from "@/utils/format/format";
export default {
  name: "PlayList",
  data()
  {
    return {
      currentIndex:0,
      _this:''
    }
  },
  created() {
    this._this=this;
  },
  methods:{
    formatDate(time,ft)
    {
      return formatDate(time,ft)
    },
    liClick(item,index)
    {
      this.currentIndex=index;
    },
    playSong(item)
    {
      this.$store.dispatch({
        type:'getSongDetail',
        id:item.id
      })
    },
    artistRouter(item)
    {
      this.$router.push({
        path:'/singerDetails',
        query:{
          artistId:item.ar[0].id
        }
      })
    }
  }
}
</script>

<style scoped>
  .user-playList{
    position: fixed;
    top: 60px;
    left: 100%;
    transform: translateX(-100%);
    height: 536px;
    width: 420px;
    z-index: 1000000;
    background-color: #fff;
    border-left: 1px solid #f5f5f5;
    box-shadow: -3px 0 3px rgba(0,0,0,.1);
  }
  .user-playList >ul li
  {
    display: flex;
  }
  .all{
    font-size:12px ;
    color: #cccccc;
    margin: 30px 0 15px 20px;
  }
  .song-list{
    border-top: 1px solid #f3f3f3;
  }
  .song-list li
  {
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    margin: 0 0 10px 0;
    cursor: pointer;
  }
  .song-list li:nth-child(even)
  {
    background-color: #fafafa;
  }
  .song-list li .song-name{
    width: 50%;
    padding: 0 0 0 5px;
  }
  .song-list li .artist{
    width: 30%;
    color: #666666;
  }
  .song-list li div.active{
    color: #ec4141;
    background-color: #e6e6e6;
  }
  .song-list li .duration{
    width: 10%;
    padding: 0 10px;
    color: #cccccc;
  }
</style>