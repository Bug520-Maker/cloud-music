<template>
 <div class="list-info">
   <div class="infouter">
     <div class="img-container">
       <slot name="imgContainer"></slot>
       <div class="play" v-show="isPlay">
         <i class="iconfont icon-play3"></i>
       </div>
     </div>
     <div class="msg" :style="{display:isFlex}">
       <div class="state">
         <slot name="state"></slot>
       </div>
       <div class="creator">
         <slot name="creator"></slot>
       </div>
       <div class="time">
         <slot name="time"></slot>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "ListInfo",
  props:{
    isFlex:{
      type:String,
      default:'block'
    },
    isPlay:{
      type:Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.list-info
{
  padding: 5px 0;
}
.infouter
{
  display: flex;
}
  .list-info:hover
  {
    background-color: #f4f4f4;
    cursor: pointer;
  }
  .img-container
  {
    margin: 0 6px 0 0 ;
    position: relative;
  }
  .img-container img
  {
    width: 50px;
    vertical-align: bottom;
  }
  .state
  {
    font-size: 12px;
  }
  .creator{
    font-size: 12px;
    color: #cfcfcf;
  }
  .play
  {
    background-color:rgba(255,255,255,.8);
    position: absolute;
    width:40%;
    height: 40%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    border-radius: 50%;
    line-height:145%;
  }
.play i
{
  color: #ec4141;
}
.msg{
  align-items: center;
}
</style>