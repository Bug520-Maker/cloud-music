<template>
    <div class="container"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">

        <div class="recommend">
            <div id="swiper-outer"><!--设置轮播图-->
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item,index) in imgList" :key="item.imageUrl">
                  <img :src="item.imageUrl" />
                </el-carousel-item>
              </el-carousel>
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
     import {banner} from "@/network/recommend/banner/banner"
     import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
     import 'swiper/swiper-bundle.css'
     import 'swiper/swiper-bundle.min.css'
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
    /*设置轮播图样式*/
    #swiper-outer
    {
      /*background-color: skyblue;*/
      width: 540px;
      margin: 30px auto 40px;
      height:200px ;
    }
    .el-carousel__item
    {
      height: 200px;
      width:540px;
    }
    .el-carousel__item img
    {
      width:540px;
      vertical-align:bottom;
      border-radius: 10px;
    }
</style>