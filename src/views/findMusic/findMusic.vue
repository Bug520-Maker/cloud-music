<!--发现音乐-->
<template>
    <div class="find-music">
        <find-item :path="['recommend','songSheet','radion','rankingList','singer','newMusic']" :list="['个性推荐','歌单','主播电台','排行榜','歌手','最新音乐']"></find-item>
    </div>
</template>
<script>
    import FindItem from "./findItem";
    export default {
        name: "findMusic",
        components: {
            FindItem,
        }
    }
</script>

<style scoped>
    .find-music
    {
        width: 760px;
        height:495px ;
        padding: 20px 30px;
    }
    .myList
    {
        display: flex !important;
    }
</style>