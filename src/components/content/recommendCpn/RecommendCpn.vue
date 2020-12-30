<template>
    <div class="rec-cpn">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="list">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendCpn"
    }
</script>

<style scoped>
    .rec-cpn .title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
</style>