<!--发现音乐=》歌单 整体页面-->
<template>
  <div id="song-sheet" ref="songSheet">
    <router-view/>
    <div class="quality-song-list" @click="qualityRouter"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff"
         :style="{backgroundImage:`url(${highquality[0].coverImgUrl}?imageView&blur=40x20)`}">
      <div class="quality">
        <div class="cover"></div>
        <img v-lazy="highquality[0].coverImgUrl+'?param=140y140&quality=100'">
      </div>
      <ul>
        <li>精品歌单</li>
        <li>{{ highquality[0].name }}</li>
        <li>{{ highquality[0].copywriter }}</li>
      </ul>
    </div>

    <!--设置 歌单导航 华语-流行-摇滚-民谣-电子-另类/独立-轻音乐等-->
    <div id="header">
      <div class="title">{{ title }} ></div>
      <sheet-nav @sheetchild="btnClick" @back-top="backTop"></sheet-nav>
    </div>
  </div>
</template>

<script>
    import SheetNav from "./childCpn/SheetNav";
    import {highquality,highTags} from "@/network/songsheet/songSheet";

    import {getRandom} from "@/utils/random.util";

    export default {
        name: "songSheet",
        components: {SheetNav},
        data()
        {
            return {
                title:'华语',
                highquality:[{coverImgUrl:''}],
                tags:[],/*精品歌单标签*/
                tagName:'',
                loading:true
            }
        },
        created() {
            highTags().then(data=>{
              //console.log(data.tags);
              this.tags=data.tags;
              let index=this.random(0,this.tags.length);
              highquality(this.tags[index].name).then(data=>{
                //console.log(data.playlists);
                this.highquality=data.playlists;
                this.tagName=this.tags[index].name;
              })
              this.loading=false
            })

        },
      methods:{
        btnClick(name)
        {
          this.title=name;
        },
        qualityRouter()
        {
          this.$router.push({
            path:'/findMusic/songSheet/qualitySheet',
            query:{
              hightSheet:this.highquality,
              tagName:this.tagName,
              tags:this.tags
            }
          });
        },
        /*生成随机数*/
        random(min, max) {
          return getRandom(min,max);
        },
        backTop()
        {
          this.$refs.songSheet.scrollTop=0
        }
      },
    }
</script>

<style scoped>
#song-sheet {
  overflow: scroll;
  height: 480px;
}

#song-sheet::-webkit-scrollbar {
  width: 2px;
}

#header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  position: relative;
}

.title {
  width: 80px;
  padding: 5px 20px;
  text-align: center;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 20px;
}

.quality-song-list {
  height: 170px;
  width: 100%;
  background-color: rgba(127, 95, 87, .6);
  margin: 30px 0 0 0;
  border-radius: 10px;
  display: flex;
  background-repeat: no-repeat;
  background-position: center center;
  background-size:6000px;
  cursor: pointer;
}

.quality-song-list img {
  width: 140px;
  display: block;
  margin: 15px;
  border-radius: 8px;
}

.quality-song-list ul li:nth-of-type(1) {
  width: 102px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgb(231, 170, 90);
  margin: 30px 0 20px 0;
  color: rgb(231, 170, 90);
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}

.quality-song-list ul li:nth-of-type(2) {
  color: white;
  margin: 0 0 15px 0;
}

.quality-song-list ul li:nth-of-type(3) {
  color: black; /*rgb(173, 164, 163);*/
  font-size: 13px;
}
.quality{
  position: relative;
}
.quality .cover{
  background-image: url("../../../assets/img/cover/coverall.png");
  position: absolute;
  width: 140px;
  height: 140px;
  top: 15px;
  left: 15px;
  border-radius: 8px;
}
</style>