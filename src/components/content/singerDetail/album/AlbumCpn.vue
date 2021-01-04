<!--专辑组件-->
<template>
    <div class="album-cpn">
        <div class="img-container">
            <slot name="album-img"></slot>
        </div>
        <ul class="title-outer">
            <li class="head-title">
                <div class="albumName">{{albumName}}</div>
                <i class="iconfont icon-play4"></i> |<i class="iconfont icon-jiarushoucang"></i>
            </li>
            <song-list-cpn :song-list="songs"/>
        </ul>

    </div>
</template>

<script>
    import SongListCpn from "../songList/SongListCpn";
    export default {
        name: "AlbumCpn",
        components: {SongListCpn},
        props:{
            /*专辑名称*/
            albumName:{
                type:String,
                default()
                {
                    return '热门50首'
                }
            },
            /*专辑歌曲列表*/
            songs:{
                type:Array,
                default()
                {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .album-cpn
    {
        display: flex;
    }
    .head-title
    {
        display: flex;
        margin: 0 0 15px 0;
        line-height: 16px;
    }
    .img-container
    {
        margin: 0 60px 0 0;
    }
    .img-container img
    {
        width: 148px;
        border-radius: 8px;
        border: 1px solid rgba(153,153,153,.4);
    }
    .albumName
    {
        font-size: 16px;
        font-weight: bolder;
        margin: 0 20px 0 0 ;
    }
    .head-title i
    {
        display: inline-block;
        color:#666666 ;
        font-size: 16px;
        margin: 0 10px;
        line-height: 16px;
    }
</style>