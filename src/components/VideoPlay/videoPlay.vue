<template>


    <div class="video-play"><!--视频播放组件容器-->
        <video :src="mvurl|| this.$store.state.mvurldata.url" controls="controls" ref="videoPlay" autoplay="autoplay" v-if="this.$store.state.mvurldata.url!=null||mvurl!=null"></video>
        <div class="charge"  v-else>
        </div>
    </div>
</template>
<script>

    export default {
        name: "videoPlay",
        data()
        {
            return {
                isCharge:true,
                mvurl:''
            }
        },
        methods:{

        },
        created() {
            this.mvurl=this.$route.query.url
        },
        mounted() {
            this.$refs.videoPlay.volume=0.2
        },
    }
</script>

<style scoped>
    video
    {
        width: 600px;
        height: 338px;
        display: inline-block;
        margin: 50px 0 0 0;
    }
    .charge
    {
        width: 328px;
        height: 328px;
        margin: 50px 0 0 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 6px rgba(0,0,0,.2);
        background-image: url("../../assets/img/video-mv/charge.png");
        background-size:cover;
        background-position: -2px 0;
    }
</style>