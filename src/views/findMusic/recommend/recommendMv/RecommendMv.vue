<template>
    <div>
        <p class="rec-title" @click="recMvClick">推荐MV > </p>
        <ul class="recommend-mv">
            <li v-for="(item,index) in recMv" :key="index">
                <div class="recImg"><img :src="item.picUrl" /></div>
                <div class="rec-name">{{item.name}}</div>
                <div class="rec-artist">
                    {{item.artistName}}
                </div>
                <div class="tip">{{item.copywriter}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {recommendMv} from "../../../../network/recommend/recommendMv";

    export default {
        name: "RecommendMv",
        data()
        {
            return {
                recMv:[],/*推荐mv*/
            }
        },
        created() {
            recommendMv().then(data=>{
                console.log(data.result);
                this.recMv=data.result
            })
        },
        methods:{
            /*推荐mv*/
            recMvClick()
            {
                this.$router.push('/vision/mv');
            },
        }
    }
</script>

<style scoped>
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    .rec-title + .recommend-mv
    {
        display: flex;
        overflow: hidden;
    }
    .rec-title + .recommend-mv li
    {
        margin: 0 15px 0 0;
        position: relative;
    }
    .rec-title + .recommend-mv .recImg img
    {
        width: 240px;
        border-radius: 8px;
    }
    .rec-title + .recommend-mv li .rec-name
    {
        font-size: 14px;
        margin: 5px 0;
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .rec-title + .recommend-mv li .rec-artist
    {
        font-size: 13px;
    }
    .rec-title + .recommend-mv li .tip
    {
        position: absolute;
        color: #ffffff;
        left: 0;
        font-size: 12px;
        background-color:rgba(0,0,0,.3);
        padding: 10px 5px;
        width:230px;
        transition: width 0.3s;
        top: 0;
        display: none;
    }
    .rec-title + .recommend-mv li:hover .tip
    {
        display: block;
    }
</style>