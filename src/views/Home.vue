<template>
   <div>
       <Header/>
       <side-bar/>
       <play-coin></play-coin>
   </div>
</template>

<script>
    import playCoin from "../components/content/playCoin/playCoin";
    import Header from "./Header";
    import SideBar from "./SideBar";        //playCoin from "./components/playCoin/playCoin";/*导入底部播放容器*/
    export default {
        name: "Home",
        components:
            {
                SideBar,
                Header,
                playCoin,
            }
    }
</script>

<style scoped>
    @import "../assets/font/163.music_font/iconfont.css";
    @import "../assets/css/base.css";
</style>