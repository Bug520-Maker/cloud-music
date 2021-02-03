<template>
    <div class="container"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff"
         >
        <div class="recommend">
            <div id="swiper-outer" :style="{backgroundImage:`url(${swiperBgc})`}"><!--设置轮播图-->
              <el-carousel indicator-position="outside" @change="bgcChange">
                <el-carousel-item v-for="(item,index) in imgList" :key="item.imageUrl">
                  <img :src="item.imageUrl+'?imageView&quality=89'" />
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
                swiperBgc:'',
               loadingInstance:null
            }
        },
        created() {
            banner().then(data => {//获取banner轮播图
                //console.log(data);
                this.imgList = data.banners;
              this.bgcChange(0,0)
            })

        },
        components: {
            RecommendRadio,
            RecommendMv,
            NewMusic,
            ExclusiveBroadcast,
            RecommendSongSheet,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
      methods:{
        bgcChange(to,from)
        {
          //console.log(to)
          this.swiperBgc=this.imgList[to]&&this.imgList[to].imageUrl+'?imageView&blur=40x20';
        }
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
    /*设置轮播图样式*/
    #swiper-outer
    {
      /*background-color: skyblue;*/
      width: 740px;
      margin: 30px auto 40px;
      height:200px ;
      background-position: center center;
      background-size:6000px;
      border-radius: 10px;
    }
    .el-carousel
    {
      width: 540px;
      margin: 0 auto;
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
      /*border-radius: 10px;*/
    }
</style>