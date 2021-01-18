<template>
    <div class="singer-details">
        <details-page>
            <!--歌手封面-->
            <div slot="imgContainer">
                <img v-lazy="singerBaseMsg.artist.cover+'?param=184y184'" />
            </div>
            <!--歌手姓名-->
            <div slot="title">
                {{singerBaseMsg.artist.name}}
            </div>
            <div slot="creator" class="creator">
                {{singerBaseMsg.artist.transNames[0]}}
            </div>
            <!--按钮-->
            <button slot="controlBtn" class="controlBtn">
                <i class="iconfont icon-jiarushoucang"></i>
                 收藏
            </button>
            <button slot="controlBtn" class="controlBtn">个人主页</button>
            <ul slot="targetMsg" class="targetMsg">
                <li>
                    <span>单曲数:</span>{{singerBaseMsg.artist.musicSize}}
                </li>
                <li>
                    <span>专辑数:</span>{{singerBaseMsg.artist.albumSize}}
                </li>
                <li>
                    <span>MV数:</span>{{singerBaseMsg.artist.mvSize}}
                </li>
            </ul>
        </details-page>
        <!--歌手相关专辑，MV，歌手详情，相似歌手-->
        <tab-control :list="['专辑','MV','歌手详情','相似歌手']" ref="tabControl">
            <!--专辑组件-->
            <div slot="专辑">
                <AlbumCpn album-name="热门50首" :songs="top520Msg">
                    <div slot="album-img">
                        <img src="../../../assets/img/singerSongs/top50.png" />
                    </div>
                </AlbumCpn>
                <AlbumCpn v-for="(item,index) in hotAlbum" :key="index" :album-name="item.name" :songs="albumContent[index]">
                    <div slot="album-img">
                        <img :src="item.picUrl+'?param=148y148'"/>
                    </div>
                </AlbumCpn>
            </div>
            <!--MV组件-->
           <div slot="MV">
               <mvs :list="mvs"/>
           </div>
            <!--歌手详情-->
            <div slot="歌手详情">
                <singer-description :list="singerDescription" />
            </div>
            <!--相似歌手-->
            <div slot="相似歌手">
                <similar-singer :list="similarSinger" @singer-click="simiMsg"/>
            </div>
        </tab-control>
    </div>
</template>

<script>
    import {albumContent, mvofsinger, singeralbum, singerDesc, singerMsg, top50,simiArtist} from "../../../network/singer/singer";
    import SongLists from "../songList/SongLists";
    import {mvurl} from "../../../network/vision/mv/mvList";
    import DetailsPage from "../../common/detailsPage/DetailsPage";
    import TabControl from "../../common/tabController/TabControl";
    import AlbumCpn from "./album/AlbumCpn";
    import MsgList from "../../common/msgList/MsgList";
    import Mvs from "./mvs/Mvs";
    import SingerDescription from "./desc/SingerDescription";
    import SimilarSinger from "@/components/content/singerDetail/similarSinger/SimilarSinger";

    export default {
        name: "SingerDetai",
        components: {SimilarSinger, SingerDescription, Mvs, MsgList, AlbumCpn, TabControl, DetailsPage, SongLists},
        data()
        {
            return {
                singerBaseMsg:{},/*当前歌手信息*/
                top520Msg:[],    /*歌手热门50首歌曲*/
                hotAlbum:[],/*歌手专辑*/
                albumContent:[],/*专辑内容*/
                mvs:[]/*歌手MV*/,
                singerDescription:[],/*歌手描述*/
                similarSinger:[],/*相似歌手*/
            }
        },
        created() {
            this.singerBaseMsg=this.$route.query.singerBaseMsg;
          /*console.log(this.singerBaseMsg);*/
          this.networkOperate();
        },
        methods: {
          simiMsg(item)
          {
            this.singerBaseMsg=item;
            this.networkOperate();
            this.$refs.tabControl.liClick(0);
          }
            /* liCLick(index)
            {
                this.currentIndex=index;
                if(index==1)
                {
                    mvofsinger(this.singerBaseMsg.singerId).then(data=>{
                        console.log(data.mvs);
                        this.singerMvs=data.mvs;
                    })
                }
                if(index==2)
                {/!*获取歌手描述*!/
                    singerDesc(this.singerBaseMsg.singerId).then(data=>{
                        this.singerDesc=data.briefDesc;
                    })
                }

            },
            pClick()
            {
                this.$refs.checkmore.style.display="none";
                this.$refs.checkmore.previousSibling.children[1].style.overflow="visible";
            },
            mvplay(index)
            {
                mvurl(this.singerMvs[index].id).then(res=>{
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url
                        }
                    })
                })
            }
        },*/,
          networkOperate()
          {
            /*获取歌手热门50首歌曲*/
            top50(this.singerBaseMsg.artist.id).then(data=>{
              //console.log(data.songs);
              this.top520Msg=data.songs;
            })
            /*获取歌手专辑*/
            singeralbum(this.singerBaseMsg.artist.id).then(data=>{
              // console.log(data.hotAlbums);
              this.hotAlbum=data.hotAlbums;

              /*获取专辑内容*/
              for(let index in this.hotAlbum)
              {
                albumContent(this.hotAlbum[index].id).then(data=>{
                  // console.log(data.songs);
                  this.albumContent.push(data.songs);
                })
              }
            })
            /*获取歌手MV*/
            mvofsinger(this.singerBaseMsg.artist.id).then(data=>{
              //console.log(data.mvs);
              this.mvs=data.mvs;
            })
            /*歌手描述*/
            singerDesc(this.singerBaseMsg.artist.id).then(data=>{
              // console.log(data.introduction);
              this.singerDescription=data.introduction;
            })
            /*获取相似歌手*/
            simiArtist(this.singerBaseMsg.artist.id).then(data=>{
              //console.log(data.artists);
              this.similarSinger=data.artists;
            })
          }
        }

    }
</script>

<style scoped>
    .singer-details
    {
        height: 532px;
        width: 795px;
        overflow-y: scroll;
    }
    .singer-details::-webkit-scrollbar
    {
        width: 2px;
    }
    .creator
    {
        font-size: 13px;
    }
    .controlBtn
    {
        font-size: 14px;
        padding: 3px 15px;
        border: 1px solid #e0e0e0;
        border-radius:18px ;
        margin: 0 20px 0 0;
        background-color: #ffffff;
        outline: none;
    }
    .targetMsg
    {
        display: flex;
    }
    .targetMsg li
    {
        margin: 0 15px 0 0;
    }
</style>