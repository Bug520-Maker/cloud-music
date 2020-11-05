<template>
    <div class="shipin">
        <ul>
            <li v-for="(item,index) in this.$store.state.searchList.playlists" :key="index">
                <div>
                    <img :src="item.coverImgUrl" />
                </div>
                <div>
                    {{item.name}}
                </div>
                <div>
                    {{item.trackCount}}首
                </div>
                <div>
                    by {{item.creator.nickname}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "shipin"
    }
</script>

<style scoped>
    .shipin ul li
    {
        display: flex;
        padding: 5px 0 5px 30px;
        font-size: 14px;
    }
    .shipin ul img
    {
        width: 60px;
        border-radius: 5px;
        border: 1px solid rgb(226, 230, 236);
    }
    .shipin ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .shipin ul li:hover
    {
        background-color:rgb(240, 241, 242);
    }
    .shipin ul li div:nth-child(1)
    {
        margin: 0 30px 0 0;
    }
    .shipin ul li div:not(:nth-child(1))
    {
        width: 200px;
    }
    .shipin ul li div:nth-child(2)
    {
        font-size: 14px;
    }
    .shipin ul li div:nth-child(4),.shipin ul li div:nth-child(3)
    {
        font-size: 12px;
        color: rgb(103,103,103);
        line-height: 60px;
    }
</style>