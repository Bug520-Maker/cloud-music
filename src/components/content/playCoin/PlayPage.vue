<!--歌曲播放页面-->
<template>
    <div  class="playPage" ref="playPage" ><!--:class="{active:isActive.isLive}-->
        <div class="album-container" :class="{disappear:isActive.isLive}">
            <img :src="((this.$store.state.albumImgUrl=='')?this.$store.state.albumImgUrl='':this.$store.state.albumImgUrl+'?param=210y210')||normalUrl" :class="{appear:isActive.isLive}"/>  <!--封面旋转图片-->
        </div>
        <!--控制按钮-->
        <ul class="control-btn">
          <li title="喜欢">
            <i class="iconfont icon-love"></i>
          </li>
          <li title="收藏">
            <i class="iconfont icon-jiarushoucang"></i>
          </li>
          <li title="下载">
            <i class="iconfont icon-download"></i>
          </li>
          <li title="分享">
            <i class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></i>
          </li>
        </ul>
        <div id="songMsg">
            <p>{{this.$store.state.singleDetails.name}}</p>
            <p>{{this.$store.state.singleDetails.alias[0]}}</p>
            <ul>
                <li>专辑：<span>{{this.$store.state.singleDetails.album.name||'无'}}</span></li>
                <li @click="singerClick">歌手：
                    <span>
                    {{this.$store.state.singleDetails.artists[0].name||'无'}}
                  </span>
                </li>
                <li>来源 <span></span></li>
            </ul>
            <div class="lyric">
                <pre v-for="(item,index) in oLRC.ms" :key="index">{{item.c}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
    import {singerMsg} from "@/network/singer/singer";
    export default {
        name: "PlayPage",
        data()
        {
          return{
              albumMsg:{},
              normalUrl:'http://p1.music.126.net/evuHH8Wjhl5DJOXaCFOMVA==/109951165545747317.jpg?param=400y400',
          }
        },
        props:{
          isActive:{
              type:Object,
              default()
              {
                  return {}
              }
          },
           oLRC: {
              type:Object,
              default: {}
            }
        },
        methods:{
            singerClick()
            {
                this.$refs.playPage.classList.remove("active");
                /*获取歌手详细信息*/
                singerMsg(this.$store.state.singleDetails.artists[0].id/*当前歌手ID*/).then(res=>{
                    /*路由至歌手详情页*/
                    this.$router.push({
                        path:'/singerDetails',
                        query:{
                            singerBaseMsg:res.data
                        }
                    })
                    //console.log(res.data);
                })
            },

        }
    }
</script>

<style scoped>
    .album-container
    {
        width: 310px;
        height:310px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: 80px;
        top: 60px;
        border: none;
        box-sizing:border-box;
        overflow: hidden;
        animation: test infinite linear 15s;
        transition:all  0.3s;
        transform: scale(0);
    }
    .playPage .disappear
    {
       transform: scale(1);
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
        transform: translate(-50%,-50%);
        transition-duration: 0.3s;
        transition-property: width;
        opacity: 0;
    }
    .album-container .appear
    {
      opacity: 1;
        width: 210px;
    }
    /*控制按钮*/
    .control-btn
    {
      display: flex;
      margin:410px 0 0 80px;
    }
    .control-btn li
    {
      width: 40px;
      height: 40px;
      background-color:#f5f5f5;
      margin: 0 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
    }
    .control-btn li i
    {
      font-size: 18px;
      color: #595959;
    }
    .control-btn li:hover
    {
      background-color: #ebebeb;
    }
    .control-btn li:nth-child(1) i
    {
      font-size: 22px;
    }
    .control-btn li:nth-child(4) i,.control-btn li:nth-child(3) i
    {
      font-size: 20px;
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