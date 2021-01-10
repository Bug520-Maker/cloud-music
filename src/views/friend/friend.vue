<!--朋友-->
<template>
    <div class="friend">
      <div class="main-content">
        <ul class="dynamic">
          <li>
            动态
          </li>
          <li>
            <button>
              <i class="iconfont icon-jia1"></i>
              写动态
            </button>
          </li>
        </ul>
      </div>
      <div class="side">
        <div class="askLogin">
          <img src="../../assets/img/login/loginPC.png" />
          <div class="loginTip">登录网易云音乐。可以享受无线收藏的乐趣，并且无限同步到手机</div>
          <button class="imm-login">立即登录</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "friend"
    }
</script>

<style scoped>
    .friend {
        width: 820px;
        height: 535px;
        display: flex;
    }
    .main-content
    {
      border-right: 1px solid #e0e0e0;
      width: 585px;
    }
    /*动态*/
    .dynamic
    {
      display: flex;
      justify-content: space-between;
      margin: 30px 20px 0 30px;
    }
    .dynamic:nth-child(1)
    {
      font-size: 18px;
      font-weight: bolder;
    }
    /*写动态按钮*/
    .dynamic:nth-child(1) button
    {
      font-size: 13px;
      color: #ffffff;
      background-color: #ec4141;
      line-height: 23px;
      padding: 0 10px;
      border-radius: 15px;
    }
    /*侧边*/
    .side
    {
      width: 205px;
      padding: 0 15px;
    }
    /*要求登录网易云*/
    .askLogin img
    {
      width: 205px;
      margin-top:5px ;
    }
    .loginTip
    {
      font-size: 12px;
      color: #676767;
      text-align: center;
    }
    /*立即登录按钮*/
    .askLogin .imm-login
    {
      display: block;
      width: 190px;
      margin: 15px auto 0;
      font-size: 15px;
      line-height: 34px;
      color: #ffffff;
      background-color: #ec4141;
      border-radius: 18px;
    }
</style>