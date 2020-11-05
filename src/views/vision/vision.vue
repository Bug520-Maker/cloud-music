<!--视频-->
<template>
    <div class="vision">
        <child-cpn :list="['视频','MV']" :path="['vis','mv']"></child-cpn>
    </div>
</template>

<script>
    import childCpn from "./childCpn/childCpn";
    export default {
        name: "vision",
        components:{
            childCpn
        }
    }
</script>

<style scoped>
    .vision {
        width: 820px;
        height: 535px;
    }
</style>