<!--歌单详情页-->
<template>
    <div class="sheetMsg"><!--显示歌单下的歌曲列表和歌单信息-->
        <details-page>
            <div slot="imgContainer">
                <img v-lazy="songListMsg.coverImgUrl+'?param=184y184'"/>
            </div>
            <span slot="title">
                {{songListMsg.name}}
            </span>
            <!--作者-->
            <div slot="creator" class="creator">
                <div class="profile">
                    <img v-lazy="songListMsg.creator.avatarUrl+'?param=24y24'" />
                </div>
                <div class="creator-name" @click="userRouter(songListMsg.creator)">
                    {{songListMsg.creator.nickname}}
                </div>
            </div>
            <!--按钮-->
            <div slot="controlBtn" class="controlBtn">
                <button>
                    <i class="iconfont icon-play1"></i>
                    <span>播放全部</span>
                    <i class="iconfont icon-jia1"></i>
                </button>
                <button>
                    <i class="iconfont icon-jiarushoucang"> </i>
                     收藏
                    <span>
                      ({{formatNum(songListMsg.subscribedCount)}})
                    </span>
                </button>
                <button>
                    <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"> </i>
                     分享
                   <span>({{formatNum(songListMsg.shareCount)}})</span>
                </button>
                <button>
                    <i class="iconfont icon-download"> </i>
                     下载全部
                </button>
            </div>
            <div slot="targetMsg" id="targetMsg">
                <ul>
                    <li>
                        <span class="tag-name">标签: </span>
                        <span>{{toString(songListMsg.tags)}}</span>
                    </li>
                    <li>
                        <span class="tag-name">歌曲: </span>{{songListMsg.trackCount}}
                        <span class="tag-name">播放: </span>{{playNum(songListMsg.playCount)}}
                    </li>
                    <li>
                        <span class="tag-name">简介: </span>
                        <span class="description text-nowrap">{{songListMsg.description}}</span>
                    </li>
                </ul>
            </div>
        </details-page>
        <tab-control :list="['歌曲列表','评论','收藏者']">
            <div slot="歌曲列表">
                <song-lists :songLists="songLists" :is-show-hot="false"/>
            </div>
          <div slot="评论">
            <comment :comments="comments" />
          </div>
          <div slot="收藏者">
            <subscribers :collector="subscribers"/>
          </div>
        </tab-control>
    </div>
</template>

<script>
import DetailsPage from "../../../common/detailsPage/DetailsPage";
import TabControl from "../../../common/tabController/TabControl";
import SongLists from "../../songList/SongLists";
import {songSheetComm, songSheetCollect} from "@/network/songsheet/songSheet";
import Comment from "@/components/content/comment/Comment";
import Subscribers from "@/components/content/details/playListDetail/subscribers/Subscribers";
import {songDetailes} from "@/network/playCoin/songDetal";
import {songListMsg} from "@/network/playlist/playlist";

export default {
  name: "PlayListDetail",
  components: {Subscribers, Comment, SongLists, TabControl, DetailsPage},
  data() {
    return {
      songListMsg: {
        creator:{},
        tags:[]
      },
      songLists: [],
      comments: [],/*用户评论*/
      subscribers: []
    }
  },
  methods: {
    toString(arr) {
      return arr.join(" / ")
    },
    playNum(playCount) {
      if (playCount <= 10000) {
        return playCount
      } else {
        return parseInt((playCount / 10000)) + '万';
      }
    },
    formatNum(count) {
      if (count >= 10000) {
        return Math.floor(count / 10000) + '万'
      } else {
        return count;
      }
    },
    songListNet() {
      //console.log(tmp);
      /*获取歌单评论*/
      songSheetComm(this.songListMsg.id).then(data => {
        //console.log(data);
        this.comments = data.comments;
      })
      /*获取歌单收藏者*/
      songSheetCollect(this.songListMsg.id).then(data => {
        // console.log(data.subscribers);
        this.subscribers = data.subscribers;
      })
    },
    setSongList(){/*生成歌曲列表*/
      //this.songListMsg=[];
      for (let item of this.songListMsg.trackIds.slice(0, 30)) {
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
        songDetailes(item.id).then(data => {
         // console.log(data.songs[0]);
          song.name = data.songs[0].name;
          song.alias[0] = data.songs[0].alia[0];
          song.artists[0].name = data.songs[0].ar[0].name;
          song.artists[0].id = data.songs[0].ar[0].id;
          song.album.name = data.songs[0].al.name;
          song.duration = data.songs[0].dt;
          song.id = data.songs[0].id;
          song.album.id = data.songs[0].al.id;
          this.songLists.push(song);
        })
      }
    },
    userRouter(item)
    {
      this.$router.push({
        path:'/userDetail',
        query:{
          userId:item.userId
        }
      })
    }
  },
  created() {
    /*监听store中的数据是否发生变化*/
    this.$store.watch((state, getters) => {
      return state.userSongListMsg;
    }, () => {
      this.songLists = [];
      this.songListMsg = this.$store.state.userSongListMsg;
      //console.log(this.songListMsg);
      this.setSongList();/*生成歌单信息*/
      this.songListNet();/*调用网络请求*/
    })
    /*获取歌单信息*/
    if(this.$route.query.playListId!==undefined)
    {
      songListMsg(this.$route.query.playListId).then(res=>{
        //console.log(res.playlist);
        this.songListMsg=res.playlist;
        this.setSongList();/*生成歌曲列表*/
        this.songListNet();/*调用网络请求*/
      })
    }
    else{
      this.songListMsg =this.$store.state.userSongListMsg;
      this.setSongList();/*生成歌曲列表*/
      this.songListNet();/*调用网络请求*/
    }
    //console.log(this.songListMsg);
  }
}
</script>

<style scoped>
    @import "../../../../assets/font/163.music_font/iconfont.css";
    .sheetMsg
    {
        height: 535px;
        overflow-y: scroll;
    }
    .sheetMsg::-webkit-scrollbar
    {
        width: 2px;
    }
    .profile img
    {
        width: 24px;
        border-radius: 50%;
    }
    /*作者名称样式*/
    .creator-name{
        font-size: 12px;
        color:#507daf;
        margin: 0 0 0 10px;
        cursor: pointer;
    }
    #targetMsg ul li
    {
        margin: 0 0 7px 0;
    }
    #targetMsg ul li:nth-child(2) .tag-name:nth-last-of-type(1)
    {
        margin: 0px 0 0 15px ;
    }
    #targetMsg ul li:nth-child(1) span:nth-last-of-type(1)
    {
        color:#507daf;
    }
    #targetMsg ul li:not(:nth-child(1))
    {
        color: #676767;
    }
    #targetMsg ul li .tag-name
    {
        color: #000000;
    }
    .description
    {
        width: 150px;
        display: inline-block;
    }
</style>