<!--歌单导航-->
<template>
    <div class="gedan"><!--显示歌单的分类导航条-->
        <ul>
            <li v-for="(item,index) in hotList" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index,item)" >
                {{item.name}}
            </li>
        </ul>
        <SheetMsg :huayuList="sheetMsg"></SheetMsg>
    </div>
</template>

<script>
    import {playlist,hotlist,songListMsg,songList} from "../../../network/playlist/playlist";
    /*导入子组件*/
    import SheetMsg from "./sheetList/SheetMsg";
    export default {
        name: "sheetChild",
        components: {
            SheetMsg
        },
        data()
        {
            return {
                hotList:[],
                currentIndex:0,
               sheetMsg:[]
            }
        },
        methods:{
            btnClick(index,item)
            {
                this.currentIndex=index;

                hotlist().then(data=>{
                    this.hotList=data.tags;          /*获取分类标题 华语，流行，摇滚，民谣，电子等*/
                    songList(data.tags[index].name).then(data=>{
                        //console.log(data.playlists.slice(0,28));
                        this.sheetMsg=data.playlists.slice(0,24);
                    })
                });
                this.$emit('sheetchild',item.name);
            }
        },
        created() {
            hotlist().then(data=>{
                this.hotList=data.tags;  /*获取分类标题 华语，流行，摇滚，民谣，电子等*/
            })
            this.btnClick(0, {name:"华语"});
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