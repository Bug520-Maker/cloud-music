<template>
    <div class="huayu"><!--分别显示内地，流行，摇滚，电子，民谣，轻音乐下分类的歌单-->
        <ul>
            <li v-for="(item,index) in huayuList" :key="index" >
               <div >
                   <img :src="item.coverImgUrl" @click="sheetRouter(index,item)"/><!--点击后跳转到 songSheetList显示具体的歌单下内容-->
                   <p class="name">{{item.name}}</p>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {musicUrl} from "../../../../network/public/musicUrl";
    import {songListMsg} from "../../../../network/playlist/playlist";

    export default {
        name: "huayu",
        props:{
            huayuList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },

        methods:{
            sheetRouter(index,item)
            {
                songListMsg(this.huayuList[index].id).then(res=>{
                    console.log(res.playlist);
                    this.$store.commit({
                        type:'songListMsg',
                        playlist:res.playlist
                    })
                    this.$router.push('/sheetMsg');
                });

            }
        }
    }
</script>

<style scoped>
    .huayu
    {
        position: absolute;
        left: 0;
        top:40px
    }
    .huayu ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 225px;
        overflow: auto;
        scrollbar-color: transparent transparent;
    }
    .huayu ul::-webkit-scrollbar
    {
        width: 5px;
    }
    .huayu ul::-webkit-scrollbar-thumb
    {
        height: 30px;
        background-color: rgb(225, 225, 225);
    }
    .huayu ul li
    {
        margin: 0 0 15px 0;
    }
    .huayu ul img
    {
        width: 177px;
        border-radius:8px ;
    }
    .huayu ul .name
    {
        width: 177px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        margin: 7px 0 0 0;
        color: rgb(55, 55, 55);
    }

</style>