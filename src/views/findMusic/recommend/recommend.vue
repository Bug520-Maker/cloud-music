<template>
    <div class="container"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
        <div class="recommend">
            <div id="swiper-outer"><!--设置轮播图-->
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in imgList" :key="index"><img :src="item.imageUrl+'?param=540y200'" class="swiper-img" /></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <RecommendSongSheet/>
            <ExclusiveBroadcast/>
            <NewMusic/>
            <RecommendMv/>
            <recommend-radio/>
        </div>
    </div>
</template>

<script>
    import {recommendList} from "../../../network/recommend/recommendList";
    import {recommendMv} from "../../../network/recommend/recommendMv";
    import {broadcast} from "../../../network/recommend/broadcast";
    import {latestalbum} from "../../../network/recommend/latestalbum";

    import {singeralbum} from "../../../network/public/singerAlbum";

     import {banner} from "../../../network/recommend/123"
     import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
     import 'swiper/swiper-bundle.css'
     import 'swiper/swiper-bundle.min.css'
     import {songListMsg} from "../../../network/playlist/playlist";

     import {mvurl} from "../../../network/vision/mv/mvList";
    import RecommendSongSheet from "./recommendSongSheet/RecommendSongSheet";
    import ExclusiveBroadcast from "./exclusiveBroadcast/ExclusiveBroadcast";
    import NewMusic from "./newMusic/NewMusic";
    import RecommendMv from "./recommendMv/RecommendMv";
    import RecommendRadio from "./recommendRadio/RecommendRadio";
    export default {
        name: "recommend",
        data() {
            return {
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
            banner().then(data => {//获取banner轮播图
                //console.log(data);
                this.imgList = data.banners;
            })

        },
        components: {
            RecommendRadio,
            RecommendMv,
            NewMusic,
            ExclusiveBroadcast,
            RecommendSongSheet,
            Swiper, SwiperSlide
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
        scrollbar-color: transparent transparent;
    }
    .recommend
    {
        height: 900px;

    }
    .container::-webkit-scrollbar
    {
        width: 1px;
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