<!--专辑歌单列表-->
<template>
    <div class="song-list">
        <ul class="list-outer" ref="listOuter" :style="{height:listHeight}">
            <li v-for="(item,index) in songList" :key="index" ref="li">
                <span class="index">{{index<9? '0'+(index+1) : index+1}} </span>
                <i class="iconfont icon-love"></i>
                <i class="iconfont icon-download"></i>
                <span class="outer">
                     <span class="name" @click="playSong(item,index)">{{item.name}}</span>
                     <span class="alia" v-show="typeof item.alia[0]!='undefined'"> ({{item.alia[0]}})</span>
                </span>
                <span class="dt">{{duration(item.dt)}}</span>
            </li>
        </ul>
        <div class="more" v-show="songList.length>10" @click="moreClick" ref="more">查看全部 ></div>
    </div>
</template>

<script>
    import {formatDt} from "../../../../assets/function/formatDt";
    export default {
        name: "SongListCpn",
        data()
        {
          return {
            listHeight:''
          }
        },
        props:{
            songList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            duration(item)
            {
                return formatDt(item);
            },
            moreClick()
            {
                this.$refs.listOuter.style.overflow='visible';
                this.$refs.more.style.display='none';
                this.listHeight=this.$refs.listOuter.children.length*(this.$refs.listOuter.children[0].offsetHeight)+"px";
            },
            /*播放歌曲*/
          playSong(item,index)
          {
            console.log(item);
            this.$store.dispatch({
              type:'getMusicUrl',
              songId:item.id
            })
            this.$store.dispatch({
              type:'getMusicAlbum',
              albumId:item.al.id
            })
            let tmp={
              name:'',
              alias:[],
              artists:[{name:''}],
              album:{
                name:'',
                id:''
              },
              duration:0
            };
            tmp.name=item.name;
            tmp.alias[0]=item.alia[0];
            tmp.artists[0].name=item.ar[0].name;
            tmp.album.name=item.al.name;
            tmp.album.id=item.al.id;
            tmp.duration=item.dt;
            tmp.id=item.id
            /*搜索结果中的单曲详细信息(一首歌)*/
            this.$store.commit({
              type:'getSingleInfo',
              details:tmp
            })

          }
        },
      mounted() {
         this.$nextTick(()=>{
           this.listHeight='291px';
         })
      }

    }
</script>

<style scoped>
    /*歌曲名称*/
    .name,.alia{
        font-size: 12px;
        line-height: 18px;
    }
    .list-outer
    {
        overflow: hidden;
    }
    .index
    {
        color: #9b9b9b;
        font-size: 12px;
    }
    .outer
    {
        width: 344px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
    }
    .alia
    {
        color: #9b9b9b;
    }
    .song-list ul li
    {
        padding: 3px 10px;
        position: relative;
        width: 480px;
    }
    .song-list ul li:nth-child(odd)
    {
        background-color: #f9f9f9;
    }
    .song-list ul li i
    {
        color: #9b9b9b;
        display: inline-block;
        margin: 0 10px 0 0;
    }
    .song-list ul li:hover
    {
      background-color: #f0f1f2;
      cursor: pointer;
    }
    .dt
    {
        position: absolute;
        left: 445px;
        font-size: 13px;
        color: #9b9b9b;
    }
    .more
    {
        font-size: 13px;
        color: #9b9b9b;
        margin: 0 0 0 420px;
        cursor: pointer;
    }
</style>