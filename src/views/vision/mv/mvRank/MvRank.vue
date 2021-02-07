<!--mv排行榜-->
<template>
  <div class="mv-rank">
    <ul>
      <li v-for="(item,index) in ['内地','港台','欧美','日本','韩国']"
          :class="{active:currentIndex===index}"
           @click="liClick(item,index)" :key="item">
        <span>{{item}}</span>
      </li>
    </ul>
    <ul class="mv-content">
      <li v-for="(item,index) in mvRank" :key="item.id">
        <div class="sign">{{index+1<10? '0'+(index+1) :index+1}}</div>
        <div class="img-container" v-lazy-container="{ selector: 'img' }">
          <img :data-src="item.cover+'?param=172y96.7'"
               :data-loading="require('@/assets/img/placeholder/placeholder02.png')"/>
        </div>
        <div class="msg">
          <div class="name text-nowrap">{{item.name}}</div>
          <div class="artist-name text-nowrap">{{toString(item.artists)}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mvList} from "@/network/vision/mv/mvList";
export default {
  name: "MvRank",
  data()
  {
    return {
      currentIndex:0,
      mvRank:[]
    }
  },
  methods:{
    liClick(item,index)
    {
      this.currentIndex=index;
      mvList(item).then(res=>{
       // console.log(res.data);
        this.mvRank=res.data;
      })
    },
    toString(item)
    {
      let name=[];
      for(let value of item)
      {
        name.push(value.name);
      }
      return name.join("/")
    }
  },
  created() {
    this.liClick('内地',0)
  }
}
</script>

<style scoped>
  /*.mv-rank
  {
    background-color: pink;
  }*/
  .mv-rank >ul:nth-of-type(1)
  {
    display: flex;
    justify-content: flex-end;
  }
  .mv-rank >ul:nth-of-type(1) li
  {
    cursor: pointer;
    font-size: 13px;
    color: #9f9f9f;
    padding: 3px 10px;
    margin: 0 5px;
  }
  .mv-rank >ul:nth-of-type(1) li.active
  {
    color: #ec4141;
    background-color: #fcebeb;
    border-radius: 15px;
  }
  /*排行榜详情*/
  .mv-content
  {
    display: flex;
    flex-wrap: wrap;
  }
  .mv-content li
  {
    display: flex;
    width: 368px;
    padding: 20px 0 20px 15px;
  }
  .mv-content li:nth-child(odd)
  {
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
  }
  .mv-content li:nth-child(even)
  {
    border-bottom: 1px solid #f3f3f3;
  }
  .mv-content .img-container img
  {
    width: 172px;
    height:96px;
    border-radius: 5px;
  }
  .sign
  {
    color: #9f9f9f;
    font-size: 22px;
    margin:30px 10px 0 0 ;
  }
  .msg
  {
    margin: 0 0 0 10px;
  }
  .msg .name
  {
    width: 148px;
    margin: 0 0 30px 0;
  }
  .artist-name
  {
    width: 148px;
  }
  .msg .name,.artist-name
  {
    color: #676767;
    font-size: 13px;
  }
</style>