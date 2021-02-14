<template>
  <transition name="toast">
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
name: "Toast",
  data()
  {
    return{
      message:'',
      isShow:false,
    }
  },
  methods:{
    show(msg='暂无文字',duration=2000)
    {
      this.message=msg;
      this.isShow=true;
      setTimeout(()=>{
        this.isShow=false
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    padding: 20px 30px;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    color: #fff;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    font-family: "微软雅黑";
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
  }
  .toast-enter{
    opacity: 0;
  }
  .toast-enter-active{
    opacity: 0;
  }
  .toast-enter-to{
    transition: all 1s;
    opacity: 1;
  }
  /*离开*/
  .toast-leave{
    opacity: 1;
  }
  .toast-leave-active{
    opacity: 1;
  }
  .toast-leave-to{
    opacity: 0;
    transition: all 1s;
  }
</style>