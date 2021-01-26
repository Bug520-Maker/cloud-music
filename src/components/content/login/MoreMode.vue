<!--更多登录模式-->
<template>
  <div class="more-mode">
    <i class="iconfont icon-shouji"></i>
    <div class="mobile">
      <table>
        <tr>
          <td>
            <i class="iconfont icon-9kaobei"></i>
            +86
            <i class="iconfont icon-arrow-down"></i>
          </td>
          <td>
            <input placeholder="请输入手机号" class="mobile-number" v-model="number"/>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <i class="iconfont icon-suo"></i>
            <input placeholder="请输入密码" class="password" v-model="password"/>
            <span class="reset-password">重设密码</span>
          </td>
        </tr>
      </table>
      <div class="auto-login">
        <label for="autoLogin">
          <input type="checkbox" id="autoLogin"/><span > 自动登录</span>
          <span v-show="correct" class="tip-msg">{{tipMsg}}</span>
        </label>
      </div>
      <button id="login" @click="loginClick">登录</button>
      <div class="regist">注册</div>
      <ul>
        <li>
          <i class="iconfont icon-weixin"></i>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
        </li>
        <li>
          <i class="iconfont icon-wangyi"></i>
        </li>
      </ul>
      <div class="agree">
        <input type="checkbox" />
        <span> 同意
          <a href="javascript:;">《服务条款》</a>
          <a href="javascript:;">《隐私政策》</a>
          <a href="javascript:;">《儿童隐私政策》</a>
        </span>
      </div>
    </div>
    <div class="more-safe" @click="divClick">
      <img src="../../../assets/img/login/code.png" />
    </div>
    <div class="more-safe-content" @click="divClick">扫码登陆更安全</div>
  </div>
</template>

<script>
import {userLogin, loginStatus,refreshLogin} from "@/network/login/login";

export default {
  name: "MoreMode",
  data()
  {
    return {
      number:'',
      password:'',
      correct:false,
      tipMsg:''
    }
  },
  methods:{
    divClick()
    {
      this.$emit('safeClick');
    },
    /*登录*/
    loginClick()
    {
      if((this.number!==''&&this.number.trim().length!==0&&this.number!==null)&&(this.password!==''&&this.password.trim().length!==0&&this.password!==null))
      {
        this.correct=false;
        window.sessionStorage.removeItem('userMsg');
        window.sessionStorage.removeItem('loginType');

        userLogin(this.number,this.password).then(data=>{
          console.log(data);
          window.sessionStorage.setItem('userMsg',JSON.stringify(data))
          this.$store.commit({
            type:'userMsg',
            userMsg:JSON.parse(window.sessionStorage.getItem('userMsg'))
          })
          refreshLogin().then(data=>{
            console.log(data);
          })
        })
         /* userLogin(this.number,this.password).then(data=>{
          console.log(data);
            /!*手动设置cookie*!/
          this.$store.commit({
            type:'getLoginCookie',
            cookie:data.cookie
          });
           /!*用户信息*!/
          this.$store.commit({
            type:'userMsg',
            userMsg:data
          })
            /!*保持登录状态*!/
            this.$store.commit({
              type:'setToken',
              data:data.token
            })
          })*/

        /*设置登录状态*/
        window.sessionStorage.setItem('loginType','1')
        this.$store.commit({
          type:'changeLoginType',
          loginType:parseInt(window.sessionStorage.getItem('loginType'))
        })

        this.$emit('login-correct');
      }
      else if(this.number===''||this.number.trim().length===0||this.number===null)
      {
        this.correct=true;
        this.tipMsg='请输入手机号'
      }
      else if(this.password===''||this.password.trim().length===0||this.password===null)
      {
        this.correct=true;
        this.tipMsg='请输入密码'
      }
    }
  },
}
</script>

<style scoped>
  .more-mode
  {
    position: relative;
  }
  .more-safe
  {
    position: absolute;
    top: -25px;
    left: 5px;
  }
  .more-safe img
  {
    width: 40px;
    border-radius: 0 0 40px 0;
    cursor: pointer;
  }
  /*扫码登陆更安全*/
  .more-safe-content
  {
    color: #ffffff;
    background-color: #989898;
    font-size: 12px;
    padding: 0px 10px;
    border-radius: 5px;
    position: absolute;
    top: -15px;
    line-height: 26px;
    left: 40px;
    cursor: pointer;
  }
  /*cha退出*/
  .more-mode > i
  {
    font-size: 70px;
    display: inline-block;
    color: #f29c9f;
    margin: 50px 140px;
  }
  table{
    border: 1px solid #d8d8d8;
    border-collapse: collapse;
    width: 300px;
    margin: 20px auto 0;

  }
  td{
    border: 1px solid #d8d8d8;
    padding: 5px 10px;
  }
  input.mobile-number,.password,.reset-password
  {
    outline: none;
    font-size: 13px;
    color: #a9a9a9;
    margin: 0 0 0 10px;
    border: none;
  }
  table tr:nth-child(1) td:nth-child(1)
  {
    font-size: 14px;
    color: #999999;
  }
  table tr:nth-child(1) td:nth-child(1) i:nth-child(1)
  {
    font-size: 16px;
  }
  table tr:nth-child(1) td:nth-child(1) i:nth-child(2)
  {
    font-size: 10px;
  }
  table tr:nth-child(2) td:nth-child(1)
  {
    color: #999999;
  }
  .reset-password
  {
    margin: 0 0 0 40px;
    cursor: pointer;
  }
  /*自动登录*/
  .auto-login
  {
    margin: 10px 0  0 45px;
  }
  .auto-login span
  {
    display: inline-block;
    margin: -5px 0 0 10px;
    font-size: 13px;
  }
  /*提示信息*/
  .auto-login .tip-msg
  {
    color: #dd001b;
    margin: 0 0 0 120px;
  }
  /*登录按钮*/
  #login
  {
     background-color: #ea4848;
    color: #ffffff;
    width: 260px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    line-height: 36px;
    display: block;
    margin: 0 auto;
  }
  #login:hover
  {
    background-color: #c72e2e;
    cursor:pointer;
  }
  /*注册*/
  .regist
  {
    font-size: 14px;
    width: 32px;
    margin: 20px auto 0;
    text-decoration: underline;
    cursor:pointer;
  }
  /*微信，微博登录*/
  .more-mode ul
  {
    display: flex;
    margin: 10px 45px;
    width: 260px;
    justify-content: space-between;
  }
  .more-mode ul li
  {
     width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #cdcdcd;
    text-align: center;
    line-height: 40px;
  }
  .more-mode ul li:hover{
    background-color: #ea4848;
    cursor: pointer;
  }
  .more-mode ul li:hover i
  {
    background-color: #ea4848;
    color: #ffffff;
  }
  .more-mode ul li i
  {
    font-size: 22px;
    color: #eb4949;
  }
  /*同意政策*/
  .agree
  {
    font-size: 12px;
    margin: 20px 0 0 35px;
  }
  .agree a
  {
    color: #5091ca;
    display: inline-block;
    margin: 0 3px;
  }
</style>