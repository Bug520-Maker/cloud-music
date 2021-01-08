<!--网易出品MV-->
<template>
    <div class="wangyi-mv">
        <div class="title" @click="divClick">网易出品 <i class="iconfont icon-arrow-right1"></i></div>
        <child-cpn :mv-list="wangYi"/>
    </div>
</template>

<script>
    import ChildCpn from "../childCpn/ChildCpn";
    import {wangYiPro} from "../../../../network/vision/mv/mvList";
    export default {
        name: "WangYiPro",
        components: {ChildCpn},
        data()
        {
            return {
                wangYi:[]
            }
        },
        created() {
            wangYiPro(6).then(res=>{
                //console.log(res.data);
                this.wangYi=res.data;
            })
        },
      methods:{
        divClick()
        {
          this.$router.push({
            path:'/allMv',
            query:{
              area:'全部',
              type:'网易出品',
              sort:'最新'
            }
          })
        }
      }
    }
</script>

<style scoped>
    .title
    {
        width: 102px;
        height: 28px;
        font-size: 16px;
        line-height: 28px;
        font-weight: bold;
        margin: 0 0 20px 0;
        cursor: pointer;
    }
    .title i
    {
      color: #666666;
      font-size:14px ;
    }
</style>