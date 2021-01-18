<template>
    <div class="vis-msg">
      <div class="loginTip" :class="{isShow:this.$store.state.loginType===1}">
        <i class="iconfont icon-yonghuxinxi"></i>
        <span>请先登录</span>
      </div>
      <!--视频内容-->
      <ul class="video-body" v-show="this.$store.state.loginType===1">
        <li v-for="(item,index) in videoMsg" :key="item.data.threadId">
          <msg-list>
            <div slot="imgContainer" class="img-container">
              <img v-lazy="item.data.coverUrl+'?param=243y137.6'" />
            </div>
            <div slot="state" class="state">
              {{item.data.title}}
            </div>
            <div slot="creator" class="creator">
              {{item.data.creator.nickname}}
            </div>
            <div slot="duration">{{duration(item.data.durationms)}}</div>
          </msg-list>
        </li>
      </ul>
    </div>
</template>

<script>
    import MsgList from "../../../components/common/msgList/MsgList";
    import {formatDt} from "@/utils/format/format";

    export default {
        name: "visMsg",
      components: {MsgList},
      props:{
          videoMsg:{
            type:Array,
            default()
            {
              return []
            }
          }
      },
      methods:{
          duration(item)
          {
            return formatDt(item);
          }
      }
    }
</script>

<style scoped>
/*是否显示登录提示*/
  .loginTip
  {
    height:200px;
    width: 200px;
    text-align: center;
    margin: 90px auto 0;
    transform: scale(1);
    transition: all 0.3s;
  }
  .loginTip span
  {
    color: #cbcbcb;
    display: block;
    margin: 10px 0;
  }
  .loginTip i
  {
    font-size:100px;
    color: #efeff0;
  }
  .loginTip.isShow
  {
    transform: scale(0);

  }

  /*具体视频样式*/
    .video-body
    {
      display: flex;
      flex-wrap:wrap ;
      margin: -270px 0 0 0;
      justify-content: space-between;
    }
     .video-body li
     {
       margin: 0 0 15px 0;
     }
    .state
    {
      width: 241px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
      color: #373737;
      margin: 5px 0 5px 0;
    }
  .img-container img
  {
    width: 241px;
  }
  .creator
  {
    font-size: 12px;
    color: #cfcfcf;
  }
</style>