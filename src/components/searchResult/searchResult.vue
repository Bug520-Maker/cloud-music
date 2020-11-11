<template>
    <div class="container">
        <p class="find">找到{{$store.state.songCount}}首歌曲</p>
        <children-cpn :list="['单曲','歌手','专辑','视频','歌单','歌词','主播电台','用户']" :path="['/danqu','/geshou','/zhuanji','/shipin','/gedan','/geci','/zhubodiant','/yonghu']"></children-cpn>
    </div>
</template>

<script>
    import childrenCpn from "./childrenCpn/childrenCpn";
    export default {
        name: "searchResult",
        components:{
           childrenCpn
        }
    }
</script>

<style scoped>
    .container
    {
        height: 552px;
        width: 820px;
        background-color:transparent;
        overflow: scroll;
    }
    .container::-webkit-scrollbar
    {
        width: 1px;
    }
    .find
    {
        margin: 30px 0 10px 30px;
    }
</style>
<!--
{{$store.state.keywords}}
        {{$store.state.songCount}}
-->