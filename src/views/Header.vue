<template>
    <div id="header">
        <tabbar>
            <tabbar-item class="logo"><!--设置logo-->
                <img src="../assets/img/banner/logo.png" alt="logo" @click="imgClick"/>
            </tabbar-item>
            <tabbar-item class="back"><!--设置回退按钮-->
                <div class="left" @click="leftBack()">
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
                    <li>
                      <div class="user" @click="loginClick">
                        <i class="iconfont icon-user"></i>
                      </div>
                      <span  @click="loginClick">未登录 </span>
                      <i class="iconfont icon-arrow-down arr-down"> </i>
                      <span class="vip"> 开通VIP</span>
                      <!--登录-->
                      <login :class="{active:isShow}" @exit="exitClick"/>
                    </li>
                    <li><i class="iconfont icon-setting-copy-copy" style="font-size: 16px"></i></li>
                    <li><i class="iconfont icon-icon_skin"></i></li>
                    <li><i class="iconfont icon-e-mailletterenvelopepostmail"></i></li>
                    <li><i class="iconfont icon-suofang"></i></li>
                    <li><i class="iconfont icon-mini"></i></li>
                    <li><i class="iconfont icon-zuidahua"></i></li>
                    <li @click="disappear()" ref="dis"><i class="iconfont icon-cha"></i></li>
                </ul>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import tabbar from "../components/common/tabbar/tabbar";              /*tabbar from "./components/tabbar/tabbar";*//*导入头部*/
    import tabbarItem from "../components/common/tabbar/tabbarItem";      //tabbarItem from "./components/tabbar/tabbarItem";/*导入头部Item*/
    import search from "../components/content/search/search";
    import Login from "@/components/content/login/Login";
    export default {
        name: "Header",
        data(){
          return {
            isShow:false
          }
        },
        components:{
          Login,
            tabbar,
            tabbarItem,
            search,
        },
        methods:{
            leftBack()
            {
                history.back();
            },
            imgClick()
            {
                this.$router.push('/findMusic/recommend');
            },
            disappear()
            {
                this.$refs.dis.offsetParent.classList.add('active');
                this.$refs.dis.offsetParent.nextSibling.style.display="block";
            },
            /*点击头像弹出扫码登录*/
            loginClick()
           {
            setTimeout(()=>{
              this.isShow=true;
            },800)
          },
          /*退出登录*/
          exitClick()
          {
            this.isShow=false;
          }
        }
    }
</script>

<style scoped>
.operate li:nth-child(1)
{
  margin: 0 20px 0 0;
  display: flex;
  position: relative;
}
   .operate li:nth-child(1) > div.user
  {

     width: 30px;
     height:30px;
     background-color: #e0e0e0;
     border-radius: 50%;
     text-align: center;
     line-height: 25px;
     margin: 0 8px 0 0;
  }
   .operate li:nth-child(1)>div.user i
   {
     color: #ffffff;
   }
   .operate li:nth-child(1)> span
   {
     font-size: 12px;
     color: #fad5d5;
   }
   .operate li:nth-child(1)>span:hover
   {
      color:#ffffff;
     cursor:pointer;
   }
  .operate li:nth-child(1) i.arr-down
   {
     font-size: 10px;
     display: inline-block;
     margin: 0 3px;
   }
   .vip
   {
     font-size: 12px;
   }
  /*为登录组件加上active*/
  .operate li:nth-child(1) .active
  {
     transform: scale(1);
     opacity: 1;
  }

</style>