<template>
    <div class="container">
        <div class="recommend">
            <div id="swiper-outer"><!--设置轮播图-->
                <swiper ref="mySwiper" :options="swiperOptions" v-if="75>1">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in imgList" :key="index"><img :src="item.imageUrl" class="swiper-img" /></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <p class="rec-title" @click="recClick">推荐歌单 ></p>
            <div class="rec-list">
                <ul>
                    <li v-for="(item,index) in recList" :key="index">
                        <img :src="item.picUrl" alt="" @click="sheetRouter(index,item)">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <p class="rec-title" @click="excClick()">独家放送 ></p>
            <div class="broadcast">
                <ul>
                    <li v-for="(item,index) in broadcastList" :key="index">
                        <img :src="item.sPicUrl"  @click="mvClick(index)" />
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <p class="rec-title">最新音乐</p>
            <ul class="new-song-list">
                <li v-for="(item,index) in newSong" :key="index">
                    <div class="imgcoin">
                        <img :src="item.picUrl" />
                    </div>
                    <div>
                        <p >{{item.name}}</p>
                        <p class="name" @click="singerMsg(item.song.artists[0].id)">{{item.song.artists[0].name}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {recommendList} from "../../../network/recommend/recommendList";
    //import {listMsg} from "../../../network/recommend/listMsg";
    import {broadcast} from "../../../network/recommend/broadcast";
    import {latestalbum} from "../../../network/recommend/latestalbum";

    import {singeralbum} from "../../../network/public/singerAlbum";

     import {banner} from "../../../network/recommend/123"
     import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
     import 'swiper/swiper-bundle.css'
     import 'swiper/swiper-bundle.min.css'
     import {songListMsg} from "../../../network/playlist/playlist";

     import {mvurl} from "../../../network/vision/mv/mvList";
    export default {
        name: "recommend",
        data() {
            return {
                recList: [],
                broadcastList: [],/*独家推送*/
                newSong: [],/*最新歌曲*/
                imgList: [],/*轮播图*/
                /*轮播图相关配置*/
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    notNextTick: true,
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    observer: true,
                    observeParents: true,
                    direction: 'horizontal',
                }
                //轮播图配置
            }
        },
        created() {
            recommendList(10).then(data => {
                this.recList = data.result;
                //console.log(data.result);
            })
            broadcast().then(data => {
                //console.log(data.result)
                this.broadcastList = data.result;
            })
            latestalbum().then(data => {
                //console.log(data.result);
                this.newSong = data.result;
            });
            banner().then(data => {//获取banner轮播图
                //console.log(data);
                this.imgList = data.banners;
            })
        },
        components: {
            Swiper, SwiperSlide
        },
        methods: {
            singerMsg(singerId) {
                singeralbum(singerId).then(data => {
                    console.log(data)
                })
            },
            sheetRouter(index,item)
            {

                songListMsg(this.recList[index].id).then(res=>{
                    //console.log(res.playlist);
                    this.$store.commit({
                        type:'songListMsg',
                        playlist:res.playlist
                    })
                    this.$router.push('/sheetMsg');
                });

            },
            /*推荐歌单*/
            recClick()
            {
                this.$router.push('/findMusic/songSheet');
            },
            /*独家放送title*/
            excClick()
            {
               this.$router.push('/solePlay');
            },
            /*独家放送*/
            mvClick(index)
            {
                mvurl(this.broadcastList[index].id).then(res=>{
                    //console.log(res.data.url);
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url
                        }
                    })
                })
            }

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(1, 1500, false)
            //var that = this;
            /*setInterval(function(){   
              that.swiper.slideNext() },2000)
          }*/
        }
    }
</script>

<style scoped>

    .container
    {
        height: 490px;
        background-color:transparent;
        overflow: scroll;
    }
    .recommend
    {
        height: 900px;

    }
    .container::-webkit-scrollbar
    {
        width: 1px;
    }
    .rec-list ul
    {
        display: flex;
        flex-wrap: wrap;
        background-color:transparent;
    }
    .rec-list ul li
    {
        flex: 1;
        margin: 0px 0 15px 0;
    }
    .rec-list ul img
    {
        width: 137px;
        border-radius:5px ;
    }
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    .rec-list p
    {
        width:137px ;

        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    /**************独家放送***********************/
    .broadcast ul
    {
        display: flex;
    }
    .broadcast ul li
    {
        flex: 1;
    }
    .broadcast ul li p
    {
        font-size: 14px;
    }
    .broadcast ul li img
    {
        border-radius:5px ;
        width: 240px;
    }
    /***************最新音乐*****************************/
    .new-song-list
    {
        display: flex;
        flex-wrap: wrap;
    }
    .new-song-list li
    {
        display: flex;
        font-size: 12px;
        width: 240px;
        margin: 0 5px 15px 0;
    }
    .new-song-list li:hover
    {
        background-color:rgb(234, 234, 234);
        border-radius:5px ;
    }
    .new-song-list li img
    {
        width: 48px;
        border-radius:5px ;
    }
    .imgcoin
    {
        margin: 0 10px 0 0;
    }
    .new-song-list li .name
    {
        color: rgb(153,153,153);
        cursor: pointer;
    }
    .new-song-list li .name:hover
    {
        color:rgb(140, 137, 135);
    }
    /*轮播图相关样式*/
    .swiper-container
    {
        width: 540px;
        border-radius: 10px;
    }
    .swiper-container{
        --swiper-pagination-color: rgb(236, 65, 65);
    }
    .swiper-img/*轮播图中的图片样式*/
    {
        width: 540px;
        vertical-align:bottom
    }
    #swiper-outer
    {
        margin: 20px 0 0 0;
    }
</style>