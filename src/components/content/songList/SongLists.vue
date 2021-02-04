<!--为所有歌曲列表封装一个组件-->
<template>
    <div id="song-list">
        <ul>
            <li v-for="(item,index) in songLists">
               <span class="song-index">{{index>8?index+1:'0'+(index+1)}}</span>
                <i class="iconfont icon-love love" ></i>
                <i class="iconfont icon-download down" ></i>
                <div class="songName" @dblclick="playSong(index)">{{item.name }}  <span>{{item.alias[0]}}</span></div>
                <div class="singerName" @click="singerDetail(item,index)">{{item.artists[0].name}}</div>
                <div class="albumName">{{item.album.name}}</div>
                <div class="duartion">{{duration(item.duration)}}</div>
                <div v-show="isShowHot" class="hotStatus"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {formatDt} from "@/utils/format/format";

    export default {
        name: "SongLists",
        props:{
            songLists:{
                type:Array,
                default()
                {
                    return []
                }
            },
            isShowHot:{
              type:Boolean,
              default:true
            }
        },
        data()
        {
            return {
                songUrl:'',
                songId:''
            }
        },
        methods:{
            playSong(index)
            {
                /*向PlayCoin发送歌曲的URL*/
                this.songId=this.songLists[index].id;
                this.$store.dispatch({
                  type:'getMusicUrl',
                   songId:this.songId
                })
                /*向专辑发送封面*/
                this.$store.dispatch({
                  type:'getMusicAlbum',
                  albumId:this.songLists[index].album.id
                })
               /*搜索结果中的单曲详细信息(一首歌)*/
                this.$store.commit({
                    type:'getSingleInfo',
                    details:this.songLists[index]
                })
              console.log(this.songLists[index]);
            },
            duration(item)
            {
                return formatDt(item);
            },


            /*歌手详情*/
          singerDetail(item,index)
          {
              /*路由至歌手详情页*/
              this.$router.push({
                path:'/singerDetails',
                query:{
                  artistId:this.songLists[index].artists[0].id
                }
              })
          }
        },
    }
</script>

<style scoped>
    @import "../../../assets/font/163.music_font/iconfont.css";
    #song-list
    {
      width: 730px;
      margin: 8px 0 0 0;
    }
    #song-list ul li
    {
        display: flex;
        padding: 6px 0 6px 20px;
        font-size: 12px;
    }
    #song-list ul
    {
        margin: 2px 0 0 0;
        width: 100%;
    }
    .song-index
    {
      margin: 0 20px 0 10px;
      color: #cfcfcf;
    }
    #song-list ul li div
    {
        flex:1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    #song-list ul li div:nth-child(1) span
    {
        color: rgb(136, 150, 150);
        margin: 0 0 0 5px;
    }
    #song-list ul li div:nth-of-type(1)
    {
        flex-grow: 1;
    }
    #song-list ul li div:nth-of-type(2)
    {
        flex-grow: 0.5;
    }
    #song-list ul li div:nth-of-type(3)
    {
        flex-grow: 0.5;
    }
    #song-list ul li div:nth-of-type(4)
    {
        flex-grow: 0.2;
        text-align: left;
    }
    #song-list ul li div:nth-of-type(5)
    {
        flex-grow: 0.5;
        background-color: #f2f2f2;
    }

    #song-list ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .singerName,.albumName
    {
        color:#616162;
    }
    .songName
    {
        color: rgb(80, 145, 202);
        cursor: pointer;
    }
    .singerName:hover
    {
      color: #343434;
      cursor: pointer;
    }
    /*设置图标字体样式*/
    .love,.down
    {
        color: rgb(136, 150, 150);
        cursor: pointer;
    }
    .down
    {
        font-size: 14px;
        margin: 0 10px;
    }
    .duartion
    {
      color: #9f9f9f;
    }
    #song-list ul li:hover
    {
      background-color: #f0f1f2;
    }
    /*热度*/
    .hotStatus
    {
      height:7px;
      border-radius: 5px;
    }
</style>