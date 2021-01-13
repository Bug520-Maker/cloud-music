<template>
    <div class="body-content" v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
        <ul >
            <li v-for="(item,index) in this.$store.state.singerLists" :key="index" @click="liClick(index)">
                <div><img v-lazy="item.img1v1Url+'?param=139y139'" /></div>
                <div>
                    {{item.name}}
                </div>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import {singerMsg} from "@/network/singer/singer";

    export default {
        name: "BodyContent",
        methods:{
            liClick(index)
            {
                let singerId=this.$store.state.singerLists[index].id;
                singerMsg(singerId).then(res=>{
                  this.$router.push({
                    path:"/singerDetails",
                    query:{
                      singerBaseMsg:res.data
                    }
                  });
                })
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