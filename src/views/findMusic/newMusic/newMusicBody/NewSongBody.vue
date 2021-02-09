<template>
    <div id="new-song-body">
      <ul class="bannerNav"><!--新歌导航 全部，华语，欧美，韩国，日本-->
        <li v-for="(item,index) in navList" :class="{active:currentIndex===index}" @click="liClick(index)" :key="item">
          {{item}}
        </li>
      </ul>
        <ul class="newsong-list">
            <li v-for="(item,index) in newSongs" :key="index">
                <div class="img-container" @click="imgClick(item)">
                    <img :src="item.album.picUrl" />
                    <div class="play">
                        <div>
                            <i class="iconfont icon-play3"></i>
                        </div>
                    </div>
                </div>
                <div :title="item.name">
                    {{item.name}}
                </div>
                <div>
                    {{item.artists[0].name}}
                </div>
                <div :title="item.album.name" class="text-nowrap">
                    {{item.album.name}}
                </div>
                <div>{{duration(item.duration)}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {newSong} from "@/network/newMusic/newMusic";
    import {musicUrl} from "@/network/public/musicUrl";
    import {formatDt} from "@/utils/format/format";

    export default {
        name: "NewSongBody",
        data()
        {
            return {
                newSong:[],
                songUrl:"",
                songId:'',
                currentIndex:0,
                newSongs:[]
            }
        },
        props:{
          navList:{
              type:Array,
              default() {
              return [];
            }
          }
        },
        methods:{
            duration(item)
            {
                return formatDt(item);
            },
            imgClick(item)
            {
              this.$store.dispatch({
                type:'getMusicUrl',
                songId:item.id
              })
               this.$store.dispatch({
                 type:'getSongDetail',
                 id:item.id
               })
            },
          liClick(index)
          {
            this.currentIndex=index;
            let type=0;
            switch(index)
            {
              case 0:type=0;break;
              case 1:type=7;break;
              case 2:type=96;break;
              case 3:type=16;break;
              case 4:type=8;break;
            }
            newSong(type).then(res=>{
              this.newSongs=res.data.slice(0,40);
              for(let i in this.newSongs)
                this.newSongs[i].album.picUrl+="?param=60y60";
              //console.log(this.newSongs);
            })
          }
        },
      created() {
          this.liClick(0);
      }
    }
</script>

<style scoped>
.bannerNav
{
  display: flex;
  margin: 0 0 20px 0;
}
.bannerNav li
{
  margin: 0 0 0 20px;
  color: rgb(103,103,103);
  font-size: 14px;
  cursor: pointer;
}
.bannerNav .active
{
  font-weight: 700;
  color: #000000;
}
    #new-song-body .newsong-list li
    {
        display: flex;
        padding: 8px 0;
    }
    #new-song-body .newsong-list li:nth-child(odd)
    {
        background-color: rgb(249,249,249);
    }
    #new-song-body .newsong-list li div:nth-of-type(1) img
    {
        width:60px;
        border-radius: 6px;
        cursor: pointer;
    }
   /* #new-song-body .newsong-list li div:nth-child(even)
    {
        background-color: pink;
    }*/
    #new-song-body .newsong-list li div:nth-of-type(2)
    {
        color: rgb(55, 55, 55);
        font-size: 14px;
        width: 260px;
        padding: 0 20px;
        line-height: 60px;
        cursor: default;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    #new-song-body .newsong-list li div:nth-of-type(3)
    {
        font-size: 12px;
        width: 150px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
    }
    #new-song-body .newsong-list li div:nth-of-type(4)
    {
        font-size: 12px;
        width: 200px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
    }
    #new-song-body .newsong-list li div:nth-of-type(5)
    {
        width: 50px;
        font-size: 12px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
    }
    .img-container
    {
        position: relative;
    }
    .img-container .play
    {
        position: absolute;
        width: 25px;
        height:25px;
        background-color: #ffffff;
        top: 17px;
        left: 17px;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
    }
    .play div i
    {
        color:rgb(236, 65, 65);
    }


</style>