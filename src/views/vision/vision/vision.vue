<template>
    <div class="vis">
        <div class="head">
            <div class="title">{{title}} > </div>
           <vis-child-cpn :list="['现场','翻唱','舞蹈','听BGM','MV','生活','游戏','ACG音乐','最佳饭制']" :path="['xianchang','fanchang','dance','bgm','visMv','life','game','acg','bestfan']" @item-click="cpnClick"></vis-child-cpn>
        </div>
    </div>
</template>

<script>
    import VisChildCpn from "./visChildCpn/visChildCpn";
    export default {
        name: "vision",
        components: {
            VisChildCpn
        },
        data()
        {
            return {title:'现场'}
        },
        methods:{
            cpnClick(item)
            {
                this.title=item;
            }
        }
    }
</script>

<style scoped>
    .head
    {
        display:flex;
        justify-content: space-between;
    }
    .head .title
    {
        width: 102px;
        height: 28px;
        font-size: 16px;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 20px;
        text-align: center;
        line-height: 28px;
    }
</style>