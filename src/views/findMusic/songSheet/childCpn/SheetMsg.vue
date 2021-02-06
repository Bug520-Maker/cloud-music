<!--分别显示内地，流行，摇滚，电子，民谣，轻音乐下分类的歌单-->
<template>
    <div class="sheet-msg">
      <ul v-loading="this.$store.state.loading"
          element-loading-text="载入中..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="#ffffff">
        <li v-for="(item,index) in huayuList" :key="index">
          <msg-list :duration-x-y="{x:'7%',y:'80%'}"
                    :show-play="{show:true,width:'45px',height:'45px'}">
            <div slot="imgContainer" @click="sheetRouter(index)">
              <img v-lazy="item.coverImgUrl+'?param=177y177&quality=100'" />
            </div>
            <div slot="state" class="name">
              {{item.name}}
            </div>
            <div slot="playCount">
              {{playCount(item.playCount)}}
            </div>
            <!--使用组件的user替换duration-->
            <div slot="duration" class="user" @click="userRouter(item)">
              <i class="iconfont icon-ttpodicon"></i>
              {{item.creator.nickname}}
            </div>
            <div slot="playIcon" class="play-icon">
              <i class="iconfont icon-play3"></i>
            </div>
          </msg-list>
        </li>
      </ul>
      <el-pagination v-if="this.huayuList.length!==0"
          background
          layout="prev, pager, next"
          :total="100"
          @current-change="currentClick">
      </el-pagination>
    </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import {formatPlayCount} from "@/utils/format/format";

export default {
  name: "SheetMsg",
  components: {MsgList},
  data() {
    return {
      loading: true,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  props: {
    huayuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    sheetRouter(index) {/*路由直歌单详情页*/
      this.$router.push({
        path: '/playListMsg',
        query: {
          playListId: this.huayuList[index].id
        }
      })
    },
    playCount(item) {
      return formatPlayCount(item);
    },
    userRouter(item) {
      this.$router.push({
        path: '/userDetail',
        query: {
          userId: item.creator.userId
        }
      })
      //console.log(item.creator.userId)
    },
    currentClick(currentIndex)/*分页*/
    {
      this.$emit('pagination',currentIndex)
    }
  }
}
</script>

<style scoped>
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
     .user
     {
       cursor: pointer;
     }
    .user i
    {
      font-size: 12px;
    }
    .play-icon i
    {
      font-size: 24px;
    }
    .el-pagination
    {
      width: 400px;
     margin: 0 auto;
    }
</style>