<template>
    <div class="new-music">
      <!--title导航-->
      <new-music-head :title="['新歌速递','新碟上架']">
        <div slot="新歌速递">
          <new-song-body  :navList="list"></new-song-body>
        </div>
        <div slot="新碟上架">
          <new-dish-body :navList="list"/>
        </div>
      </new-music-head>
    </div>
</template>

<script>
    import NewSongBody from "./newMusicBody/NewSongBody";
    import NewMusicHead from "@/views/findMusic/newMusic/newMusicHead/NewMusicHead";
    import NewDishBody from "@/views/findMusic/newMusic/newMusicBody/NewDishBody";
    export default {
        name: "newMusic",
        components: {NewDishBody, NewMusicHead, NewSongBody},
        data(){
            return {
                list:['全部','华语','欧美','韩国','日本'],
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
</style>