<template>
    <div class="search-result clearfix">
        <div class="single-title">
            <div>音乐标题</div>
            <div>歌手</div>
            <div>专辑</div>
            <div>时长</div>
            <div>热度</div>
        </div>
        <song-lists :songLists="this.$store.state.searchList.songs"  v-loading="this.$store.state.loading"
                    element-loading-text="载入中..."
                    element-loading-spinner="el-icon-loading"></song-lists><!--提取搜索结果中的歌曲列表-->
    </div>
</template>

<script>
    import SongLists from "../../songList/SongLists";

    export default {
        name: "Single",
        components: {
            SongLists
        },
    }
</script>

<style scoped>
    .single-title/*显示音乐标题 ，歌手 ，专辑，时长*/
    {
        display: flex;
        width: 730px;
        position: absolute;
        top: 113px ;
        left: 0;
        padding: 0 0px 10px 68px;
    }
    .single-title div
    {
        text-align:left;
        color: rgb(136, 150, 150);
        font-size: 13px;
    }
    .single-title div:nth-child(1)
    {
        width: 34%;
    }
    .single-title div:nth-child(2)
    {

       width:16%;
    }
    .single-title div:nth-child(3)
    {

      width: 17%;
    }
    .single-title div:nth-child(4)
    {
      width: 7%;
    }
    .search-result
    {
        float: left;
        margin: 30px 0 0 0;
        width: 100%;
    }
</style>