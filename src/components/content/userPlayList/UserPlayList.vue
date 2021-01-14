<template>
  <div class="playList-outer">
    <details-page>
      <div slot="imgContainer">
        <img v-lazy="this.$store.state.userSongListMsg.coverImgUrl+'?param=184y184'" />
      </div>
      <div slot="title">{{this.$store.state.userSongListMsg.name}}</div>
      <div slot="creator" class="creator">
        <div class="avatar">
          <img v-lazy="this.$store.state.userSongListMsg.creator.avatarUrl+'?param=24y24'" />
        </div>
        <div>
          {{this.$store.state.userSongListMsg.creator.nickname}}
        </div>
      </div>
      <div slot="controlBtn">
        <button>播放全部</button>
        <button>收藏</button>
        <button>分享</button>
        <button>下载全部</button>
      </div>
      <div slot="targetMsg">
        <ul>
          <li>
            <span class="tag-name">标签: </span>
            <span>{{toString(this.$store.state.userSongListMsg.tags)}}</span>
          </li>
          <li>
            <span class="tag-name">歌曲: </span>{{this.$store.state.userSongListMsg.trackCount}}
            <span class="tag-name">播放: </span>{{this.$store.state.userSongListMsg.playCount}}
          </li>
          <li>
            <span class="tag-name">简介: </span>
            <span class="description">{{this.$store.state.userSongListMsg.description}}</span>
          </li>
        </ul>
      </div>
    </details-page>
    <user-play-list-info/>
  </div>
</template>

<script>
import DetailsPage from "@/components/common/detailsPage/DetailsPage";
import UserPlayListInfo from "@/components/content/userPlayList/UserPlayListInfo";
export default {
  name: "UserPlayList",
  components: {UserPlayListInfo, DetailsPage},
  methods:{
    toString(arr)
    {
      return arr.join(" / ")
    },
  }
}
</script>

<style scoped>
  .playList-outer
  {
    background-color: #ffffff;
    height: 535px;
    overflow-y: auto;
  }
  .playList-outer::-webkit-scrollbar
  {
    width: 2px;
  }
  .avatar img
  {
    width: 24px;
    border-radius: 50%;
  }
</style>