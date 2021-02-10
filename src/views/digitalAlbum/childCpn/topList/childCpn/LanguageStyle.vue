<!--语种风格管-->
<template>
  <div class="list-style">
    <ul>
      <li v-for="(item,index) in ['华语','欧美','韩国','日本']" @click="liClick(item,index)" :class="{active:currentIndex===index}">
        {{item}}
      </li>
    </ul>
    <div class="album-style">
      <ul>
        <li v-for="(item,index) in listStyle" :key="item.albumId">
          <list-info>
            <div slot="imgContainer" class="language-img">
              <div class="cover"></div>
              <img :src="resetImgSize(item.coverUrl,80,80)" />
            </div>
            <div slot="state" class="language-state">{{item.albumName}}</div>
            <div slot="creator" class="language-creator">{{item.artistName}}</div>
            <div slot="time" class="price">￥{{item.price}}</div>
          </list-info>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ListInfo from "@/components/common/ListInfo/ListInfo";
import {resetImgSize} from "@/utils/format/format";

import {languageStyle} from "@/network/digitalAlbum/digitalAlbum";
export default {
  name: "LanguageStyle",
  components: {ListInfo},
  data()
  {
    return{
      currentIndex:0,
      listStyle:[],
      areaMap:new Map([
         ['华语','Z_H'],
        ['欧美','E_A'],
        ['韩国','KR'],
        ['日本','JP'],
      ])
    }
  },
  created() {
    this.getListStyle('Z_H')
  },
  methods:{
    liClick(item,index)
    {
      this.currentIndex=index;
      const area=this.areaMap.get(item);
      this.getListStyle(area);
    },
    getListStyle(area)
    {
      languageStyle(area).then(data=>{
        //console.log(data.albumProducts);
        this.listStyle=data.albumProducts
      })
    },
    resetImgSize(imgUrl,width,height)
    {
      return resetImgSize(imgUrl,width,height)
    }
  }
}
</script>

<style scoped>
  .list-style > ul
  {
    display: flex;
    margin: 20px 0 0 0px;
  }
  .list-style > ul li
  {
    margin: 0 10px 0 0;
    font-size: 12px;
    padding: 3px 15px;
    border-radius: 15px;
    cursor: pointer;
  }
  .list-style > ul li.active{
    color: #ec4141;
    background-color: #fdeded;
  }
  .album-style{
    margin: 20px 0 0 0;
    padding: 0 0 0 30px;
  }
  .album-style ul
  {
    display: flex;
    flex-wrap: wrap;
    /*justify-content:space-between;*/
  }
  .album-style ul li
  {
    padding: 5px 0;
    width: 300px;
    margin: 0 50px 0 0;
  }
  .language-img{
    position: relative;
  }
  .cover{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:url("../../../../../assets/img/cover/coverall.png");
    background-position: -145px -57px;
    z-index: 9;
    border-radius: 5px;
  }
  .language-img img
  {
    width: 80px;
    border-radius: 5px;
  }
  .language-state
  {
    margin: 10px 0;
    width: 214px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price{
    color: #ec4141;
    margin: 5px 0 0 0;
  }
</style>