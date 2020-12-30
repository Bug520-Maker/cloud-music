<template>
    <div class="search-result-video">
        <ul>
            <li v-for="(item,index) in videos" :key="index">
                <div class="img-container" @click="playVideo(item,index)">
                    <img :src="item.coverUrl+'?param=232y130.65'" />
                    <div>
                        {{(item.playTime>100000)? Math.floor(item.playTime/10000):item.playTime}}
                        <span v-show="item.playTime>100000">万</span>
                    </div>
                    <p>
                        {{parseInt(item.durationms/1000/60)<10? "0"+parseInt(item.durationms/1000/60):parseInt(item.durationms/1000/60)}} : {{getSecond(item.durationms/1000/60)}}
                    </p>
                </div>
               <div class="video-name">
                    {{item.title}}
                </div>
                <div class="video-creator">
                    {{item.creator[0].userName||''}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mvurl} from "../../../../network/vision/mv/mvList";
    import {videoUrl} from "../../../../network/vision/vis/visList";
    export default {
        name: "shipin",
        data()
        {
           return {
               videos:[],/*视频列表*/
                url:''
           }
        },
        created()
        {
            this.videos=this.$store.state.searchList.videos;
            //console.log(this.$store.state.searchList.videos);
        },
        methods:
        {
            getSecond(number)/*格式化时间*/
            {
                let s=number.toString().split('.');
                return (s[1]*60).toString().slice(0,2);
            },
            playVideo(item,index)/*播放视频*/
            {
                if(item.type===0)
                {
                    mvurl(item.vid).then(result=>{
                        this.url=result.data.url;
                        this.videoRouter(this.url);
                   })
                }
                if(item.type==1)
                {
                    videoUrl(item.vid).then(data=>{
                        this.url=data.urls[0].url;
                        this.videoRouter(this.url);
                    })
                }
            },
            videoRouter(url)
            {
                this.$router.push({
                    path:'/videoPlay',
                    query:{
                        url
                    }
                })
            }
        },

    }
</script>

<style scoped>
    .search-result-video
    {
        margin: 20px 30px 0 30px ;
    }
    .search-result-video ul li img
    {
        width: 232px;
        border-radius:5px ;
        cursor: pointer;
    }
    .search-result-video ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .search-result-video ul li
    {
        margin: 0 0 20px 0;
    }
    .search-result-video .video-name,.video-creator
    {
        font-size: 12px;
        font-family: "微软雅黑";
    }
    .video-name
    {
        width: 232px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(80, 145, 202);
    }
    .video-creator
    {
        color: rgb(223, 207, 223);
    }
    .img-container
    {
        position: relative;
    }
    .img-container div
    {
        position: absolute;
        top: 3px;
        color: #ffffff;
        font-size: 12px;
        left: 180px;
    }
    .img-container p
    {
        position: absolute;
        top:110px;
        color: #ffffff;
        font-size: 12px;
        left: 180px;
    }
</style>