<!--精品歌单列表-->
<template>
    <div class="quality-sheet">
        <div id="head">
          <div class="title">精品歌单</div>
          <div class="category" @click="titleCate">
            <i class="iconfont icon-shaixuan"></i>
            {{category}}
            <category
                v-show="isShow"
                :list="tags"
                tagTitle="全部歌单"
                class="tag-category"
                :tag="category"
                @tagClick="cateClick"></category>
          </div>
        </div>
        <ul>
            <li v-for="(item,index) in qualitySheet" :key="item.id">
                <div class="sheetImg" @click="liClick(index,item)">
                  <img v-lazy="qualitySheet[index].coverImgUrl+'?param=134y134'">
                </div>
                <ul class="sheetInfo">
                    <li @click="liClick(index,item)">{{qualitySheet[index].name}}</li>
                    <li @click="userRouter(item)">by {{qualitySheet[index].creator.nickname}}</li>
                    <li>{{qualitySheet[index].copywriter}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import {songListMsg} from "@/network/playlist/playlist";
import Category from "@/components/common/category/Category";
import {highquality} from "@/network/songsheet/songSheet";

export default {
  name: "QualitySheet",
  components: {Category},
  data() {
    return {
      qualitySheet: [],
      category: '华语',
      tags: [],/*标签列表*/
      isShow: false
    }
  },
  created() {
    this.qualitySheet = this.$route.query.hightSheet;
    this.category = this.$route.query.tagName;
    this.tags = this.$route.query.tags;
  },
  methods: {
    liClick(index, item)/*路由直歌单详情页*/
    {
        this.$router.push({
          path: '/sheetMsg',
          query: {
            playListId: this.qualitySheet[index].id
          }
      });
    },
    cateClick(item) {
      this.category = item;
    },
    titleCate() {
      this.isShow = !(this.isShow);
      if (!this.isShow) {
        highquality(this.category).then(data => {
          this.qualitySheet = data.playlists;
        })
      }
    },
    userRouter(item) {
      this.$router.push({
        path: '/userDetail',
        query: {
          userId: item.creator.userId
        }
      })
      //console.log(item.creator)
    }
  }
}
</script>

<style scoped>
.quality-sheet {
  background-color: white;
  width: 764px;
  position: absolute;
  z-index: 999;
  overflow: auto;
  height: 460px;
  scrollbar-color: transparent transparent;
  margin: 15px 0 0 0;
}

.quality-sheet::-webkit-scrollbar {
  width: 5px;
}
#head
{
  display: flex;
  justify-content: space-between;
  margin: 0px 0 15px 0;

}
.quality-sheet .title {
  font-size: 20px;
  font-weight: bolder;
}
#head .category
{
  font-size: 12px;
  border: 1px solid #d8d8d8;
  border-radius: 18px;
  padding: 2px 12px;
  line-height: 18px;
  margin: 0px;
  cursor: pointer;
  position: relative;
}
.tag-category
{
  position: absolute;
  top: 37px;
  left: -480px;
}

.quality-sheet > ul {
  display: flex;
  flex-wrap: wrap;
  width: 764px;
}

.quality-sheet > ul li {
  background-color: white;
  margin: 0 5px 20px 0;
}

.quality-sheet > ul li {
  display: flex;
}

.sheetImg img {
  width: 134px;
  margin: 0 10px 0 0;
  border-radius: 10px;
  cursor: pointer;
}

.sheetInfo li:nth-of-type(1) {
  margin: 30px 0 15px;
  font-size: 14px;
  width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
}

.sheetInfo li:nth-of-type(2) {
  font-size: 12px;
  margin: 0 0 20px 0;
  color: rgb(159, 159, 159);
  cursor:pointer;
}

.sheetInfo li:nth-of-type(3) {
  font-size: 12px;
  width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: rgb(207, 207, 207);
}
</style>