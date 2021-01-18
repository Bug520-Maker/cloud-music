<!--为所有列表item封装cpn-->
<template>
    <div :style="{display:isFlex}">
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
</style>