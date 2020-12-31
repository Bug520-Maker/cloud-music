<template>
    <div id="new-song-body">
        <ul class="newsong-list">
            <li v-for="(item,index) in newSongsList" :key="index">
                <div class="img-container" @click="imgClick(item)">
                    <img :src="item.album.picUrl" />
                    <div class="play">
                        <div>
                            <i class="iconfont icon-play3"></i>
                        </div>
                    </div>
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
    import {musicUrl} from "../../../network/public/musicUrl";

    export default {
        name: "NewSongBody",
        data()
        {
            return {
                newSong:[],
                songUrl:"",
                songId:''
            }
        },
        props:{
            newSongsList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            duration(item)
            {
                let num=item/60000;
                let number=num.toString().split(".");
                let time="0"+number[0]+":"+number[1].slice(0,2);
                return time;
            },
            imgClick(item)
            {
                musicUrl(item.id).then(res=>{
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl,
                        songId:this.songId
                    })
                })
                this.$store.commit({
                    type:'getAlbumImg',
                    albumImgUrl:item.album.blurPicUrl
                })
                this.$store.commit({
                    type:'getSingleInfo',
                    details:item
                })
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
    .img-container
    {
        position: relative;
    }
    .img-container .play
    {
        position: absolute;
        width: 25px;
        height:25px;
        background-color: #ffffff;
        top: 17px;
        left: 17px;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
    }
    .play div i
    {
        color:rgb(236, 65, 65);
    }
</style>