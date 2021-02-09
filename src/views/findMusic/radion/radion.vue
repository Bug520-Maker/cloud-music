<template>
    <div class="radion"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">

        <lunbo></lunbo>
        <banner :category="cateList" @itemClick="banClick"></banner>
        <pay-fantastic/><!--付费精品-->
        <persional-rec/><!--个性推荐电台-->

        <category-cpn cate="创作翻唱"></category-cpn><!--创作翻唱-->
        <category-cpn cate="声之剧场"/> <!--声之剧场-->
        <category-cpn cate="音乐故事" />   <!--音乐故事-->
        <category-cpn cate="情感调频" />  <!--情感调频-->
        <category-cpn cate="声音恋人" />      <!--音乐恋人-->
    </div>
</template>

<script>
import {catrgoryRadio, notHot, radionBanner} from "@/network/radio/radio";
import {catelistType} from "@/network/radio/radio";

import banner from "./childCpn/banner"
import categoryCpn from "@/views/findMusic/radion/categoryCpn/categoryCpn";
import Lunbo from "./lunbo";
import PayFantastic from "./payFantastic/PayFantastic";
import PersionalRec from "./persionalRec/PersionalRec";

export default {
  name: "radion",
  components: {
    categoryCpn,
    PersionalRec,
    PayFantastic,
    Lunbo,
    banner
  },
  data() {
    return {
      cateList: {},
      innovate: {}
    }

  },
  created() {/*获取电台分类*/
    catrgoryRadio().then(data => {
      //console.log(data.categories);
      this.cateList = data;
      for (let item of this.cateList.categories) {
        if (item.name === "创作翻唱") {
          console.log(item);
          this.innovate = item;
        }
      }
    })

  },
  methods: {
    banClick(item) {
      catelistType(item.id).then(data => {
        console.log(data);
      })
    }
  }
}
</script>

<style scoped>
    .radion
    {
        /*background-color: pink;*/
        margin: 25px 0 0 0;
        height: 455px;
        overflow-y: scroll;

    }
    .radion::-webkit-scrollbar
    {
        width: 2px;
    }
</style>