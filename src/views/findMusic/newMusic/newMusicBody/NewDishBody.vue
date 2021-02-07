<template>
  <div class="new-dish">
    <ul class="bannerNav"><!--新歌导航 全部，华语，欧美，韩国，日本-->
      <li v-for="(item,index) in navList" :class="{active:currentIndex===index}" @click="liClick(index,item)" :key="item">
        {{item}}
      </li>
      <div id="nav">
        <div v-for="(item,index) in ['推荐','全部']"
             :class="{active:index===divIndex}"
             @click="divClick(item,index)">
          {{item}}
        </div>
      </div>
    </ul>
    <!--新碟上架内容-->
    <ul class="new-albums">
      <li v-for="(item,index) in allNewAlbum" :key="item.id">
        <div class="cover" @click="imgClick(item,index)"></div>
        <msg-list :is-show="false">
          <div slot="imgContainer">
            <img v-lazy="item.blurPicUrl+'?param=130y130'" />
          </div>
          <div slot="state" class="state">{{item.name}}</div>
          <div slot="creator" class="creator text-nowrap">{{item.artist.name}}</div>
        </msg-list>
      </li>
    </ul>
  </div>
</template>

<script>
import {allNewDish, newDish,albumConent} from "@/network/newMusic/newMusic";
import MsgList from "@/components/common/msgList/MsgList";

export default {
  name: "NewDishBody",
  components: {MsgList},
  data()
  {
    return {
      currentIndex:0,
      divIndex:1,
      allNewAlbum:[],
      areaMap:new Map([
          ['全部','All'],
          ['华语','ZH'],
          ['欧美','EA'],
          ['韩国','KR'],
          ['日本','JP']
      ])
    }
  },
  props:{
    list:{
      type:Array,
      default()
      {
        return []
      }
    },
    navList:{
      type:Array,
      default()
      {
        return []
      }
    }
  },
  methods:{
    liClick(index,item)
    {
      this.currentIndex=index;
      let area=this.areaMap.get(item);
      if (this.divIndex === 0)
      {
        newDish(area, 'hot').then(data => {
          this.allNewAlbum=data.monthData.slice(0,60);
        })
      }
      else if(this.divIndex===1)
      {
        allNewDish(area).then(data=>{
          //console.log(data.albums);
          this.allNewAlbum=data.albums;
        })
      }

    },
    divClick(item,index)
    {
      this.divIndex=index;
      this.liClick(this.currentIndex,this.navList[this.currentIndex]);
    },
    imgClick(item,index)
    {
      albumConent(this.allNewAlbum[index].id).then(data=>{
        //console.log(data);
        this.$router.push({
          path:'/albumMsg',
          query:{
            albumMsg:data
          }
        })
      })
    }
  },
  created() {
    this.liClick(0,'ALL');
  }
}
</script>

<style scoped>
.bannerNav {
  display: flex;
  margin: 0 0 20px 0;
}

.bannerNav li {
  margin: 0 0 0 20px;
  color: rgb(103, 103, 103);
  font-size: 14px;
  cursor: pointer;
}

.bannerNav .active {
  font-weight: 700;
  color: #000000;
}
.new-albums li img
{
  width: 130px;
  border-radius: 5px;
}

.new-albums
{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.new-albums li .state
{
  width: 137px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.new-albums li
{
  margin: 0 0 10px 0;
  position: relative;
}
.cover{
  background-image: url("../../../../assets/img/cover/coverall.png");
  width: 150px;
  height:140px;
  position: absolute;
  top: 0;
  z-index: 3;
  background-position: 0 -844px;
}
.new-albums li .creator
{
  font-size: 12px;
  color: #9f9f9f;
  margin: 5px 0 0 0;
  width: 137px;
}
/*推荐，全部*/
#nav
{
  display: flex;
  margin: 0 0 0 380px;
  font-size: 12px ;
  color: #f2f2f2;
}
#nav div
{
  font-size: 12px;
  padding: 3px 10px;
  color: #676767;
  border-radius: 13px;
  cursor: pointer;
}
#nav div.active
{
  background-color: #fdf5f5;
  color:#ec4141 ;
}
</style>