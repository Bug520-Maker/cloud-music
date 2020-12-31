<!--网易出品MV-->
<template>
    <div class="wangyi-mv">
        <div class="title">网易出品 ></div>
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
                console.log(res.data);
                this.wangYi=res.data;
            })
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
    }
</style>