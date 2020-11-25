<!--设置底部歌曲播放容器-->
<template>
    <div class="play-coin">
        <div id="img-container" @click="imgClick"><img :src="this.$store.state.albumImgUrl || normalUrl" class="albumImg"/></div>
        <div id="songInfo">
            <p>{{this.$store.state.singleDetails.name||'网易云'}} <span :title="this.$store.state.singleDetails.alias[0]">{{this.$store.state.singleDetails.alias[0]}} </span></p>
            <p>{{this.$store.state.singleDetails.artists[0].name||'青春不散'}}</p>
        </div>
        <audio :src="this.$store.state.songUrl" controls="controls" class="play-song" ref="playSong" autoplay="autoplay"></audio>
        <div  class="playPage" ref="playPage" :class="{active:isActive}">
            <div class="album-container" :class="{disappear:isActive}"><img :src="this.$store.state.albumImgUrl||normalUrl" :class="{appear:isActive}"/></div>
            <div id="songMsg">
                <p>{{this.$store.state.singleDetails.name}}</p>
                <p>{{this.$store.state.singleDetails.alias[0]}}</p>
                <ul>
                    <li>专辑：<span>{{this.$store.state.singleDetails.album.name||'无'}}</span></li>
                    <li @click="singerClick">歌手：<span>{{this.$store.state.singleDetails.artists[0].name||'无'}}</span></li>
                    <li>来源 <span></span></li>
                </ul>
                <div class="lyric">
                   <pre v-for="(item,index) in oLRC.ms" :key="index">{{item.c}}</pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {songDetailes} from "../../network/playCoin/songDetal";
    import {songLyric} from "../../network/playCoin/songDetal";
    import {singeralbum} from "../../network/public/singerAlbum";
    export default {
        name: "playCoin",
        mounted() {
            this.$refs.playSong.volume=0.2;
        },
        data()
        {
            return {
                isActive:false,
                songInfo:[],
                lyric:'',
                normalUrl:'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
                albumMsg:{},
                oLRC:{
                    ti: "", //歌曲名
                    ar: "", //演唱者
                    al: "", //专辑名
                    by: "", //歌词制作人
                    offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
                    ms: [] //歌词数组{t:时间,c:歌词}
                }
            }
        },
        methods:{
            imgClick()
            {
                this.isActive ? this.isActive=false : this.isActive=true;
                // songDetailes(this.$store.state.songId).then(data=>{
                //     this.songInfo=data.songs;
                //     //console.log(data.songs);
                // })
                songLyric(this.$store.state.singleDetails.id).then(data=>{
                   // console.log(data.lrc.lyric)
                    try{
                        this.lyric=data.lrc.lyric;
                        console.log(data.tlyric.lyric);
                        this.createLrcObj(data.lrc.lyric);
                        //this.createLrcObj(data.tlyric.lyric);
                    }catch (e) {
                        
                    }
                })
            },
            singerClick()
            {
                this.isActive=false;
                console.log(this.$store.state.singleDetails.artists[0].id);
                singeralbum( this.$store.state.singleDetails.artists[0].id).then(data=>{
                    console.log(data);
                    this.albumMsg=data;
                    let msg={
                        singerId : this.$store.state.singleDetails.artists[0].id,
                        singerName : this.$store.state.singleDetails.artists[0].name,
                        albumSize: this.albumMsg.artist.albumSize,
                        musicSize: this.albumMsg.artist.musicSize,
                        picUrl:this.albumMsg.artist.picUrl,
                    }
                    this.$router.push({
                        path:'/singerDetails',
                        query:{
                            singermsg:msg
                        }
                    })
                })

            },
            createLrcObj(lrc) {
                if (lrc.length == 0)
                {
                    return;
                }
                this.oLRC.ms.length=0;
                let lrcs = lrc.split('\n');                                                     //用回车拆分成数组
                for (let i in lrcs)                                                             //遍历歌词数组
                {
                    lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, "");                            //去除前后空格
                    let t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]")); //取[]间的内容
                    let s = t.split(":");                                             //分离:前后文字
                    if (isNaN(parseInt(s[0])))
                    { //不是数值
                        for (let i in oLRC) {
                            if (i != "ms" && i == s[0].toLowerCase()) {
                                this.oLRC[i] = s[1];
                            }
                        }
                    }
                    else
                    {                                               //是数值
                        let arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
                        let start = 0;
                        for (let k in arr) {
                            start += arr[k].length;                //计算歌词位置
                        }
                        let content = lrcs[i].substring(start);    //获取歌词内容
                        for (let k in arr)
                        {
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
        background-image: url("../../assets/img/playCoin/play.png");
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
    .playPage
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
    .play-coin div.active
    {
        width:1021px ;
        height: 535px;
        background-color: white;
    }
    .album-container
    {
        /*width: 310px;
        height:310px;*/
        width: 0px;
        height: 0px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: 80px;
        top: 60px;
        border: none;
        box-sizing:border-box;
        overflow: hidden;
        animation: test infinite linear 15s;
        transition-duration: 0.3s;
        transition-property: width,height;
    }
    .playPage .disappear
    {
        width: 310px;
        height:310px;
        border: 52px solid rgb(48, 49, 51);
    }
    @keyframes test {
        from{
            transform: rotateZ(0deg);
        }
        to
        {
            transform: rotateZ(1turn);
        }
    }
    .album-container img
    {
        width: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition-duration: 0.3s;
        transition-property: width;
    }
    .album-container .appear
    {
        width: 210px;
    }

    #songMsg
    {
        width: 400px;
        height: 400px;
        /*border: 1px solid skyblue;*/
        position: absolute;
        left: 550px;
        top: 30px;
    }
    #songMsg p:nth-of-type(1)
    {
        color: rgb(51, 51, 51);
        font-size: 20px;
        margin: 0 0 10px 0;
    }
    #songMsg p:nth-of-type(2)
    {
       color: rgb(76, 76, 76);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;
        margin: 0 0 15px 0;
    }
    #songMsg ul
    {
        display: flex;
        margin: 0 0 30px 0;
    }
    #songMsg ul li
    {
        margin: 0 30px 0 0;
        font-size: 12px;
        color:  rgb(136, 150, 150);
    }
    #songMsg ul li:nth-of-type(1)
    {
        width: 147px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    #songMsg ul li:nth-of-type(2)
    {
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    #songMsg ul li span
    {
        color: rgb(80, 145, 202);
        cursor:pointer;
    }
    .lyric{
        width: 400px;
        height: 280px;
        border-right: 1px solid rgb(230, 230, 230);
        overflow: auto;

    }
    .lyric pre
    {
        font-family: "微软雅黑";
        font-size: 13px;
        line-height: 30px;

    }
    .lyric::-webkit-scrollbar
    {
        width: 5px;

    }
    .lyric::-webkit-scrollbar-thumb
    {
        height: 20px;
        width: 5px;
        background-color: rgb(233, 233, 235);
        border-radius: 5px;
    }
</style>