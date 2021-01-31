<!--朋友-->
<template>
    <div class="friend">

      <div class="main-content">
        <router-view/>
        <ul class="dynamic" v-if="!isShowDynamic">
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
        <div v-show="this.$store.state.loginType===0" class="no-dynamic">暂无动态</div>
        <dynamic-msg v-if="isShowDynamic&&flag" @topic-msg="topicRouter"/>
      </div>

      <div class="side">
        <div class="askLogin">
          <img src="../../assets/img/login/loginPC.png" />
          <div class="loginTip">登录网易云音乐。可以享受无线收藏的乐趣，并且无限同步到手机</div>
          <button class="imm-login">立即登录</button>
        </div>
        <!--热门话题-->
        <div class="top-title" v-show="this.$store.state.loginType===1">
          <div>热门话题</div>
          <div class="more" @click="moreClick" v-if="!isShowDynamic">更多 ></div>
        </div>
        <topic :list="top" v-show="this.$store.state.loginType===1" />
      </div>
    </div>
</template>

<script>
    import {hotTopic} from "@/network/friends/hotTopic";
    import Topic from "@/views/friend/topic/Topic";
    import UserDynamic from "@/views/friend/userDynamic/UserDynamic";
    import DynamicMsg from "@/views/friend/dynamicMsg/DynamicMsg";

    export default {
        name: "friend",
      components: {DynamicMsg, UserDynamic, Topic},
      data()
      {
        return {
          top:[],
          isShowDynamic:false,
          flag:true/*参与控制话题列表的显示*/
        }
      },
      created() {
         if(this.$store.state.loginType===1)
         {
           hotTopic().then(data=>{
             //console.log(data.hot);
             this.top=data.hot;
           })
         }
      },
      methods:{
        moreClick()
        {
          this.isShowDynamic=true;
        },
        topicRouter()
        {
          this.flag=false
        }
      }
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
      overflow:auto;
    }
    .main-content::-webkit-scrollbar
    {
      width: 2px;
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
      height: 535px;
      overflow-y: auto;
    }
    .side::-webkit-scrollbar
    {
      width: 2px;
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
    /*暂无动态*/
    .no-dynamic
    {
      font-size: 12px;
      color: #676767;
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%,-50%);
    }
    /*更多热门话题*/
    .top-title
    {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 20px 0 10px 0;
    }
    .more
    {
      color: #676767;
      cursor: pointer;
    }
</style>