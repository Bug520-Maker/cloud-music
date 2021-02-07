<!--私人FM-->
<template>
    <div class="per-fm clearfix" >
      <div class="left-content">
        <ul>
          <el-carousel :interval="4000" type="card"
                       indicator-position="none"
                       :autoplay="false"
                       height="277px"
                       @change="activeChange"
                       ref="swiper"
                       arrow="never"
                       :initial-index="1">
            <el-carousel-item v-for="(item,index) in perSong" :key="index" >
              <img :src="item.album.picUrl+'?param=277y277'" />
            </el-carousel-item>
          </el-carousel>
        </ul>
        <div class="control-btn">
          <div>
            <i class="iconfont icon-love"></i>
          </div>
          <div>
            <i class="iconfont icon-DeleteItemCCAndM"></i>
          </div>
          <div @click="playNext">
            <i class="iconfont icon-play2"></i>
          </div>
          <div>
            <i>...</i>
          </div>
        </div>
      </div>

      <div class="right-content" v-if="perSong.length!==0">
        <div class="song-name">{{perSong[currentIndex]&&perSong[currentIndex].name}}</div>
        <div class="fm-msg">
          <div>
            <span class="album">专辑: </span>
            <span>{{perSong[currentIndex].album.name}}</span>
          </div>
         <div>
           <span class="artist">歌手: </span>
           <span>{{getSingers(perSong[currentIndex].artists)}}</span>
         </div>
        </div>
      </div>

    </div>
</template>

<script>
import {perFM} from "@/network/perFm/perFM";

export default {
  name: "perFM",
  data() {
    return {
      perSong: [],
      currentIndex: 1
    }
  },
  created() {
    perFM().then(data => {
      console.log(data.data);
      this.perSong = data.data;
    })
  },
  methods: {
    setSong(index)
    {
      let song={
        id:this.perSong[index].id,
        name:this.perSong[index].name,
        alias:[this.perSong[index].alias[0]],
        artists:[
          {
            id:this.perSong[index].artists[0].id,
            name:this.perSong[index].artists[0].name
          }
        ],
        album:{
          name:this.perSong[index].album.name
        }
      }
      return song;
    },
    activeChange(activeIndex, prevIndex) {
      this.currentIndex=activeIndex;
      console.log(this.perSong[activeIndex]);
      this.$store.dispatch({
        type:'getMusicUrl',
        songId:this.perSong[activeIndex].id
      })
      this.$store.dispatch({
        type:'getMusicAlbum',
        albumId:this.perSong[activeIndex].album.id
      })

      this.$store.commit({
        type:'getSingleInfo',
        details:this.setSong(activeIndex)
      })
    },
    playNext() {
      this.$refs.swiper.next();
    },
    getSingers(names)
    {
      const artists=names.map((item,index)=>{
        return item.name;
      })
      return artists.join('/');
    }
  },
}
</script>

<style scoped>
.per-fm {
  width: 420px;
  height: 535px;
  display: flex;
  justify-content: space-between;
}

.per-fm ul {
  margin: 70px 0 0 20px;
  width: 347px;
}

.is-active {
  width: 277px;
  transform: translate(70px) !important;
}

.per-fm ul img {
  width: 277px;
  border-radius: 5px;
  border: 1px solid rgba(153,153,153,.4);
}

/*设置控制按钮样式 如删除，下一首*/
.control-btn {
  display: flex;
  margin: 30px 0 0 65px;
}

.control-btn > div {
  width: 40px;
  height: 40px;
  border: 1px solid #e8e8e8;
  margin: 0 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
}

.control-btn > div:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.control-btn > div i {
  font-size: 20px;
  color: #666666;
}

/*设置右部样式*/
.right-content {
  border:1px solid #42b983;
  width: 300px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  margin: 20px 0 0 20px;
}

.right-content div.song-name {
  font-size: 20px;
}
.fm-msg{
 display: flex;
  margin: 10px 0 0 0;
  justify-content: space-between;
}
.album,.artist{
  font-size: 12px;
  color: #666666;
}
.album +span,.artist +span{
  font-size: 12px;
  color: #507daf;
}
</style>
