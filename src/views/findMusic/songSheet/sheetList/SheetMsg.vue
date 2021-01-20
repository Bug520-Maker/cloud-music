<!--分别显示内地，流行，摇滚，电子，民谣，轻音乐下分类的歌单-->
<template>
    <div class="sheet-msg"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
      <ul>
        <li v-for="(item,index) in huayuList" :key="index">
          <msg-list :duration-x-y="{x:'7%',y:'80%'}"
                    :show-play="{show:true,width:'45px',height:'45px'}">
            <div slot="imgContainer">
              <img v-lazy="item.coverImgUrl+'?param=177y177'" @click="sheetRouter(index)"/>
            </div>
            <div slot="state" class="name">
              {{item.name}}
            </div>
            <div slot="playCount">
              {{playCount(item.playCount)}}
            </div>
            <!--使用组件的user替换duration-->
            <div slot="duration" class="user">
              <i class="iconfont icon-ttpodicon"></i>
              {{item.creator.nickname}}</div>
            <div slot="playIcon" class="play-icon">
              <i class="iconfont icon-play3"></i>
            </div>
          </msg-list>
        </li>
      </ul>
    </div>
</template>

<script>
    import {songListMsg} from "@/network/playlist/playlist";
    import MsgList from "@/components/common/msgList/MsgList";
    import {formatPlayCount} from "@/utils/format/format";
    export default {
        name: "SheetMsg",
      components: {MsgList},
      data()
        {
          return {
            loading:true,
            src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          }
        },
        props:{
            huayuList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            sheetRouter(index)
            {
                songListMsg(this.huayuList[index].id).then(res=>{
                   // console.log(res.playlist);
                    this.$router.push({
                        path:'/sheetMsg',
                        query:{
                            songListMsg:res.playlist
                        }
                    });
                    this.$store.commit({
                      type:'getSessionSongList',
                      data:res.playlist
                    })

                });
            },
          playCount(item)
          {
            return formatPlayCount(item);
          }
        }
    }
</script>

<style scoped>
     @import '../../../../assets/css/base.css';
    .sheet-msg
    {
        position: absolute;
        left: 0;
        top:40px;
        width: 760px;
    }
    .sheet-msg ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       /* height: 225px;*/
        scrollbar-color: transparent transparent;
    }
    /*.sheet-msg ul::-webkit-scrollbar
    {
        width: 5px;
    }
    .sheet-msg ul::-webkit-scrollbar-thumb
    {
        height: 30px;
        background-color: rgb(225, 225, 225);
    }*/
    .sheet-msg ul li
    {
        margin: 0 0 15px 0;
    }
    .sheet-msg ul img
    {
        width: 177px;
        border-radius:8px ;
        border: 1px solid rgba(153,153,153,.4);
    }
    .sheet-msg ul .name
    {
        width: 177px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        margin: 7px 0 0 0;
        color: #373737;
    }
    .user i
    {
      font-size: 12px;
    }
    .play-icon i
    {
      font-size: 24px;
    }
</style>