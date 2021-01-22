<template>
   <div id="home">
       <Header/>
       <side-bar/>
       <play-coin></play-coin>
       <!--左侧导航栏路由视图-->
       <div id="sidebar-router-view">
           <router-view></router-view>
       </div>
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
    #home
    {
      position: relative;
    }
    #sidebar-router-view
    {
      position: absolute;
      width: 820px;
      height:536px;
      top: 60px;
      left: 201px;
    }
</style>