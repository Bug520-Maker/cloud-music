<!--设置左侧导航-->
<template>
    <div id="nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "navigate"
    }
</script>

<style scoped>
    #nav
    {
        width: 180px;
        height: 516px;
        border-right: 1px solid rgb(225, 225, 225);
        padding: 10px;
        overflow-y:auto ;
    }
    #nav::-webkit-scrollbar
    {
      width: 2px;
    }
</style>