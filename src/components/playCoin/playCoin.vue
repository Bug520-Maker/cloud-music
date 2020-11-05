<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <img :src="this.$store.state.albumImgUrl" class="albumImg"/>
        <audio :src="this.$store.state.songUrl" controls="controls" class="play-song" ref="playSong" autoplay="autoplay"></audio>
    </div>
</template>

<script>
    export default {
        name: "playCoin",
        updated() {
            this.$refs.playSong.volume=0.2;
        }
    }
</script>

<style scoped>
    .play-coin
    {
        width: 100%;
        height: 70px;
        border-top: 1px solid rgb(225, 225, 225);
    }
    .play-song
    {
        width: 500px;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        outline: none;

    }
    .albumImg
    {
        width: 50px;
        margin: 10px 0 15px  15px;
    }
</style>