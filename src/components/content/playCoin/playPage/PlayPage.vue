<!--歌曲播放页面-->
<template>
    <div  class="playPage" ref="playPage" ><!--:class="{active:isActive.isLive}-->
        <div class="album-container" :class="{disappear:isActive.isLive}">
            <img :src="((this.$store.state.currentSong.al.picUrl==='')?
                        this.$store.state.currentSong.al.picUrl='':this.$store.state.currentSong.al.picUrl+'?param=210y210')||
                        normalUrl" :class="{appear:isActive.isLive}"/>  <!--封面旋转图片-->
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
            <p>{{this.$store.state.currentSong.name}}</p>
            <p class="text-nowrap">{{this.$store.state.currentSong.alia[0]}}</p>
            <ul>
                <li class="text-nowrap">专辑：<span>{{this.$store.state.currentSong.al.name||'无'}}</span></li>
                <li @click="singerClick" class="text-nowrap">歌手：
                    <span>
                    {{this.$store.state.currentSong.ar[0].name||'无'}}
                  </span>
                </li>
                <li>来源 <span></span></li>
            </ul>
          <!--歌词-->
            <div class="lyric" ref="lyricContainer">
              <ul class="clearfix">
                <li v-for="(item,index) in this.$store.state.lyricList" :class="{active:currentIndex===index}">
                  {{item.content}}
                </li>
              </ul>
            </div>
        </div>
      <song-comment/>
      <simi-songs/>
    </div>
</template>

<script>
    import SongComment from "@/components/content/playCoin/playPage/songComment/SongComment";
    import SimiSongs from "@/components/content/playCoin/playPage/simiSongs/SimiSongs";
    export default {
        name: "PlayPage",
      components: {SimiSongs, SongComment},
      data()
        {
          return{
              albumMsg:{},
              normalUrl:'http://p1.music.126.net/evuHH8Wjhl5DJOXaCFOMVA==/109951165545747317.jpg?param=400y400',
            currentTime:0,
            currentIndex:0
          }
        },
        props:{
          isActive:{
              type:Object,
              default()
              {
                  return {}
              }
          }
        },
      created() {
        this.$store.watch((state,getters)=>{
          return state.currentTime
        },(newVal)=>{
         // console.log(newVal)
          this.currentTime=newVal;
          //console.log('当前时间'+newVal)
          //console.log(this.$store.state.lyricList[this.index].duration,this.$store.state.lyricList[this.index].content);
          if(this.$store.state.lyricList[this.currentIndex+1]===undefined)
          {
            return ;
          }
          if(this.$store.state.lyricList[this.currentIndex+1].duration<this.currentTime)
          {
              this.currentIndex++
            //console.log(this.$store.state.lyricList[this.currentIndex].content)
              this.$refs.lyricContainer.scrollTop=26.8*this.currentIndex;
          }

        })
      },
      methods: {
        singerClick() {
          this.$refs.playPage.classList.remove("active");
          /*路由至歌手详情页*/
          this.$router.push({
            path: '/singerDetails',
            query: {
              artistId: this.$store.state.currentSong.ar[0].id/*当前歌手ID*/
            }
          })
          //console.log(res.data);
        },

      }
    }
</script>

<style scoped>
    .playPage
    {
      overflow-y: auto;
    }
    .playPage::-webkit-scrollbar
    {
      width: 5px;
    }
    .playPage::-webkit-scrollbar-thumb
    {
      height: 8px;
      background-color: #e1e1e1;
    }
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
        font-size: 14px;
        margin: 0 0 15px 0;
    }
    #songMsg > ul
    {
        display: flex;
        margin: 0 0 30px 0;
    }
    #songMsg > ul li
    {
        margin: 0 30px 0 0;
        font-size: 12px;
        color:  rgb(136, 150, 150);
    }
    #songMsg > ul li:nth-of-type(1)
    {
        width: 147px;
    }
    #songMsg > ul li:nth-of-type(2)
    {
        width: 130px;
    }

    #songMsg > ul li span
    {
        color: rgb(80, 145, 202);
        cursor:pointer;
    }
    .lyric{
        width: 400px;
        height: 280px;
        border-right: 1px solid rgb(230, 230, 230);
        overflow-y: auto;
    }
    .lyric ul{
      color: #666666;
      margin: 110px 0 0 0;
    }
    .lyric ul li
    {
      margin: 10px 0 0 0;
      font-family: "微软雅黑";
      font-size: 13px;
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
    .lyric ul li.active{
      color: #ec4141;
      font-size: 16px;
    }
</style>