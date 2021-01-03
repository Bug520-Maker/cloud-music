<template>
    <div class="all-mv">
        <span>地区</span>
        <list :list="['全部','内地','港台','欧美','韩国','日本']"></list>
        <span>类型</span>
        <list :list="['全部','官方版','原声','现场版','网易出品']"></list>
        <span>排序</span>
        <list :list="['上升最快','最热','最新']"></list>
    </div>
</template>

<script>
    import List from "../../../../components/common/list/List";
    export default {
        name: "AllMv",
        components:{
            List
        }
    }
</script>

<style scoped>

</style>