<template>
    <div class="singer-details">
        <div class="banner-header">
            <div>
                <img :src="singerBaseMsg.picUrl" />
            </div>
            <ul>
                <li>{{singerBaseMsg.singerName}}</li>
                <li></li>
                <li>
                    <span>单曲数：{{singerBaseMsg.musicSize}}</span>
                    <span>专辑数：{{singerBaseMsg.albumSize}}</span>
                </li>
            </ul>
        </div>
        <div class="body-content">
            <ul class="nav-list">
                <li v-for="(item,index) in navList" :key="index" :class="{active:index==currentIndex}" @click="liCLick(index)">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingerDetai",
        data()
        {
            return {
                singerBaseMsg:{},
                navList:['专辑','mv','歌手详情','相似歌手'],
                currentIndex:0
            }
        },
        created() {
            this.singerBaseMsg=this.$route.query.singermsg;
            console.log(this.singerBaseMsg)
        },
        methods:{
            liCLick(index)
            {
                this.currentIndex=index;
            }
        }
    }
</script>

<style scoped>
    .singer-details
    {
        padding: 20px 0 0 20px;
    }
    .banner-header div:nth-of-type(1) img
    {
        width: 184px;
        border-radius: 10px;
    }
    .banner-header
    {
        display: flex;
    }
    .banner-header ul
    {
        margin: 0 0 0 30px;
    }
    .banner-header ul li:nth-of-type(3) span
    {
        font-size: 14px;
        margin: 0 20px 0 0;
    }
    .banner-header ul li:nth-of-type(1)
    {
        font-size: 22px;
        font-weight: 700;
    }
    .body-content
    {
        margin: 20px 0 0 0;
    }
    .body-content ul
    {
        display: flex;
    }
    .body-content ul li
    {
        font-size: 14px;
        color: rgb(0, 0, 0);
        margin: 0 20px 0 0;
        cursor: pointer;
        padding-bottom: 3px;
    }
    .body-content ul .active
    {
        font-weight: 700;
        border-bottom: 3px solid rgb(236, 65, 65);
    }
</style>