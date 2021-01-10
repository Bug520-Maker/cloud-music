<!--用户登录成功后小窗信息-->
<template>
  <div class="user-profile">
    <ul class="profile-title">
      <li><!--动态-->
        <span>0</span>
        <div>动态</div>
      </li>
      <!--关注-->
      <li>
        <span>6</span>
        <div>关注</div>
      </li>
      <!--粉丝-->
      <li>
        <span>2</span>
        <div>粉丝</div>
      </li>
    </ul>
    <!--签到-->
    <div class="sign">
      <i class="iconfont icon-qiandao"></i>
      <span> 签到</span>
    </div>
    <!--会员中心，等级，商城-->
    <div class="profile-content">
      <child-cpn>
        <div slot="会员中心-content-icon">
          <i class="iconfont icon-yinlehuiyuan"></i>
        </div>
        <div slot="会员中心-tip">未订购</div>
        <div slot="会员中心-enter">
          <i class="iconfont icon-arrow-r"></i>
        </div>
        <!--等级-->
        <div slot="等级-content-icon">
          <i class="iconfont icon-dengji"></i>
        </div>
        <div slot="等级-tip">Lv.6</div>
        <div slot="等级-enter">
          <i class="iconfont icon-arrow-r"></i>
        </div>
        <!--商城-->
        <div slot="商城-content-icon">
          <i class="iconfont icon-shangcheng"></i>
        </div>
        <div slot="商城-enter">
          <i class="iconfont icon-arrow-r"></i>
        </div>
      </child-cpn>
    </div>
    <!--个人信息设置，绑定社交账号-->
    <div class="per-info">
      <child-cpn :list="['个人信息设置','绑定社交帐号']">
        <!--个人信息设置-->
        <div slot="个人信息设置-content-icon">
          <i class="iconfont icon-yonghuxinxi"></i>
        </div>
        <div slot="个人信息设置-enter">
          <i class="iconfont icon-arrow-r"></i>
        </div>
        <!--绑定社交账号-->
        <div slot="绑定社交帐号-content-icon">
          <i class="iconfont icon-link"></i>
        </div>
        <div slot="绑定社交帐号-tip">
          <i class="iconfont icon-weibo"></i>
        </div>
        <div slot="绑定社交帐号-enter">
          <i class="iconfont icon-arrow-r"></i>
        </div>
      </child-cpn>
    </div>
    <!--exit-login-->
    <div class="exit-login"  @click="exitLogin">
      <child-cpn :list="['退出登录']">
        <div slot="退出登录-content-icon">
          <i class="iconfont icon-tuichu2"></i>
        </div>
      </child-cpn>
    </div>
  </div>
</template>

<script>
import ChildCpn from "@/components/content/profile/childCpn/ChildCpn";
import {logout} from "@/network/login/login";
export default {
name: "Profile",
  components: {ChildCpn},
  methods:{
    exitLogin()/*退出网易云账号*/
    {
     /* logout().then(data=>{
        console.log(data);
      })*/
      this.$store.commit({
        type:'changeLoginType',
        loginType:0
      });
      this.$emit('exit-login');
    }
  }
}
</script>

<style scoped>
  .user-profile
  {
    width: 282px;
    height: 378px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    background-color: #ffffff;
    position:absolute;
    left: -100px;
    top: 45px;
    z-index: 9;
    border-radius: 3px;
    transform: scale(0);
    opacity: 0;
    transition: 0.4s transform,0.8s opacity;
    transform-origin: center top;
  }
  /*动态，关注，粉丝*/
  .profile-title
  {
    display:flex;
    margin: 20px 0;
  }
  .profile-title li
  {
    margin: 0 31px;
    text-align: center;
  }
  .profile-title li div
  {
    font-size: 12px;
    color: #676767;
    line-height: 12px;
  }
  .profile-title li span
  {
    font-size: 18px;
    font-weight: bolder;
  }
  /*签到*/
  .sign
  {
    border:1px solid #d8d8d8;
    width: 54px;
    margin: 0 auto;
    padding:1px 15px;
    border-radius: 18px;
  }
  /*会员中心*/
  .profile-content
  {
    border-top: 1px solid #ededed;
    margin: 20px 0 0 0;
  }
  .per-info,.exit-login
  {
    border-top: 1px solid #ededed;
  }
</style>