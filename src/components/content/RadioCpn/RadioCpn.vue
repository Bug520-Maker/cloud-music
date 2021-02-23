<!--为创作翻唱，声之剧场，音乐故事-->
<template>
    <div class="radio-cpn">
        <recommend-cpn>
            <div slot="title" @click="radioRouter(titleText)">
                {{titleText}}
                <i class="iconfont icon-arrow-right1" v-show="isShow"></i>
            </div>
            <div slot="list">
                <ul class="radio">
                    <li v-for="(item,index) in list" @click="djRouter(item)">
                       <div class="cover"></div>
                        <img v-lazy="item.picUrl+'?param=140y140'" />
                        <p>{{item.rcmdText}}</p>
                        <div class="name text-nowrap">{{item.name}}</div>
                    </li>
                </ul>
            </div>
        </recommend-cpn>
    </div>
</template>

<script>
import RecommendCpn from "../recommendCpn/RecommendCpn";

export default {
  name: "RadioCpn",
  components: {RecommendCpn},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    titleText: {
      type: String,
      default() {
        return '';
      }
    },
    isShow: {
      type: Boolean,
      default: true
    },
    categoryId:{
      type:Number,
      default:0
    }
  },
  methods: {
    djRouter(item) {
      this.$router.push({
        path: '/djradioMsg',
        query: {
          anchorId: item.id/*主播ID*/
        }
      })
    },
    radioRouter(titleText)
    {
      if(this.titleText==='电台个性推荐')
      {
        return ;
      }
      this.$router.push({
        path:'/radioCateMsg',
        query:{
          categoryId:this.categoryId,
          titleText
        }
      })
    }
  }
}
</script>

<style scoped>
    .radio
    {
        display: flex;
        justify-content: space-between;
    }
    .radio li
    {
        position: relative;
    }
    .cover{
      background-image: url("../../../assets/img/cover/coverall.png");
      width: 140px;
      height: 140px;
      position: absolute;
      background-position: 3px 0;
      top: 0;
      border-radius: 5px;
    }
    .radio li img
    {
        width: 140px;
        border: 1px solid rgba(153,153,153,.3);
      border-radius: 5px;
    }
    .radio li p
    {
        width: 140px;
        font-size: 14px;
        margin: 15px 0 0 0 ;
    }
    .name
    {
        position: absolute;
        color: #ffffff;
        top: 110px;
        font-size: 13px;
        width: 100%;
        background-color: #795da3;
        padding: 5px 0px;
        background-color:rgba(0,0,0,.3);
        border-radius: 3px;
    }
</style>