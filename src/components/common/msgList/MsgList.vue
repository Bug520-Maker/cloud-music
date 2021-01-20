<!--为所有列表item封装cpn-->
<template>
    <div :style="{display:isFlex}" id="msg-list">
        <div class="item">
            <!--图片-->
            <div class="img-container">
                <slot name="imgContainer"></slot>
            </div>
            <!--时长-->
            <div class="duration" :style="{top:durationXY.y,left:durationXY.x}">
                <slot name="duration"></slot>
            </div>
            <!--playCount-->
            <div class="playCount" :style="{left:playCountL}">
                <i class="iconfont icon-play2" v-show="isShow"></i>
                <slot name="playCount"></slot>
            </div>
          <div class="play" v-show="showPlay.show"
               :style="{width:showPlay.width,height:showPlay.height,lineHeight:showPlay.height}">
            <slot name="playIcon">
              <i class="iconfont icon-play3"></i>
            </slot>
          </div>
        </div>
        <div>
          <!--描述-->
          <div class="state">
            <slot name="state"></slot>
          </div>
          <!--作者-->
          <div class="creator">
            <slot name="creator"></slot>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsgList",
        props:{
            path:{
                type:String,
                default() {
                    return '';
                }
            },
            isFlex:{
              type:String,
              default:''
            },
          durationXY:{
              type:Object,
              default()
              {
                return {
                    y:'60%',
                    x:'60%'
                }
              }
          },
          playCountL:{
              type:String,
              default:'60%'
          },
          isShow:{
              type:Boolean,
              default:true
          },
          showPlay:{
              type:Object,
              default()
              {
                return {
                  show:false,
                  width:'30px',
                  height:'30px',
                }
              }
          }
        },
        divClick(index)
        {
            this.$router.push({
                path:this.path[index]
            })
        }
    }
</script>
<style scoped>

    .img-container img
    {
        border-radius: 7px;
        border: 1px solid rgba(153,153,153,.4);
    }
    .state
    {
        font-size: 14px;
    }
    .item
    {
        position: relative;
    }
    .duration
    {
        position: absolute;
        font-size: 13px;
        color: #ffffff;
    }
    .playCount
    {
        color: #ffffff;
        font-size: 12px;
        position: absolute;
        display: flex;
        top: 3%;
    }
    .play
    {
      position: absolute;
      left: 65%;
      top:62%;
      background-color:#ffffff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      opacity: 0;
      transition: opacity 1s;
    }
    .play i
    {
      color: #ec4141;
      font-size: 18px;
    }
    .item:hover .play
    {
      opacity: 1;
    }
</style>