<template>
    <div class="body-content">
        <ul>
            <li v-for="(item,index) in this.$store.state.singerLists" :key="index" @click="liClick(index)">
                <div><img :src="item.img1v1Url" /></div>
                <div>
                    {{item.name}}
                </div>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "BodyContent",
        methods:{
            liClick(index)
            {
                let msg={
                    singerId:this.$store.state.singerLists[index].id,
                    singerName:this.$store.state.singerLists[index].name,
                    albumSize:this.$store.state.singerLists[index].albumSize,
                    musicSize:this.$store.state.singerLists[index].musicSize,
                    picUrl:this.$store.state.singerLists[index].img1v1Url
                }
                this.$router.push({
                    path:"/singerDetails",
                    query:{
                        singermsg:msg
                    }
                });
            }
        }
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