<template>
    <div class="mv"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
        <div class="head">
          <div class="title" @click="divClick">最新MV <i class="iconfont icon-arrow-right1"></i> </div>
            <mvchild-cpn :list="mvArea" @titleClick="newMV"></mvchild-cpn>
        </div>
        <new-mv :newMv="newMv"></new-mv>
        <HotMV></HotMV><!--热播MV-->
        <wang-yi-pro></wang-yi-pro><!--网易出品-->
        <div class="mv-rank">
          <div class="title">
            <span>mv排行榜</span>
            <i class="iconfont icon-arrow-right1"></i>
          </div>
          <mv-rank/>
        </div>
    </div>
</template>

<script>
   import mvchildCpn from "./mvchildCpn";
   import HotMV from "./hotMv/HotMV";
   import NewMv from "./newMv/NewMv";
   import WangYiPro from "./wangYiPro/WangYiPro";
   import {rand} from "@/utils/format/format";
   import MvRank from "@/views/vision/mv/mvRank/MvRank";

   export default {
        name: "mv",
        components: {
          MvRank,
            WangYiPro,
            NewMv,
            HotMV,
            mvchildCpn
        },
        data()
        {
            return {
              newMv:[],
              mvArea:['内地','港台','欧美','日本','韩国']
            }
        },
        methods:{
            newMV(newmv)
            {
                this.newMv=newmv;
            },
            divClick()
            {
                let index=(rand(0, 4));
                let area=this.mvArea[index];
                this.$router.push({
                  path:'/allMv',
                  query:{
                      area:area,
                      type:'全部',
                      sort:'最新'
                  }
                });
            }
        }
    }
</script>

<style scoped>
    .mv
    {
        height: 470px;
        overflow-y: scroll;
    }
    .mv::-webkit-scrollbar
    {
        width: 2px;
    }
    .head
    {
        display:flex;
        justify-content: space-between;
        margin: 0 0 20px 0;
    }
   .title
  {
      width: 102px;
      height: 28px;
      font-size: 16px;
      line-height: 28px;
       font-weight: bold;
     cursor:pointer;
  }
   .title i
   {
     color: #666666;
     font-size:14px ;
   }
</style>