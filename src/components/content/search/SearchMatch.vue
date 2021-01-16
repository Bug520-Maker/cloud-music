<!--搜索匹配-->
<template>
  <div class="search-match">
    <span>
      搜<span class="keyword">"{{keyword}}"</span>相关结果 >
    </span>
    <ul>
      <!--显示歌手，歌单，专辑-->
      <li v-for="(item,index) in searchMatch.order" :key="index">
        <div class="content">
          <i class="iconfont icon-zhuanji" v-show="item==='albums'"></i>
          <i class="iconfont icon-gedan" v-show="item==='playlists'"></i>
          <i class="iconfont icon-ttpodicon" v-show="item==='artists'"></i>
          <i class="iconfont icon-yinfu" v-show="item==='songs'" style="font-size: 12px"></i>
          {{nameMap.get(item)}}
        </div>
        <ul class="music-content">
          <!--歌单，歌手，专辑下具体内容-->
          <li v-for="(i,index) in searchMatch[item]" :key="index" @click="musicCon(i.name,item,i)">
            {{i.name}}
            <span class="artist-name" v-show="item==='songs'"> - {{toString(i.artists)}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {singerMsg} from "@/network/singer/singer";

export default {
name: "SearchMatch",
  data()
  {
    return {
        nameMap:new Map([
        ['artists','歌手'],
        ['songs','单曲'],
        ['albums','专辑'],
        ['playlists','歌单']
      ]),
    }
  },
  props:{
    searchMatch:{
      type:Object,
      default()
      {
        return {}
      }
    },
    keyword:{
      type:String,
      default:''
    }
  },
  methods:{
    toString(item)
    {
      if(item!==undefined&&item!==null)
      {
        //console.log(item)
        let names=[];
        for(let n of item)
        {
          names.push(n.name);
        }
        return names.join("/")
      }
    },
    musicCon(val,item,i)
    {
      this.$emit('search-match',val);
      this.isShow=false;
      switch(item)
      {
        case 'songs':
          console.log(i)
          this.$store.dispatch({
            type:'getMusicUrl',
            songId:i.id
          });
          this.$store.dispatch({
            type:'getMusicAlbum',
            albumId:i.album.id
          });
          this.$store.commit({
            type:'getSingleInfo',
            details:i
          });break;
        case 'albums': ;break;
        case 'playlists': ;break;
        case 'artists':
          //console.log(i);
          singerMsg(i.id).then(res=>{
            /*路由至歌手详情页*/
            this.$router.push({
              path:'/singerDetails',
              query:{
                singerBaseMsg:res.data
              }
            })
          });break;

      }
    }
  }
}
</script>

<style scoped>
  .search-match
  {
    position: absolute;
    width: 353px;
    height:452px;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    background-color: #ffffff;
    z-index: 99999;
    top: 52px;
    left: -50px;
    border-radius: 6px;
    overflow-y: auto;
    font-size: 12px;
  }
  .search-match::-webkit-scrollbar
  {
   width: 3px;
  }
  .search-match::-webkit-scrollbar-thumb
  {
    height: 10px;
    background-color:#cecece;
  }
  /*设置搜索建议最外样式*/
  .search-match
  {
    line-height: 30px;
  }
  .search-match>span
  {
    padding: 0 0 0 10px;
  }
  .search-match .keyword
  {
    color: #507daf;

  }
  /*设置单曲，歌单，歌手*/
  .content
  {
    background-color: #f5f5f7;
    line-height: 25px;
    padding: 0 10px;
  }
  .music-content
  {
    line-height: 20px;
  }
  .music-content li
  {
    padding: 3px 25px;
  }
  .music-content li:hover
  {
    background-color: #f2f2f2;
    cursor: pointer;
  }
</style>