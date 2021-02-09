<template>
    <div class="lunbo">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgList" :key="item.pic">
          <img :src="item.pic" />
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import {radionBanner} from "@/network/radio/radio";

export default {
  name: "lunbo",
  data() {
    return {
      imgList: [],/*轮播图*/
    }
  },
  created() {
    radionBanner().then(result => {
      this.imgList = result.data;
      //console.log(result.data)
    })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },

}
</script>

<style scoped>
.lunbo
{
  /*background-color: skyblue;*/
  width: 540px;
  padding: 0 20px;
  margin: 10px auto 40px;
  height:200px ;
}
.el-carousel__item
{
  height: 210px;
  width:540px;
}
.el-carousel__item img
{
  width:540px;
  border-radius: 10px;
  vertical-align:bottom
}
</style>