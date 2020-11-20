<template>
    <div class="body-content">
        <ul>
            <li v-for="(item,index) in this.$store.state.singerLists" :key="index">
                <div><img :src="item.img1v1Url" /></div>
                <div>
                    {{item.name}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BodyContent",
    }
</script>

<style scoped>
    .body-content
    {
        margin: 20px 0 0 0;
    }
    .body-content ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .body-content ul li div:nth-of-type(2)
    {
        margin: 5px 0;
        font-family: "微软雅黑";
        font-size: 14px;
    }
    .body-content ul li div:nth-of-type(1) img
    {
        width: 139px;
        border-radius: 8px;
    }
    .body-content ul li
    {
        margin: 0 0  10px 0;
    }
</style>