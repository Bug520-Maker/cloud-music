<template>
   <div id="home">
       <Header/>
       <side-bar/>
       <play-coin></play-coin>
       <!--左侧导航栏路由视图-->
       <div class="sidebar-router-view clearfix">
         <router-view></router-view>
       </div>
   </div>
</template>

<script>
    import playCoin from "../components/content/playCoin/playCoin";

    import Header from "./Header";
    import SideBar from "./SideBar";
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
    #home .sidebar-router-view
    {
      position: absolute;
      width: 820px;
      height:536px;
      top: 60px;
      left: 201px;
      /*background-color: #42b983;*/
      overflow-y: scroll;
    }
    #home .sidebar-router-view::-webkit-scrollbar{
      width: 2px;
    }
</style>