<template>
    <div class="new-music">
        <div id="title">
            <div v-for="(item,index) in title" :key="index" @click="divClick(index)" :class="{active:divcurrentIndex===index}">{{item}}</div>
        </div>
        <ul class="bannerNav"><!--新歌导航 全部，华语，欧美，韩国，日本-->
            <li v-for="(item,index) in list" :class="{active:licurrentIndex===index}" @click="liClick(index)" :key="index">
                {{item}}
            </li>
        </ul>
        <new-song-body :newSongsList="newSongs"></new-song-body>
    </div>
</template>

<script>
    import NewSongBody from "./NewSongBody";
    import {newSong} from "../../../network/newMusic/newMusic";
    export default {
        name: "newMusic",
        components: {NewSongBody},
        data(){
            return {
                title:['新歌速递','新碟上架'],
                list:['全部','华语','欧美','韩国','日本'],
                divcurrentIndex:0,
                licurrentIndex:0,
                newSongs:[]
            }
        },
        created() {
            this.liClick(0);
        },
        methods:{
            divClick(index)
            {
                this.divcurrentIndex=index;
            },
            liClick(index)
            {
                this.licurrentIndex=index;
                let type=0;
                switch(index)
                {
                    case 0:type=0;break;
                    case 1:type=7;break;
                    case 2:type=96;break;
                    case 3:type=16;break;
                    case 4:type=8;break;
                }
                newSong(type).then(res=>{
                    this.newSongs=res.data.slice(0,40);
                    for(let i in this.newSongs)
                    this.newSongs[i].album.picUrl+="?param=60y60";
                    console.log(this.newSongs);
                })
            }
        }
    }
</script>

<style scoped>
    .new-music
    {
        background-color: white;
        height: 490px;
        overflow: auto;
    }
    .new-music::-webkit-scrollbar
    {
        width: 2px;
    }
    #title
    {
        display: flex;
        margin: 30px auto;
        border: 1px solid rgb(187, 187, 187);
        width: 216px;
        border-radius: 20px;
    }
    #title div
    {
        font-size: 12px;
        color: rgb(103,103,103);
        padding: 6px 30px;
        border-radius: 20px;
        cursor: pointer;
    }
    #title div.active
    {
        background-color: rgb(187, 187, 187);
        color: #ffffff;
    }
    .bannerNav
    {
        display: flex;
        margin: 0 0 20px 0;
    }
    .bannerNav li
    {
        margin: 0 0 0 20px;
        color: rgb(103,103,103);
        font-size: 14px;
        cursor: pointer;
    }
    .bannerNav .active
    {
        font-weight: 700;
        color: #000000;
    }
</style>