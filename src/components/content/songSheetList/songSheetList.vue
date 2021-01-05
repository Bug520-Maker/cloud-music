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
                    <img :src="songListMsg.creator.avatarUrl+'?param=24y24'" />
                </div>
                <div class="creator-name">
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
                    <i class="iconfont"></i>
                    收藏
                    <span>
                      ({{songListMsg.subscribedCount}})
                    </span>
                </button>
                <button>
                    <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
                    分享
                   <span>({{songListMsg.shareCount}})</span>
                </button>
                <button>
                    <i class="iconfont icon-download"></i>
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
                        <span class="description">{{songListMsg.description}}</span>
                    </li>
                </ul>
            </div>
        </details-page>
        <tab-control :list="['歌曲列表','评论','收藏者']">
            <div slot="歌曲列表">
                <song-lists :songLists="songLists"/>
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
    import DetailsPage from "../../common/detailsPage/DetailsPage";
    import TabControl from "../../common/tabController/TabControl";
    import SongLists from "../songList/SongLists";
    import {songSheetComm,songSheetCollect} from "@/network/songsheet/songSheet";
    import Comment from "@/components/content/comment/Comment";
    import Subscribers from "@/components/content/songSheetList/subscribers/Subscribers";

    export default {
        name: "songSheetList",
        components: {Subscribers, Comment, SongLists, TabControl, DetailsPage},
        data()
        {
            return {
                songListMsg:{},
                songLists:[],
              comments:[],/*用户评论*/
              subscribers:[]
            }
        },
        methods:{

            toString(arr)
            {
                return arr.join(" / ")
            },
            playNum(playCount)
            {
                if(playCount<=10000)
                {
                    return playCount
                }
                else
                {
                    return parseInt((playCount/10000))+'万';
                }
            }
        },
        created() {
            this.songListMsg=this.$route.query.songListMsg;
            console.log(this.songListMsg.tracks);
            let tmp=null;
            for(let index in this.songListMsg.tracks) {
                tmp={
                    name:'',
                    alias:[],
                    artists:[{name:''}],
                    album:{
                        name:''
                    },
                    duration:0
                };
                tmp.name=this.songListMsg.tracks[index].name;
                tmp.alias[0]=this.songListMsg.tracks[index].alia[0];
                tmp.artists[0].name=this.songListMsg.tracks[index].ar[0].name;
                tmp.album.name=this.songListMsg.tracks[index].al.name;
                tmp.duration=this.songListMsg.tracks[index].dt;
                this.songLists[index]=tmp
            }
            /*获取歌单评论*/
            songSheetComm(this.songListMsg.id).then(data=>{
              //console.log(data);
              this.comments=data.comments;
            })
          /*获取歌单收藏者*/
          songSheetCollect(this.songListMsg.id).then(data=>{
           // console.log(data.subscribers);
            this.subscribers=data.subscribers;
          })
        }
    }
</script>

<style scoped>
    @import "../../../assets/font/163.music_font/iconfont.css";
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
    /*按钮*/
    .controlBtn button
    {
        border: 1px solid #d8d8d8;
        padding:3px 15px;
        font-size: 16px;
        border-radius: 18px;
        background-color: #ffffff;
        margin: 0 10px 0 0 ;
        outline: none;
    }
    .controlBtn button:nth-child(1)
    {
        background-color: #ec4141;
        color: #ffffff;
        border-color:#ec4141 ;
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
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 150px;
        overflow:hidden;
        display: inline-block;
    }
</style>