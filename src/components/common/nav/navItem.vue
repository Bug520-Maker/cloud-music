<!--左侧导航item-->
<template>
    <div class="nav-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "navItem",
    }
</script>

<style scoped>
    .routerView
    {
        position: absolute;
        left: 201px;
        top: 60px;
    }
</style>