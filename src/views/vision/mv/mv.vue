<template>
    <div class="mv">
        <div class="head">
            <div class="title">最新MV > </div>
            <mvchild-cpn :list="['内地','港台','欧美','日本','韩国']" :path="['neidi','gangtai','oumei','riben','hanguo']"></mvchild-cpn>
        </div>
    </div>
</template>

<script>
   import mvchildCpn from "./mvchildCpn";
    export default {
        name: "mv",
        components: {
            mvchildCpn
        }
    }
</script>

<style scoped>
    .head
    {
        display:flex;
        justify-content: space-between;
    }
   .title
  {
      width: 102px;
      height: 28px;
      font-size: 14px;
      text-align: center;
      line-height: 28px;
  }
</style>