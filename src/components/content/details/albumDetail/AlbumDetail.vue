<template>
 <div class="album-detail">
  <details-page>
    <div slot="imgContainer">
      <img v-lazy="albumMsg.album.picUrl+'?param=184y184'" />
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
      <div class="singer" @click="artistRouter(albumMsg.album.artist.id)">
        <span>歌手</span>{{albumMsg.album.artist.name}}
      </div>
      <div class="time">
        <span>时间</span>{{albumMsg.album.publishTime}}
      </div>
    </div>
  </details-page>
   <tab-control :list="['歌曲列表','评论','专辑详情']">
      <div slot="歌曲列表">
        <song-lists :song-lists="songList" />
      </div>
     <div slot="评论">
       <comment :comments="AlbumComments"/>
     </div>
     <div slot="专辑详情" class="album-desc">
       {{desc}}
     </div>
   </tab-control>
 </div>
</template>

<script>
import {albumComment, albumDetail} from "@/network/newMusic/newMusic";
import {albumContent} from "@/network/singer/singer";

import DetailsPage from "@/components/common/detailsPage/DetailsPage";
import TabControl from "@/components/common/tabController/TabControl";
import SongLists from "@/components/content/songList/SongLists";
import Comment from "@/components/content/comment/Comment";

export default {
name: "AlbumDetail",
  data()
  {
    return {
      albumMsg:{
        album:{
          artist:''
        }},
      songList:[],
      AlbumComments:[],
      desc:''
    }
  },
  components: {
    Comment,
    SongLists,
    TabControl,
    DetailsPage
  },
  created() {
    this.albumId=this.$route.query.albumId;
    albumContent(this.albumId).then(data=>{
      this.desc=data.album.description
     this.albumMsg=data;
      this.setSongList();
   })
    albumComment(this.albumId).then(data=>{
      this.AlbumComments=data.comments
    })
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
   },
    //路由至歌手详情页
    artistRouter(id)
    {
      this.$router.push({
        path:'/singerDetails',
        query:{
          artistId:id
        }
      })
    }
  }
}
</script>

<style scoped>
  .album-detail{
    height: 535px;
    overflow-y: auto;
  }
  .album-detail::-webkit-scrollbar{
    width: 2px;
  }
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
  .album-desc{
    color: #676767;
    font-size: 14px;
    line-height: 28px;
    text-indent: 2em;
    padding: 20px 30px 0 0;
  }
</style>