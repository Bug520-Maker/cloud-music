<!--数字专辑-->
<template>
    <div class="digital-album">
      <div class="title" @click="digitalRouter">
        <h3>数字专辑</h3>
        <div class="topList">
          榜单
          <i class="iconfont icon-arrow-right1"></i>
        </div>
      </div>
        <ul>
          <li v-for="(item,index) in products" :key="item.albumId">
            <div class="cover"></div>
            <msg-list :is-show="false" :duration-x-y="{x:'0%',y:'133%'}">
              <div slot="imgContainer" class="digital-img">
                <img :src="resetImgSize(item.coverUrl,140,140)" />
              </div>
              <div slot="state" class="digital-state text-nowrap">{{item.albumName}}</div>
              <div slot="creator" class="digital-creator">{{item.artistName}}</div>
              <div slot="duration" class="price">￥{{item.price}}</div>
            </msg-list>
          </li>
        </ul>
    </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import {resetImgSize} from "@/utils/format/format";

import {digitalAlbum} from "@/network/digitalAlbum/digitalAlbum";
export default {
  name: "DigitalAlbum",
  components: {MsgList},
  data()
  {
    return {
      products:[]
    }
  },
  created() {
    digitalAlbum().then(data=>{
      //console.log(data.products);
      this.products=data.products;
    })
  },
  methods:{
    digitalRouter()
    {
      this.$router.push({
        path:'/digitalTop'
      })
    },
    resetImgSize(imgURL,width,height)
    {
      return resetImgSize(imgURL,width,height)
    }
  }
}
</script>

<style scoped>
    .digital-album {
        padding: 30px 30px 0 30px;
        height: 505px;
      overflow-y: auto;
    }
    .digital-album::-webkit-scrollbar
    {
      width: 2px;
    }
    .title
    {
      display: flex;
      justify-content: space-between;
    }
    .title .topList
    {
      padding: 0 0 0 5px;
      font-size: 14px;
      font-weight: bolder;
      width: 50px;
      height: 20px;
      border-bottom: 2px solid #ec4141;
      cursor: pointer;
    }
    .title .topList i
    {
      font-size: 14px;
      margin: 0 0 0 3px;
    }
    h3{
      margin: 0 0 15px 0;
    }
    .digital-album ul
    {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .digital-album ul li
    {
      margin: 0 20px 30px 0;
      position: relative;
    }
    .digital-album .digital-img
    {
      width: 150px;
      height:140px;
    }
    .cover
    {
      width: 152px;
      height: 142px;
      position: absolute;
      background-image: url("../../assets/img/cover/coverall.png");
      background-position: 0px -844px;
      background-repeat: no-repeat;
      z-index:2;
    }
    .digital-img img
    {
      width: 128px;
      border-radius: 0;
    }
    .digital-state
    {
      width: 140px;
      margin: 5px 0 5px 0;
    }
    .digital-creator
    {
      width: 140px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #999999;
      font-size: 13px;

    }
    .price{
      color:#ec4141;
      font-size: 16px;
    }
</style>