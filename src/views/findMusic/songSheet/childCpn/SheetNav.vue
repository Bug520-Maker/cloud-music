<!--歌单导航-->
<template>
    <div class="gedan"><!--显示歌单的分类导航条-->
        <ul>
            <li v-for="(item,index) in hotList" :key="index" :class="{active:currentIndex===index}" @click="btnClick(index,item)" >
                {{item.name}}
            </li>
        </ul>
        <SheetMsg :huayuList="sheetMsg" @pagination="pageClick"></SheetMsg>
    </div>
</template>

<script>
import {playlist, hotlist, songListMsg, songList} from "@/network/playlist/playlist";
/*导入子组件*/
import SheetMsg from "./SheetMsg";

export default {
  name: "SheetNav",
  components: {
    SheetMsg
  },
  data() {
    return {
      hotList: [],
      currentIndex: 0,
      sheetMsg: [],
      tagName:''
    }
  },
  methods: {
    getPlayLists(name, limit, offset)
    {
      songList(name, limit, offset).then(data => {
        this.sheetMsg = data.playlists;
      })
    },
    btnClick(index, item)
    {
      this.currentIndex = index;
      hotlist().then(data => {/*获取分类标题 华语，流行，摇滚，民谣，电子等*/
        this.hotList = data.tags;
        this.tagName=data.tags[index].name
        this.getPlayLists(this.tagName,60);
      });
      this.$emit('sheetchild', item.name);
    },
    pageClick(pageIndex) {
      this.getPlayLists(this.tagName,60,60*(pageIndex-1));
      this.$emit('back-top');
    }
  },
  created() {
    hotlist().then(data => {
      this.hotList = data.tags;  /*获取分类标题 华语，流行，摇滚，民谣，电子等*/
    })
    this.btnClick(0, {name: "华语"});
  }
}
</script>

<style scoped>
    .gedan ul
    {
        display: flex;
    }
    .gedan ul li
    {
        font-size: 12px;
        margin: 4px 2px 0 2px;
        padding: 3px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .gedan ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }
</style>