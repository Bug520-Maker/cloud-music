<template>
    <div class="search-result clearfix">
        <ul>
            <li v-for="(item,index) in this.$store.state.songs" :key="index">
                <div class="songName" @click="playSong(index)">{{item.name}}</div>
                <div class="singerName">{{item.artists[0].name}}</div>
                <div class="albumName">{{item.album.name}}</div>
                <div></div>
                <div></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {musicUrl} from "../../../network/public/musicUrl";
    import {albumContent} from "../../../network/public/albumContent";
    export default {
        name: "danqu",
        data()
        {
            return {
                songUrl:''
            }
        },
        methods:{
            playSong(index)
            {
                musicUrl(this.$store.state.songs[index].id).then(res=>{
                    this.songUrl=res.data[0].url;
                    this.$store.commit({
                        type:'getSongUrl',
                        url:this.songUrl
                    })
                });
                albumContent(this.$store.state.songs[index].album.id).then(data=>{
                    this.$store.commit({
                        type:'getAlbumImg',
                        albumImgUrl:data.album.blurPicUrl
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .search-result
    {
        background-color: transparent;
    }
    .search-result ul li
    {
        display: flex;
        padding: 5px 0 5px 30px;
        font-size: 14px;

    }
    .search-result ul
    {
        margin: 40px 0 0 0;
    }
    .search-result ul li div
    {
        flex:1;
        padding: 0 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .search-result ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .singerName,.albumName
    {
        color: rgb(97, 97, 98);
    }
    .songName
    {
        color: rgb(80, 145, 202);
        cursor: pointer;
    }
</style>