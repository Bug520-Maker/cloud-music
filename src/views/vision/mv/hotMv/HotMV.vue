<!--热播MV-->
<template>
    <div class="hot-mv">
        <div class="title">热播MV ></div>
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