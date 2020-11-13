<template>
    <div class="lunbo">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="75>1">
            <swiper-slide class="swiper-slide" v-for="(item,index) in imgList" :key="index"><img :src="item.pic" class="swiper-img" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    import 'swiper/swiper-bundle.min.css'

    import {radionBanner} from "../../../network/radio/radio";
    export default {
        name: "lunbo",
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
        components:{
            Swiper, SwiperSlide
        }
        ,
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
        },
        created() {
            radionBanner().then(result=>{
                this.imgList=result.data;
                console.log(result.data)
            })
        }
    }
</script>

<style scoped>
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
</style>