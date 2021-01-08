<!--热播MV-->
<template>
    <div class="hot-mv">
        <div class="title" @click="divClick">热播MV <i class="iconfont icon-arrow-right1"></i></div>
        <child-cpn :mv-list="hotMv"/>
    </div>
</template>

<script>
    import ChildCpn from "../childCpn/ChildCpn";
    import {allMv} from "../../../../network/vision/mv/mvList";
    export default {
        name: "HotMV",
        components: {ChildCpn},
        data()
        {
           return {
               hotMv:[]
           }
        },
        created() {
            allMv('全部','全部','上升最快',6).then(res=>{
                //console.log(res.data);
                this.hotMv=res.data;
            })
        },
      methods:{
        divClick()
        {
          this.$router.push({
            path:'/allMv',
            query:{
              area:'全部',
              type:'全部',
              sort:'最热'
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