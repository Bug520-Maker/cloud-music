<template>
    <div class="sheetMsg"><!--显示歌单下的歌曲列表和歌单信息-->
        <div class="introduce">
            <img :src="this.$store.state.playlist.coverImgUrl" />
            <div class="msg">
                <span >{{this.$store.state.playlist.name}}</span>
                <span >{{this.$store.state.playlist.description}}</span>
                <span >标签：{{this.$store.state.playlist.tags}}</span>

            </div>
        </div>
        <!-- <span>{{this.$store.state.playlist.trackIds}}</span>-->
       <ul class="songList">
            <li v-for="(item,index) in this.$store.state.playlist.tracks" @click="liclick(index,item)">{{item.name}}</li>
        </ul>

    </div>
</template>

<script>
    import{musicUrl} from "../../network/public/musicUrl";

    export default {
        name: "songSheetList",
        methods:{
            liclick(index,item)
            {
                musicUrl(item.id).then(res=>{
                    //console.log(res.data[0]);
                    this.$store.commit({
                        type:'getSongUrl',
                        url:res.data[0].url
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .sheetMsg img
    {
        width: 184px;
        border-radius: 8px;
    }
    .sheetMsg{
       /* background-color: skyblue;*/
        padding: 30px 0 0 20px;
        height: 506px;
        overflow: auto;
        width:780px;
    }
    .introduce
    {
        display: flex;
    }
    .introduce .msg
    {
        width: 300px;
        margin: 0 0 0 30px;
    }
    .introduce .msg span
    {
        display: block;
        margin: 0 0 10px 0;
    }
    .introduce .msg span:nth-of-type(1)
    {
        font-weight: bold;
        font-size: 18px;
    }
    .introduce .msg span:nth-of-type(2)
    {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
    }
    .sheetMsg .songList
    {
        margin: 30px 0 0 0;
    }
    .sheetMsg .songList li
    {
        font-size: 14px;
        padding: 5px 5px;
    }
    .sheetMsg .songList li:hover
    {
        background-color: rgb(240, 241, 242);
    }
    .sheetMsg .songList li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
</style>