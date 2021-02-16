<!--显示用户云盘歌曲-->
<template>
  <div class="user-cloud">
    <ul>
      <li v-for="(item,index) in songs" :key="item.songId" @click="liClick(index)" :class="{active:currentIndex===index}">
        <div class="index" v-show="currentIndex!==index">{{'0'+(index+1)}}</div>
        <div class="speaker" v-show="currentIndex===index">
          <i class="iconfont icon-Speaker-1"></i>
        </div>
        <div class="songName text-nowrap" @click="playSong(item)">{{item.songName}}</div>
        <div class="artist text-nowrap" @click="artistRouter(item)">{{item.artist}}</div>
        <div class="album text-nowrap" @click="albumRouter(item)">{{item.album}}</div>
        <div class="format text-nowrap">{{format(item.fileName)}}</div>
        <div class="size">{{fileSize(item.fileSize)}}MB</div>
        <div class="addtime">{{publishTime(item.addTime,"MM-dd")}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {formatDate} from "@/utils/format/format";
import {cloudDetail} from "@/network/pan";

export default {
name: "UserCloud",
  data()
  {
    return {
      currentIndex:-1
    }
  },
  props:{
    songs:{
      type:Array,
      default()
      {
        return []
      }
    }
  },
  methods:{
    liClick(index)
    {
      this.currentIndex=index;
    },
    format(fileName)
    {
      const file=fileName.split('.');
      const exe=file[1];
      return exe.toUpperCase();
    },
    publishTime(time,ft)
    {
      return formatDate(time,ft)
    },
    fileSize(file)
    {
      const mb=file/1000/1024;
      return mb.toString().slice(0,3);
    },
    artistRouter(item)
    {
      this.$router.push({
        path:'/singerDetails',
        query:{
          artistId:item.simpleSong.ar[0].id
        }
      })
    },
    albumRouter(item)
    {
      this.$router.push({
        path:"/albumMsg",
        query:{
          albumId:item.simpleSong.al.id
        }
      })
    },
    playSong(item)
    {
      this.$store.dispatch({
        type:'getSongDetail',
        id:item.songId
      })
    }
  }
}
</script>

<style scoped>
  .user-cloud ul li{
    display: flex;
    height:36px;
    margin: 0 0 0 30px;
    line-height: 36px;
  }
  .user-cloud ul li:nth-child(odd)
  {
    background-color: #f9f9f9;
  }
  .user-cloud ul li:hover{
    background-color: #f0f1f2;
  }
  .user-cloud ul li.active{
    background-color: #e5e5e5;
  }
  /*歌曲名称*/
  .songName{
    font-size: 13px;
    color:#363636;
    margin: 0 0 0 15px;
    width: 280px;
    cursor: pointer;
  }
  .index ,.artist,.album,.format,.size,.addtime{
    color: #656565;
    font-size: 13px;
  }
  .index{
    margin: 0 15px 0 30px;
  }
  .artist{
    width: 65px;
    margin: 0 7px 0 0px;
    cursor: pointer;
  }
  .album{
    width: 70px;
    cursor: pointer;
    margin: 0 6px 0 0px;
  }
  .format{
    width:76px;
  }
  .size{
    width: 76px;
  }
  .speaker{
    margin: 0 15px 0 30px;
  }
  .speaker i{
    color: #ec4141;
    font-size: 18px;
  }
</style>