<template>
    <div class="search-result clearfix">
        <div class="single-title">
            <div>音乐标题</div>
            <div>歌手</div>
            <div>专辑</div>
            <div>时长</div>
            <div>热度</div>
        </div>
        <song-lists :songLists="this.$store.state.songs"></song-lists>
    </div>
</template>

<script>
    import SongLists from "../../content/SongLists";

    export default {
        name: "danqu",
        components: {
            SongLists
        },
    }
</script>

<style scoped>
    .single-title/*显示音乐标题 ，歌手 ，专辑，时长*/
    {
        display: flex;
        width: 100%;
        position: absolute;
        top: 93px ;
        left: 0;
    }
    .single-title div
    {
        text-align: center;
        color: rgb(136, 150, 150);
        font-size: 13px;
    }
    .single-title div:nth-child(1)
    {
        flex-grow: 1;
    }
    .single-title div:nth-child(2)
    {
        flex-grow: 0.5;
    }
    .single-title div:nth-child(3)
    {
        flex-grow: 0.5;
    }
    .single-title div:nth-child(4)
    {
        flex-grow: 0.1;
    }
    .single-title div:nth-child(5)
    {
        flex-grow: 0.5;
    }
    .search-result
    {
        float: left;
        margin: 30px 0 0 0;
        width: 100%;
    }
</style>