<template>
    <div>
        <p class="rec-title" @click="newMusicRoute">最新音乐
          <i class="iconfont icon-arrow-right1"></i>
        </p>
        <ul class="new-song-list">
            <li v-for="(item,index) in newSong" :key="index">
                <div class="imgcoin" @click="playSong(item,index)">
                    <img :src="item.picUrl+'?param=48y48'"  />
                    <div class="play">
                        <i class="iconfont icon-play3"></i>
                    </div>
                </div>
                <div>
                    <p class="songName">
                      {{item.name}}
                      <span v-show="item.song.alias.length>0">({{item.song.alias[0]}})</span>
                    </p>
                    <p class="name" @click="artistRoute(item.song)">{{toString(item.song.artists)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {latestalbum} from "@/network/recommend/latestalbum";
    import {musicUrl} from "@/network/public/musicUrl";

    export default {
        name: "NewMusic",
        data()
        {
          return {
              newSong: [],/*最新歌曲*/
              songUrl:""
          }
        },
        created() {
            latestalbum().then(data => {
                //console.log(data.result);
                this.newSong = data.result;
            });
        },
        methods:{
            playSong(item,index)
            {
                musicUrl(item.id).then(res=>{
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl,
                        songId:this.songId
                    })
                })
                this.$store.commit({
                    type:'getAlbumImg',
                    albumImgUrl:item.picUrl
                })
                this.$store.commit({
                    type:'getSingleInfo',
                    details:item.song
                })
            },
            toString(artists)
            {
              let names=[]
              for(let item of artists)
              {
                names.push(item.name);
              }
              return names.join('/')
            },
          newMusicRoute()
          {
            this.$router.push('/findMusic/newMusic');
          },
          artistRoute(item)
          {
            /*路由至歌手详情页*/
            this.$router.push({
              path: '/singerDetails',
              query: {
                artistId:item.artists[0].id/*当前歌手ID*/
              }
            })

          }
        }
    }
</script>

<style scoped>
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    /***************最新音乐*****************************/
    .new-song-list
    {
        display: flex;
        flex-wrap: wrap;
    }
    .new-song-list li
    {
        display: flex;
        font-size: 12px;
        width: 240px;
        margin: 0 5px 15px 0;
    }
    .new-song-list li:hover
    {
        background-color:rgb(234, 234, 234);
        border-radius:5px ;
    }
    .new-song-list li img
    {
        width: 48px;
        border-radius:5px ;
        border: 1px solid rgba(153,153,153,.5);
    }
    .imgcoin
    {
        margin: 0 10px 0 0;
        position: relative;
    }
    .play
    {
        width:25px;
        height: 25px;
        background-color: #ffffff;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
    }
    .play i
    {
        color: rgb(221, 0, 27);
    }
    .new-song-list li .name
    {
        width: 170px;
        color: rgb(153,153,153);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }
    .new-song-list li .name:hover
    {
        color:rgb(140, 137, 135);
    }
    .songName
    {
      white-space: nowrap;
      width: 170px;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
      margin: 5px 0 5px 0;
    }
    .songName span{
      color: #929292;
    }
</style>