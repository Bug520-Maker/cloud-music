<!--登录二维码-->
<template>
 <div class="login" >
   <i class="iconfont icon-cha" @click="exitClick" title="关闭窗口"></i>
   <div class="scan-login" v-show="isDisplay"><!--扫码登录-->
     <p class="code-login">扫码登录</p>
     <div class="login-window" @mouseover="loginOver" @mouseleave="loginLeave">
       <div class="scan" :class="{active:isMove}">
         <img src="../../../assets/img/login/loginMobile.png" />
       </div>
       <div class="qr-code" :class="{live:isMove}">
         <img src="../../../assets/img/login/code.png"/>
         <span>使用
        <a href="https://music.163.com/#/download">网易云音乐APP</a>
        扫码登录
      </span>
       </div>
     </div>
     <p class="moreModel" @click="pClick">选择其它登录模式 ></p>
   </div>
   <more-mode v-show="!isDisplay" @safeClick="moreClick" @login-correct="exitClick"/>
 </div>
</template>

<script>
import MoreMode from "@/components/content/login/MoreMode";
export default {
  name: "Login",
  components: {MoreMode},
  data()
  {
    return {
      isMove:false,/*鼠标是否移入二维码*/
      isDisplay:true,/*是否显示扫码登录*/
    }
  },
  methods:{
    loginOver()/*鼠标移入扫码登陆和二维码*/
    {
      this.isMove=true;
    },
    loginLeave()/*鼠标离开 扫码登陆和二维码*/
    {
      this.isMove=false;
    },
    exitClick()
    {
      this.$emit('exit');
    },
    pClick()/*选择更多登录模式文字点击*/
    {
      this.isDisplay=false
    },
    moreClick()/*扫码登陆更安全*/
    {
      this.isDisplay=!this.isDisplay;
    },
  }
}
</script>

<style scoped>
/*整个登录组件*/
.login {
  position: absolute;
  top: 35px;
  left: -150px;
  width: 349px;
  height: 530px;
  background-color: #ffffff;
  z-index: 9999999;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  transform: scale(0);
  transition: all 0.4s;
  transform-origin: center top;
  opacity: 0;
}

.login i {
  color: #9f9f9f;
  margin: 320px;
  font-size: 20px;
}

/*扫码登录*/
.login-window {
  display: flex;
  margin: 30px 30px 40px;
  justify-content: space-between;
}

/*扫码图片*/
.scan img {
  width: 132px;
}

/*二维码图片*/
.qr-code img {
  width: 124px;
  transform: scale(0.95);
  transition: transform 0.5s;
}

/*二维码图片容器*/
.qr-code {
  width: 124px;
  text-align: center;
  margin-top: 30px;
  transition: transform 0.6s;
}

.qr-code span {
  font-size: 14px;
}

a {
  color: #0c73c2;
}

/*扫一扫登录容器*/
.scan {
  transition: transform 0.6s, opacity 0.8s;
}

.scan.active {
  transform: translateX(52%);
  opacity: 0;
}

.qr-code.live {
  transform: translateX(-40%);
}

.qr-code.live {
  text-align: center;
  width: 170px;
}

.qr-code.live img {
  width: 170px;
  transform: scale(1);
}

/*扫码登录文字*/
.code-login {
  font-size: 26px;
  width: 105px;
  margin: 50px auto 0;
  color: #333333;
}
.scan-login
{
  position: relative;
}
/*其它登录模式*/
.moreModel {
  font-size: 12px;
  width: 120px;
  position: absolute;
  color: #666666;
  cursor: pointer;
  transform: translateX(-50%);
  left:50%;
  top: 360px;
}
</style>