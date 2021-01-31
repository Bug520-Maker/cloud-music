<template>
 <div class="alnum-detail">
  <details-page>
    <div slot="imgContainer">
      <img :src="albumMsg.album.picUrl+'?param=184y184'" />
    </div>
    <div slot="title">
      {{albumMsg.album.name}}
    </div>
    <div slot="controlBtn">
      <button>
        <i class="iconfont icon-play1"></i>
        播放全部
        <i class="iconfont icon-jia1"></i>
      </button>
      <button>
        <i class="iconfont icon-jiarushoucang"> </i>
        收藏
      </button>
      <button>
        <i class="iconfont icon-download"> </i>
        VIP下载
      </button>
      <button>
        <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
          分享
      </button>
    </div>
    <div slot="targetMsg" class="target-msg">
      <div class="singer">
        <span>歌手</span>{{albumMsg.album.artist.name}}
      </div>
      <div class="time">
        <span>时间</span>{{albumMsg.album.publishTime}}
      </div>
    </div>
  </details-page>
   <tab-control :list="['歌曲列表','评论','收藏者']">
      <div slot="歌曲列表">
        <song-lists :song-lists="songList" />
      </div>
   </tab-control>
 </div>
</template>

<script>
import DetailsPage from "@/components/common/detailsPage/DetailsPage";
import TabControl from "@/components/common/tabController/TabControl";
import SongLists from "@/components/content/songList/SongLists";
export default {
name: "AlbumDetail",
  data()
  {
    return {
      albumMsg:{},
      songList:[]
    }
  },
  methods:{
   setSongList() {
     let song=null;
     for (let item of this.albumMsg.songs) {
       song={
         name:'',
         alias:[{}],
         artists:[{name:'',id:''}],
         album:{
           name:'',
           id:''
         },
         duration:0,
         id:''
       };
       song.name = item.name;
       song.alias[0] =item.alia[0];
       song.artists[0].name = item.ar[0].name;
       song.artists[0].id = item.ar[0].id;
       song.album.name = item.al.name;
       song.album.id = item.al.id;
       song.id = item.id;
       song.duration = item.dt;
       this.songList.push(song);
     }
   }
  },
  components: {SongLists, TabControl, DetailsPage},
  created() {
    this.albumMsg=this.$route.query.albumMsg;
    //console.log(this.albumMsg)
    this.setSongList();
  }
}
</script>

<style scoped>
  .target-msg span
  {
    color: #373737;
    margin: 0 10px 0 0px;
  }
  .target-msg .singer{
    color: #5091ca;
    cursor: pointer;
    margin: 10px 0 10px 0;
  }
  .target-msg .time{
    color: #676767;
  }
</style>