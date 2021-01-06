<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container">
            <img :src="((this.$store.state.albumImgUrl=='') ? this.$store.state.albumImgUrl='':this.$store.state.albumImgUrl+'?param=50y50' )|| normalUrl"
                 class="albumImg"
                 @click="imgClick"
            /><!--获取歌曲封面图片-->
        </div>
        <div id="songInfo">
            <p>{{this.$store.state.singleDetails.name||'网易云'}}   <!--获取歌曲名称-->
                <span :title="this.$store.state.singleDetails.alias[0]">
                    {{this.$store.state.singleDetails.alias[0]}}    <!--获取歌曲简介-->
                </span>
            </p>
            <p @click="pClick">{{this.$store.state.singleDetails.artists[0].name||'青春不散'}}</p>  <!--获取单曲 歌手-->
        </div>
        <audio :src="this.$store.state.songUrl"
               controls="controls"
               class="play-song"
               ref="playSong"
               autoplay="autoplay">
        </audio>
        <PlayPage id="playPage" :isActive="{isLive:isActive}" :oLRC="oLRC"/>
    </div>
</template>

<script>
    import PlayPage from "./PlayPage";
    import {songLyric} from "../../../network/playCoin/songDetal";
    import {singerMsg} from "@/network/singer/singer";
    export default {
        name: "playCoin",
        components: {
            PlayPage
        },
        mounted() {
            this.$refs.playSong.volume=0.2;
        },
        data()
        {
            return {
                songInfo:[],
                normalUrl:'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
                isActive:false,
                oLRC:{
                    ti: "", //歌曲名
                    ar: "", //演唱者
                    al: "", //专辑名
                    by: "", //歌词制作人
                    offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
                    ms: [] //歌词数组{t:时间,c:歌词}
                },
                lyric:'',//歌词

            }
        },
        methods:{
            imgClick()
            {
                this.isActive ? this.isActive=false : this.isActive=true;
                songLyric(this.$store.state.singleDetails.id).then(data=>{
                    try{
                        this.lyric=data.lrc.lyric;
                        this.createLrcObj(data.lrc.lyric);
                        //this.createLrcObj(data.tlyric.lyric);
                    }catch (e) {

                    }
                })
            },
             pClick()
             {
               singerMsg(this.$store.state.singleDetails.artists[0].id/*当前歌手ID*/).then(res=>{
                 /*路由至歌手详情页*/
                 this.$router.push({
                   path:'/singerDetails',
                   query:{
                     singerBaseMsg:res.data
                   }
                 })
               })
             },

            createLrcObj(lrc) {
                if (lrc.length == 0) {
                    return;
                }
                this.oLRC.ms.length = 0;
                let lrcs = lrc.split('\n');                                                     //用回车拆分成数组
                for (let i in lrcs)                                                             //遍历歌词数组
                {
                    lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, "");                            //去除前后空格
                    let t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]")); //取[]间的内容
                    let s = t.split(":");                                             //分离:前后文字
                    if (isNaN(parseInt(s[0]))) { //不是数值
                        for (let i in oLRC) {
                            if (i != "ms" && i == s[0].toLowerCase()) {
                                this.oLRC[i] = s[1];
                            }
                        }
                    } else {                                               //是数值
                        let arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
                        let start = 0;
                        for (let k in arr) {
                            start += arr[k].length;                //计算歌词位置
                        }
                        let content = lrcs[i].substring(start);    //获取歌词内容
                        for (let k in arr) {
                            let t = arr[k].substring(1, arr[k].length - 1);   //取[]间的内容
                            let s = t.split(":");                   //分离:前后文字
                            this.oLRC.ms.push({                               //对象{t:时间,c:歌词}加入ms数组
                                t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
                                c: content
                            });
                        }
                    }
                }
                this.oLRC.ms.sort(function (a, b) {      //按时间顺序排序
                    return a.t - b.t;
                });
            }
        },
    }
</script>

<style scoped>
    .play-coin
    {
        width: 100%;
        height: 70px;
        border-top: 1px solid rgb(225, 225, 225);
        position: relative;
    }
    .play-song
    {
        width: 500px;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        outline: none;
    }
    #img-container
    {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        left: 15px;
        background-image: url("../../../assets/img/playCoin/play.png");
        background-size: cover;
        border-radius: 5px;
    }
    #songInfo
    {
        position: absolute;
        left: 75px;
        top: 50%;
        transform: translateY(-50%);
    }
    #songInfo p:nth-of-type(1)
    {
        font-size: 13px;
        width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    #songInfo p:nth-of-type(1) span
    {
        color:  rgb(136, 150, 150);
    }
    #songInfo p:nth-of-type(2)
    {
        font-size: 13px;
        color: rgb(53, 53, 124);
        margin: 10px 0 0 0;
      cursor: pointer;
    }
    #img-container .albumImg
    {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    #img-container:hover
    {
        cursor: pointer;
    }
    /*设置播放页面样式*/
    #playPage
    {
        width:0px ;
        height: 0px;
        position: absolute;
        top: -536px;
        transition-duration: 0.5s;
        transition-property: width,height;
        overflow: hidden;
        position: relative;
        z-index: 99;
        background-color: white;
    }
    #playPage.active
    {
        width:1021px ;
        height: 535px;
        background-color: white;
    }
</style>