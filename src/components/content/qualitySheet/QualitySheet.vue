<!--精品歌单-->
<template>
    <div class="quality-sheet">
        <div class="title">精品歌单</div>
        <ul>
            <li v-for="(item,index) in qualitySheet" :key="index">
                <div class="sheetImg"><img :src="qualitySheet[index].coverImgUrl+'?param=134y134'"></div>
                <ul class="sheetInfo">
                    <li @click="liClick(index,item)">{{qualitySheet[index].name}}</li>
                    <li>{{qualitySheet[index].creator.nickname}}</li>
                    <li>{{qualitySheet[index].copywriter}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {songListMsg} from "../../../network/playlist/playlist";

    export default {
        name: "QualitySheet",
        data()
        {
           return {
               qualitySheet:[],
           }
        },
        created() {
            this.qualitySheet=this.$route.query.hightSheet
        },
        methods:{
            liClick(index,item)
            {
                songListMsg(this.qualitySheet[index].id).then(res=>{
                    console.log(res.playlist);
                    this.$router.push({
                        path:'/sheetMsg',
                        query:{
                            songListMsg:res.playlist
                        }
                    });
                });

            }
        }
    }
</script>

<style scoped>
    .quality-sheet
    {
        background-color: white;
        width: 764px;
        position: absolute;
        z-index: 999;
        overflow: auto;
        height: 460px;
        scrollbar-color: transparent transparent;
    }
    .quality-sheet::-webkit-scrollbar {
        width: 5px;
    }
    .quality-sheet .title
    {
        font-size: 20px;
        margin: 0px 0 15px 0;
    }
    .quality-sheet >ul
    {
        display: flex;
        flex-wrap: wrap;
        width: 764px;
    }
    .quality-sheet >ul li
    {
        background-color: white;
        margin: 0 5px 20px 0;
    }
    .quality-sheet >ul li
    {
        display: flex;
    }
    .sheetImg img
    {
        width: 134px;
        margin: 0 10px 0 0;
        border-radius: 10px;
    }
    .sheetInfo li:nth-of-type(1)
    {
        margin: 30px 0 15px;
        font-size: 14px;
        width: 210px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .sheetInfo li:nth-of-type(2)
    {
       font-size: 12px;
        margin: 0 0 20px 0;
        color: rgb(159, 159, 159);
    }
    .sheetInfo li:nth-of-type(3)
    {
        font-size: 12px;
        width: 210px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: rgb(207, 207, 207);
    }
</style>