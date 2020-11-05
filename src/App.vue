<template>
  <div id="app" ref="app">
      <tabbar>
          <tabbar-item class="logo"><!--设置logo-->
              <img src="./assets/img/banner/logo.png" alt="logo"/>
          </tabbar-item>
          <tabbar-item class="back"><!--设置回退按钮-->
              <div class="left">
                  <i class="iconfont icon-arrow-left"></i>
              </div>
              <div class="right">
                  <i class="iconfont icon-arrow-right"></i>
              </div>
          </tabbar-item>
          <tabbar-item><!--设置搜索框容器-->
              <search></search>
          </tabbar-item>
          <tabbar-item>
              <ul class="operate">
                  <li><i class="iconfont icon-setting-copy-copy"></i></li>
                  <li><i class="iconfont icon-icon_skin"></i></li>
                  <li><i class="iconfont icon-e-mailletterenvelopepostmail"></i></li>
                  <li><i class="iconfont icon-suofang"></i></li>
                  <li><i class="iconfont icon-mini"></i></li>
                  <li><i class="iconfont icon-zuidahua"></i></li>
                  <li><i class="iconfont icon-cha"></i></li>
              </ul>
          </tabbar-item>
      </tabbar>
      <navigate>
          <nav-item><!--设置发现音乐，视频，私人FM等结构-->
              <my-list :list="['发现音乐','视频','朋友','直播','私人FM']" :path="['/findMusic','/vision','/friend','/zhibo','/perFM']"></my-list>
              <router-view class="routerView"></router-view><!--在navItem中设置routerView的位置样式-->
          </nav-item>
      </navigate>
      <play-coin></play-coin>
  </div>
</template>
<script>
   import tabbar from "./components/tabbar/tabbar";/*导入头部*/
   import navigate from "./components/nav/naviagte";/*导入左侧导航条*/
   import playCoin from "./components/playCoin/playCoin";/*导入底部播放容器*/

   import tabbarItem from "./components/tabbar/tabbarItem";/*导入头部Item*/
   import NavItem from "./components/nav/navItem";/*导入左侧导航item*/
   import MyList from "./components/nav/childComponents/myList";/*导入左侧导航子组件*/

   import search from "./components/content/search/search";
   export default{
     name:'app',
     components:
         {
             NavItem,
             tabbar,
             navigate,
             playCoin,
             tabbarItem,
             MyList,
             search,
     },
     mounted() {
         let app=this.$refs.app;
         app.addEventListener("mousemove",function(event){
             event.preventDefault()
         })
     }
   }
</script>
<style>
  @import "./assets/css/base.css";
  #app
  {
    width:1021px;
    height:669px;
    background-color:transparent;
    box-shadow: 0px 5px 15px rgba(0,0,0,.2);
      left:50%;
      top:10px;
      transform: translateX(-50%);
      position:relative;
  }
</style>
