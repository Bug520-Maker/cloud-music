<!--为所有歌曲列表封装一个组件-->
<template>
    <div id="song-list">
        <ul>
            <li v-for="(item,index) in songLists">
               <span class="song-index">{{index>8?index+1:'0'+(index+1)}}</span>
                <i class="iconfont icon-love love" ></i>
                <i class="iconfont icon-download down" ></i>
                <div class="songName text-nowrap" @dblclick="playSong(index)">{{item.name }}  <span>{{item.alias[0]}}</span></div>
                <div class="singerName text-nowrap" @click="singerDetail(item,index)">{{item.artists[0].name}}</div>
                <div class="albumName text-nowrap">{{item.album.name}}</div>
                <div class="duartion text-nowrap">{{duration(item.duration,'mm:ss')}}</div>
                <div v-show="isShowHot" class="hotStatus text-nowrap"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {formatDate} from "@/utils/format/format";

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
               this.songId=this.songLists[index].id;
                /*歌曲详细信息*/
              this.$store.dispatch({
                type:'getSongDetail',
                id:this.songId
              })
            },
            duration(item,ft)
            {
                return formatDate(item,ft);
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