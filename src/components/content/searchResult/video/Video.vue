<template>
    <div class="search-result-video">
        <ul>
            <li v-for="(item,index) in videos" :key="index">
               <msg-list play-count-l="74%"
                         :duration-x-y="{x:'80%',y:'80%'}">
                 <div slot="imgContainer"
                      @click="playVideo(item,index)"
                      v-lazy-container="{ selector: 'img' }">
                   <img :data-src="item.coverUrl+'?param=232y130.65'"
                        :data-loading="require('@/assets/img/placeholder/placeholder02.png')" :alt="item.title"/>
                 </div>
                 <!--视频播放量-->
                 <div slot="playCount">
                   {{playCount(item.playTime)}}
                 </div>
                 <!--视频时长-->
                 <p slot="duration">
                   {{duration(item.durationms)}}
                 </p>
                 <!--视频title-->
                 <div slot="state" class="state">
                   {{item.title}}
                 </div>
                 <!--视频作者-->
                 <div slot="creator" class="creator">
                   {{item.creator[0].userName||''}}
                 </div>
               </msg-list>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mvurl} from "@/network/vision/mv/mvList";
    import {videoUrl} from "@/network/vision/vis/visList";
    import {formatDt, formatPlayCount} from "@/utils/format/format";
    import MsgList from "@/components/common/msgList/MsgList";
    export default {
        name: "Video",
      components: {MsgList},
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
                        this.videoRouter(this.url,item.vid);
                   })
                }
                if(item.type===1)
                {
                    videoUrl(item.vid).then(data=>{
                        this.url=data.urls[0].url;
                        this.videoRouter(this.url,item.vid);
                    })
                }
            },
            videoRouter(url,mvId)
            {
                this.$router.push({
                    path:'/videoPlay',
                    query:{
                        url,
                        mvId
                    }
                })
            },
            playCount(item)
            {
              return formatPlayCount(item);
            },
            duration(item)
            {
              return formatDt(item);
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
    .search-result-video .state,.creator
    {
        font-size: 12px;
        font-family: "微软雅黑";
    }
    .state
    {
        width: 232px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(80, 145, 202);
    }
    .creator
    {
        color: rgb(223, 207, 223);
    }
</style>