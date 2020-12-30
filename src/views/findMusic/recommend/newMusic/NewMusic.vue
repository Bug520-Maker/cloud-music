<template>
    <div>
        <p class="rec-title">最新音乐> </p>
        <ul class="new-song-list">
            <li v-for="(item,index) in newSong" :key="index">
                <div class="imgcoin">
                    <img :src="item.picUrl+'?param=48y48'" @click="playSong(item,index)" />
                </div>
                <div>
                    <p >{{item.name}}</p>
                    <p class="name">{{item.song.artists[0].name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {singeralbum} from "../../../../network/public/singerAlbum";
    import {latestalbum} from "../../../../network/recommend/latestalbum";
    import {musicUrl} from "../../../../network/public/musicUrl";

    export default {
        name: "NewMusic",
        data()
        {
          return {
              newSong: [],/*最新歌曲*/
              songUrl:""
          }
        },
        created() {
            latestalbum().then(data => {
               // console.log(data.result);
                this.newSong = data.result;
            });
        },
        methods:{
            playSong(item,index)
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
                    albumImgUrl:item.picUrl
                })
                this.$store.commit({
                    type:'getSingleInfo',
                    details:item.song
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
    /***************最新音乐*****************************/
    .new-song-list
    {
        display: flex;
        flex-wrap: wrap;
    }
    .new-song-list li
    {
        display: flex;
        font-size: 12px;
        width: 240px;
        margin: 0 5px 15px 0;
    }
    .new-song-list li:hover
    {
        background-color:rgb(234, 234, 234);
        border-radius:5px ;
    }
    .new-song-list li img
    {
        width: 48px;
        border-radius:5px ;
    }
    .imgcoin
    {
        margin: 0 10px 0 0;
    }
    .new-song-list li .name
    {
        color: rgb(153,153,153);
        cursor: pointer;
    }
    .new-song-list li .name:hover
    {
        color:rgb(140, 137, 135);
    }
</style>