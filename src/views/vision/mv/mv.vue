<template>
    <div class="mv">
        <div class="head">
            <div class="title" @click="divClick">最新MV > </div>
            <mvchild-cpn :list="['内地','港台','欧美','日本','韩国']" @titleClick="newMV"></mvchild-cpn>
        </div>
        <new-mv :newMv="newMv"></new-mv>
        <HotMV></HotMV><!--热播MV-->
        <wang-yi-pro></wang-yi-pro><!--网易出品-->
    </div>
</template>

<script>
   import mvchildCpn from "./mvchildCpn";
   import HotMV from "./hotMv/HotMV";
   import NewMv from "./newMv/NewMv";
   import WangYiPro from "./wangYiPro/WangYiPro";
    export default {
        name: "mv",
        components: {
            WangYiPro,
            NewMv,
            HotMV,
            mvchildCpn
        },
        data()
        {
            return {
                newMv:[]
            }
        },
        methods:{
            newMV(newmv)
            {
                this.newMv=newmv;
            },
            divClick()
            {
                this.$router.push('/allMv');
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
  }
</style>