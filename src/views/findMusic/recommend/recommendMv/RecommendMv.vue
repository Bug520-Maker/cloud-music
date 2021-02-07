<template>
    <div>
        <p class="rec-title" @click="recMvClick">推荐MV
          <i class="iconfont icon-arrow-right1"></i>
        </p>
        <ul class="recommend-mv">
            <li v-for="(item,index) in recMv" :key="index">
                <div class="recImg" @click="playMv(item,index)">
                    <img :src="item.picUrl+'?param=240y134.88'" />
                </div>
                <div class="rec-name text-nowrap">{{item.name}}</div>
                <div class="rec-artist">
                    {{item.artistName}}
                </div>
                <div class="tip">{{item.copywriter}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {recommendMv} from "@/network/recommend/recommendMv";
    import {mvurl} from "@/network/vision/mv/mvList";

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
               // console.log(data.result.slice(0,3));
                this.recMv=data.result.slice(0,3);
            })
        },
        methods:{
            /*推荐mv*/
            recMvClick()
            {

                this.$router.push('/vision/mv');
            },
            playMv(item,index)
            {
                mvurl(item.id).then(res=>{
                    console.log(res.data.url);
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url,
                          mvId:item.id
                        }
                    })
                })
            }
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
    }
    .rec-title + .recommend-mv li .rec-artist
    {
        font-size: 13px;
    }
    .rec-title + .recommend-mv li .tip
    {
        position: absolute;
        color: #ffffff;
        border-radius:8px 8px 0 0 ;
        font-size: 12px;
        background-color:rgba(0,0,0,.3);
        padding: 10px 5px;
        width:230px;
        transition: transform 0.3s;
        top: 0;
        transform: scale(0);
        transform-origin:top center ;
    }
    .rec-title + .recommend-mv li:hover .tip
    {
        transform: scale(1);
    }
</style>