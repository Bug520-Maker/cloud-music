<template>
    <div class="gedan"><!--显示歌单的分类导航条-->

        <ul>
            <li v-for="(item,index) in hotList" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index,item)" >
                {{item.name}}
            </li>
        </ul>
        <huayu :huayuList="huayu"></huayu>
    </div>
</template>

<script>
    import {playlist,hotlist,songListMsg,songList} from "../../../network/playlist/playlist";
    import {musicUrl} from "../../../network/public/musicUrl";
    /*导入子组件*/
    import huayu from "./sheetList/huayu";
    import Huayu from "./sheetList/huayu";
    export default {
        name: "sheetChild",
        components: {
            Huayu
        },
        data()
        {
            return {
                hotList:[],
                currentIndex:0,
                huayu:[]
            }
        },
        methods:{
            btnClick(index,item)
            {
                this.currentIndex=index;
               /* playlist().then(data=>{
                    console.log(data);
                });*/
                hotlist().then(data=>{
                    this.hotList=data.tags;
                    songList(data.tags[index].name).then(data=>{
                       //50 console.log(data.playlists);
                        this.huayu=data.playlists;
                    })
                });
                this.$emit('sheetchild',item.name);
            }
        },
        created() {
            hotlist().then(data=>{
                this.hotList=data.tags;
                //console.log(data.tags);
            })
        }
    }
</script>

<style scoped>
    .gedan ul
    {
        display: flex;
    }
    .gedan ul li
    {
        font-size: 12px;
        margin: 4px 2px 0 2px;
        padding: 3px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .gedan ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }
</style>