<template>
    <div id="new-song-body">
        <ul class="newsong-list">
            <li v-for="(item,index) in newSong" :key="index">
                <div>
                    <img :src="item.album.picUrl" />
                </div>
                <div :title="item.name">
                    {{item.name}}
                </div>
                <div>
                    {{item.artists[0].name}}
                </div>
                <div :title="item.album.name">
                    {{item.album.name}}
                </div>
                <div>{{duration(item.duration)}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {newSong} from "../../../network/newMusic/newMusic";

    export default {
        name: "NewSongBody",
        data()
        {
            return {
                newSong:[]
            }
        },
        created() {
            newSong(0).then(res=>{
                //console.log(res.data.slice(0,50));
                this.newSong=res.data.slice(0,50);
            })
        },
        methods:{
            duration(item)
            {
                let num=item/60000;
                let number=num.toString().split(".");
                let time="0"+number[0]+":"+number[1].slice(0,2);
                return time;
            }
        }
    }
</script>

<style scoped>
    #new-song-body .newsong-list li
    {
        display: flex;
        padding: 8px 0;
    }
    #new-song-body .newsong-list li:nth-child(odd)
    {
        background-color: rgb(249,249,249);
    }
    #new-song-body .newsong-list li div:nth-of-type(1) img
    {
        width:60px;
        border-radius: 6px;
        cursor: pointer;
    }
   /* #new-song-body .newsong-list li div:nth-child(even)
    {
        background-color: pink;
    }*/
    #new-song-body .newsong-list li div:nth-of-type(2)
    {
        color: rgb(55, 55, 55);
        font-size: 14px;
        width: 260px;
        padding: 0 20px;
        line-height: 60px;
        cursor: default;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    #new-song-body .newsong-list li div:nth-of-type(3)
    {
        font-size: 12px;
        width: 150px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
    }
    #new-song-body .newsong-list li div:nth-of-type(4)
    {
        font-size: 12px;
        width: 200px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    #new-song-body .newsong-list li div:nth-of-type(5)
    {
        width: 50px;
        font-size: 12px;
        line-height: 60px;
        color: rgb(103,103,103);
        cursor: default;
    }
</style>