<template>
    <div class="artist-rank">
      <h3>云音乐歌手榜</h3>
      <div class="type">
        <ul>
          <li v-for="(item,index) in ['华语','欧美','韩国','日本']" :key="item"
              @click="liClick(index)"
              :class="{active:currentIndex===index}">
            {{item}}
          </li>
        </ul>
        <div class="update">
          更新时间:
          {{formatDate(this.topList.updateTime,"MM月-dd日")}}
        </div>
      </div>
      <div class="top-list-header" v-if="topList.length!==0">
        <div class="top-first-to-third" v-for="item in 3" :key="item" @click="singerRouter(topList.artists[item-1])">
          <div class="seniority">{{item}}</div>
          <div class="top-msg">
            <p>{{topList.artists[item-1].name}}</p>
            <p>热度: {{topList.artists[item-1].score}}</p>
          </div>
          <div class="img-container">
              <img :src="resetImgSize(topList.artists[item-1]&&topList.artists[item-1].picUrl,100,100)" />
          </div>
        </div>
      </div>
      <child-cpn :list="topList.artists.slice(3,topList.artists.length)" v-if="topList.length!==0"/>
    </div>
</template>

<script>

import {artistToplist} from "@/network/recommend/topList/toplist";
import {formatDate, resetImgSize} from "@/utils/format/format";
import ChildCpn from "./childCpn/ChildCpn";

export default {
  name: "ArtistRank",
  components: {ChildCpn},
  data(){
    return {
      topList:[],
      currentIndex:0
    }
  },
  created() {
    this.getArtistTopList(1)
  },
  methods: {
    getArtistTopList(type)
    {
      artistToplist(type).then(data=>{
        //console.log(data.list);
        this.topList=data.list;
      })
    },
    resetImgSize(imgURL, width, height) {
      return resetImgSize(imgURL, width, height);
    },
    liClick(index)
    {
      this.currentIndex=index;
      this.getArtistTopList((index+1))
    },
    formatDate(time,ft)
    {
      return formatDate(time,ft);
    },
    singerRouter(item)
    {
      this.$router.push({
        path:'/singerDetails',
        query:{
          artistId:item.id
        }
      })
    }
  }
}
</script>

<style scoped>
  .artist-rank{
    height: 535px;
    overflow-y: auto;
  }
  .artist-rank::-webkit-scrollbar
  {
    width: 2px;
  }
  h3{
    margin: 20px 0 25px 20px;
  }
  .type
  {
    display: flex;
    justify-content: space-between;
  }
  .type ul
  {
    display: flex;
    color: #676767;
    font-weight: bolder;
    margin: 0 0 15px 20px;
  }
  .type ul li
  {
    padding: 0 30px 0 0;
    cursor: pointer;
  }
  .type ul li.active{
    color: #000;
  }
  .update{
    font-size: 12px;
    color: #9f9f9f;
    width: 130px;
  }
  .top-list-header{
    border-top: 1px solid #e5e5e5;
    display: flex;
    padding: 15px 25px 25px;
    justify-content: space-between;
  }
  .top-first-to-third
  {
    width: 240px;
    height: 102px;
    background-color: #fafafa;
    border-radius:5px;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .top-first-to-third:hover
  {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .seniority{
    position: absolute;
    top: 0;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 0 0 45px 0;
    color: #f7b3b3;
    font-size: 40px;
    text-align: center;
    overflow: hidden;
  }
  .top-msg{
    margin: 0 0 0 45px;
  }
  .top-msg p:nth-child(1)
  {
    font-size: 14px;
    margin: 30px 0 10px 0;
  }
  .top-msg p:nth-child(2)
  {
    font-size: 12px;
    color: #c2c2c2;
  }
  .img-container img
  {
    width: 100px;
    border-radius: 0 5px 5px 0;
    border: 1px solid #d8d8d8;
  }
</style>