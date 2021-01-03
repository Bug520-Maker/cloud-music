<!--发现音乐=》歌单 整体页面-->
<template>
    <div id="song-sheet">
        <router-view ></router-view>
        <div class="quality-song-list" @click="qualityRouter">
            <div><img v-lazy="highquality[0].coverImgUrl+'?param=140y140'" /></div>
            <ul>
                <li>精品歌单</li>
                <li>{{highquality[0].name}}</li>
                <li>{{highquality[0].copywriter}}</li>
            </ul>

        </div>
        <!--设置 歌单导航 华语-流行-摇滚-民谣-电子-另类/独立-轻音乐等-->
       <div id="header">
           <div class="title">{{title}} ></div>
           <sheet-child @sheetchild="btnclick"></sheet-child>
       </div>
    </div>
</template>

<script>
    import SheetChild from "./sheetChild";
    import {highquality} from "../../../network/songsheet/songSheet";

    export default {
        name: "songSheet",
        components: {SheetChild},
        methods:{
            btnclick(name)
            {
                this.title=name;
            },
            qualityRouter()
            {
                this.$router.push({
                    path:'/findMusic/songSheet/qualitySheet',
                    query:{
                        hightSheet:this.highquality
                    }
                });
            }
        },
        data()
        {
            return {
                title:'华语',
                highquality:[{coverImgUrl:''}]
            }
        },
        created() {
            highquality().then(data=>{
                // console.log(data.playlists);
                this.highquality=data.playlists;
            })
        }
    }
</script>

<style scoped>
    #song-sheet
    {
        overflow: scroll;
        height: 480px;
    }
    #song-sheet::-webkit-scrollbar{
        width: 2px;
    }
    #header
    {
       display: flex;
        justify-content: space-between;
        margin: 20px 0 0 0;
        position: relative;
    }
    .title
    {
        width: 80px;
        padding: 5px 20px;
        text-align: center;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 20px;
    }
    .quality-song-list
    {
        height: 170px;
        width: 100%;
        background-color: rgba(127, 95, 87,.6);
        margin: 30px 0 0 0;
        border-radius: 10px;
        display: flex;
        background-image: linear-gradient(to right,rgb(118, 115, 115) 50px,rgba(45, 42, 41,.6) 450px,rgb(147, 119, 115) 750px);
        cursor:pointer;
    }
    .quality-song-list img
    {
        width: 140px;
        display: block;
        margin: 15px;
        border-radius: 8px;
    }
    .quality-song-list ul li:nth-of-type(1)
    {
        width: 102px;
        height: 30px;
        border-radius: 15px;
        border:1px solid rgb(231, 170, 90);
        margin: 30px 0 20px 0;
        color: rgb(231, 170, 90);
        text-align: center;
        font-size: 14px;
        line-height: 30px;
    }
    .quality-song-list ul li:nth-of-type(2)
    {
        color: white;
        margin: 0 0 15px 0;
    }
    .quality-song-list ul li:nth-of-type(3)
    {
        color:black; /*rgb(173, 164, 163);*/
        font-size:13px;
    }
</style>