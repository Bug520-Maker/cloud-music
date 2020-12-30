<template>
    <div class="singer-details">
        <div class="banner-header">
            <div>
                <img :src="singerBaseMsg.picUrl+'?param=184y184'" />
            </div>
            <ul>
                <li>{{singerBaseMsg.singerName}}</li>
                <li></li>
                <li>
                    <span>单曲数：{{singerBaseMsg.musicSize}}</span>
                    <span>专辑数：{{singerBaseMsg.albumSize}}</span>
                </li>
            </ul>
        </div>
        <div class="body-content">
            <ul class="nav-list">
                <li v-for="(item,index) in navList" :key="index" :class="{active:index==currentIndex}" @click="liCLick(index)">
                    {{item}}
                </li>
            </ul>
            <ul id="album" ref="album" v-show="currentIndex===albumindex" >
                <li>
                    <div>
                        <img src="../../../assets/img/singerSongs/top50.png" width="150px"/>
                    </div>
                    <song-lists :songLists="singerSongs" class="songList"></song-lists>
                </li>
                <p class="more" @click="pClick" ref="checkmore">点击查看更多></p>
            </ul>
            <ul id="mv-coin" ref="mvCoin" v-show="currentIndex===mvcoinindex" >
                <li v-for="(item,index) in singerMvs" @click="mvplay(index)">
                    <div>
                        <img :src="item.imgurl+'?param=242y181.63'" />
                    </div>
                    <p>{{item.name}}</p>
                </li>
            </ul>
            <pre id="singer-desc" v-show="currentIndex===singerdescribel">
                {{singerDesc}}
            </pre>
        </div>
    </div>
</template>

<script>
    import {mvofsinger, singerDesc, top50} from "../../../network/singer/singer";
    import SongLists from "../songList/SongLists";
    import {mvurl} from "../../../network/vision/mv/mvList";

    export default {
        name: "SingerDetai",
        components: {SongLists},
        data()
        {
            return {
                singerBaseMsg:{},
                navList:['专辑','mv','歌手详情','相似歌手'],
                currentIndex:0,
                singerSongs:[],
                singerMvs:[],/*歌手mv*/
                singerDesc:'',
                albumindex:0,
                mvcoinindex:1,
                singerdescribel:2
            }
        },
        created() {
            this.singerBaseMsg=this.$route.query.singermsg;
            //console.log(this.singerBaseMsg);
            top50(this.singerBaseMsg.singerId).then(data=>{
               // console.log(data);
                for(let item of data.songs)
                {
                    let obj={
                        id:item.id,
                        name:item.name,
                        alias:[''],
                        artists:[
                            {name:item.ar[0].name}
                        ],
                        album:{
                            name:item.al.name,
                            id:item.al.id
                        },
                        duration:143365.562,
                        alImgUrl:item.al.picUrl,
                    }
                   // console.log(obj)
                    this.singerSongs.push(obj);
                }
            })
        },
        methods:{
            liCLick(index)
            {
                this.currentIndex=index;
                if(index==1)
                {
                    mvofsinger(this.singerBaseMsg.singerId).then(data=>{
                        console.log(data.mvs);
                        this.singerMvs=data.mvs;
                    })
                }
                if(index==2)
                {/*获取歌手描述*/
                    singerDesc(this.singerBaseMsg.singerId).then(data=>{
                        this.singerDesc=data.briefDesc;
                    })
                }

            },
            pClick()
            {
                this.$refs.checkmore.style.display="none";
                this.$refs.checkmore.previousSibling.children[1].style.overflow="visible";
            },
            mvplay(index)
            {
                mvurl(this.singerMvs[index].id).then(res=>{
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url
                        }
                    })
                })
            }
        },

    }
</script>

<style scoped>
    .singer-details
    {
        padding: 20px 20px 0px 20px;
        height: 515px;
        overflow: auto;
    }
    .singer-details::-webkit-scrollbar
    {
        width: 2px;
    }
    .banner-header div:nth-of-type(1)
    {
        height: 184px;
    }
    .banner-header div:nth-of-type(1) img
    {
        width: 184px;
        border-radius: 10px;
    }
    .banner-header
    {
        display: flex;
    }
    .banner-header ul
    {
        margin: 0 0 0 30px;
    }
    .banner-header ul li:nth-of-type(3) span
    {
        font-size: 14px;
        margin: 0 20px 0 0;
    }
    .banner-header ul li:nth-of-type(1)
    {
        font-size: 22px;
        font-weight: 700;
    }
    .body-content
    {
        margin: 20px 0 0 0;
    }
    .body-content  ul:nth-of-type(1)
    {
        display: flex;
    }
    .body-content ul:nth-of-type(1) li
    {
        font-size: 14px;
        color: rgb(0, 0, 0);
        margin: 0 20px 0 0;
        cursor: pointer;
        padding-bottom: 3px;
    }
    .body-content ul:nth-of-type(1) .active
    {
        font-weight: 700;
        border-bottom: 3px solid rgb(236, 65, 65);
    }
    .body-content .songList
    {
        margin: 0 0 0 20px;
        width: 600px;
        height: 280px;
        overflow: hidden;
    }
    .body-content #album
    {
        margin: 20px 0 0 0;
    }
    .body-content #album li
    {
        display: flex;
    }
    #album .more
    {
        font-size: 12px;
        margin: 0 0 0 170px;
        background-color:rgb(249, 249, 249);
        padding: 5px 0;
        color: rgb(97, 97, 98);
        width: 600px;
        text-align: right;
        cursor: pointer;
    }
    #mv-coin
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0 0 0;
    }
    #mv-coin li
    {
        margin: 0 0 20px 0;
        cursor: pointer;
    }
    #mv-coin li div img
    {
        width: 242px;
        border-radius: 8px;
    }
    #mv-coin li p
    {
        font-size: 14px;
        width: 242px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #singer-desc
    {
        margin: 20px 0 0 0;
        color:rgb(103, 103, 103);
        white-space: normal;
        text-indent: 28px;
        font-size: 14px;
        font-family: "微软雅黑";
        line-height: 30px;
    }
</style>