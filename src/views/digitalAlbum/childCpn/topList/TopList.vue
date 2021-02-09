<template>
  <div class="top-list">
    <div class="album-type">
      <div v-for="(item,index) in ['数字专辑','语种风格馆']" :key="item"
           class="digital"
           :class="{active:currentLive===index}"
           @click="divClick(item,index)">
        {{item}}
      </div>
    </div>
    <ul class="type" v-show="currentLive===0">
      <li v-for="(item,index) in ['总榜','日榜','周榜','年榜']" :key="item"
          @click="liClick(item,index)"
          :class="{active:currentIndex===index}">
        {{item}}
      </li>
    </ul>
    <ul class="products" v-show="currentLive===0">
      <li v-for="(item,index) in products" :key="item.albumId">
        <div class="cover"></div>
        <msg-list :is-show="false" :duration-x-y="{x:'0%',y:'135%'}">
          <div slot="imgContainer">
            <img :src="item.coverUrl+'?param=129y129'" />
          </div>
          <div slot="state" class="top-list-state">{{item.albumName}}</div>
          <div slot="creator" class="top-list-creator">{{item.artistName}}</div>
          <div slot="duration" class="price">￥{{item.price}}</div>
        </msg-list>
      </li>
      <li v-for="(item,index) in Math.ceil(products.length%4)" v-if="products.length!==0"></li>
    </ul>
    <language-style v-show="currentLive===1"/>
  </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import LanguageStyle from "@/views/digitalAlbum/childCpn/topList/childCpn/LanguageStyle";

import {digitalTop, languageStyle} from "@/network/digitalAlbum/digitalAlbum";
export default {
  name: "TopList",
  components: {LanguageStyle, MsgList},
  data()
  {
    return {
      currentIndex:0,
      currentLive:0,
      products:[],
      typeMap:new Map([
          ['日榜','daily'],
        ['周榜','week'],
        ['年榜','year'],
        ['总榜','total'],
      ])
    }
  },
  created() {
   this.getDigitalTop(0,'total')
  },
  methods:{
    getDigitalTop(albumType,type)
    {
      digitalTop(albumType,type).then(data=>{
        //console.log(data.products);
        this.products=data.products
      })
    },
    liClick(item,index)
    {
      this.currentIndex=index;
      this.getDigitalTop(0,this.typeMap.get(item));
    },
    divClick(item,index)
    {
      this.currentLive=index;

    }
  }
}
</script>

<style scoped>
  .top-list
  {
    padding :30px 30px 0 30px;
    height: 505px;
    overflow-y: auto;
  }
  .top-list::-webkit-scrollbar
  {
    width: 2px;
  }
  .album-type
  {
    display: flex;
    width: 200px;
    justify-content: space-between;
    margin: 0 auto;
    border-radius: 15px;
    border: 1px solid rgba(236, 65, 65,.5);
  }
  .album-type > div.active{
    background-color:rgba(236, 65, 65,.5);
    color:#ffffff;
  }
  .digital
  {
    width: 100px;
    height:30px;
    border-radius: 15px;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    color: #ec4141;
  }
  .digital:hover
  {
    background-color: #ec4141;
    color: #ffffff;
    cursor: pointer;
  }
  .type
  {
    display: flex;
    margin: 20px 0 0 0;
  }
  .type li
  {
    margin: 0 5px;
    font-size: 13px;
    padding: 3px 15px;
    cursor: pointer;
  }
  .type li.active{
    color: #ec4141;
    background-color: #fdf5f5;
    border-radius: 13px;
  }
  /*设置专辑列表*/
  .products
  {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 0;
    justify-content: space-between;
  }
  .products li
  {
    position: relative;
    margin: 0 20px 70px 0;
    width: 150px;
    height:140px;
  }
  .cover
  {
    width: 152px;
    height: 142px;
    position: absolute;
    background-image: url("../../../../assets/img/cover/coverall.png");
    background-position: 0px -844px;
    background-repeat: no-repeat;
    z-index:2;
  }
  .top-list-state
  {
    margin: 5px 0;
    width: 152px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .top-list-creator
  {
    font-size: 13px;
    color: #999999;
    width: 152px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price{
    font-size: 16px;
    color:#ec4141;
  }
</style>