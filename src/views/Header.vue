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
                <ul class="operate"><!--相关操作如用户登录，设置，换肤，退出等-->
                    <li>
                      <div class="user" @click="avatarLoginClick"><!--用户头像-->
                        <i class="iconfont icon-user" v-show="this.$store.state.loginType===0"></i>
                        <div class="avatar" v-show="this.$store.state.loginType===1">
                          <img :src="this.$store.state.userMsg.profile.avatarUrl" />
                        </div>
                      </div>
                      <span  @click="nickNameLoginClick">{{nickname}}</span><!--用户nickname-->
                      <i class="iconfont icon-arrow-down arr-down"> </i>
                      <span class="vip"> 开通VIP</span>
                      <!--用户登录成功后小窗-->
                      <profile :class="{active:isLive}" @exit-login="exitLogin"/>
                      <!--登录界面-->
                      <login :class="{active:isShow}" @exit="exitClick"/>
                    </li>
                    <!--设置-->
                    <li>
                      <i class="iconfont icon-setting-copy-copy" style="font-size: 16px"></i>
                    </li>
                    <!--皮肤-->
                    <li>
                      <i class="iconfont icon-icon_skin"></i>
                    </li>
                    <li><i class="iconfont icon-e-mailletterenvelopepostmail"></i></li>
                    <li><i class="iconfont icon-suofang"></i></li>
                    <li><i class="iconfont icon-mini"></i></li>
                    <li><i class="iconfont icon-zuidahua"></i></li>
                    <!--退出整个界面-->
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
    import Profile from "@/components/content/profile/Profile";
    export default {
        name: "Header",
        data(){
          return {
            isShow:false,/*扫码登录界面*/
            nickname:'未登录',
            isLive:false,/*用户登录成功小窗口*/
          }
        },
        components:{
          Profile,
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
            imgClick()/*点击logo回到首页*/
            {
                this.$router.push('/findMusic/recommend');
            },
            disappear()
            {
                this.$refs.dis.offsetParent.classList.add('active');
                this.$refs.dis.offsetParent.nextSibling.style.display="block";
            },
            /*点击昵称弹出扫码登录*/
            nickNameLoginClick()
           {
             if(this.$store.state.loginType===0)/*如果是未登录状态*/
             {
               setTimeout(()=>{/*弹出扫码登录*/
                 this.isShow=true;
               },800)
             }
             else if(this.$store.state.loginType===1)/*如果是登录状态*/
             {
                this.isLive=!this.isLive;/*弹出用户成功登录后的小窗口*/
             }
          },
          /*点击头像*/
          avatarLoginClick()
          {
            if(this.$store.state.loginType===0)/*如果是未登录状态*/
            {
              setTimeout(()=>{/*弹出扫码登录*/
                this.isShow=true;
              },800)
            }
            else if(this.$store.state.loginType===1)/*如果是登录状态*/
            {
              return null;
            }
          },
          /*登录成功后，退出扫码登录界面*/
          exitClick()
          {
            this.isShow=false;
            if(this.$store.state.loginType===1)
            {
              this.nickname=this.$store.state.userMsg.profile.nickname;
            }
          },
          /*退出登录状态 ，用户登陆成功后的小窗口消失*/
          exitLogin()
          {
            this.isLive=false;
            this.nickname='未登录'
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
  /*为扫码登录,用户登录成功后的小窗口组件加上active*/
  .operate li:nth-child(1) .active
  {
     transform: scale(1);
     opacity: 1;
  }
  .avatar
  {
    width: 100%;
    height: 100%;
  }
  .avatar img
  {
    width: 30px;
    border-radius: 50%;
  }
</style>