<template>
    <div class="my-collection">
        <tab-control :list="['专辑','歌手','视频','专栏']" class="collect-tab-control" v-if="this.$store.state.loginType===1">
          <div slot="专辑">
            <collect-album/>
          </div>
          <div slot="歌手">
            <collect-artist/>
          </div>
          <div slot="视频">
            <collect-video/>
          </div>
          <div slot="专栏"></div>
        </tab-control>
      <div class="ask-login" v-if="this.$store.state.loginType===0"></div>
    </div>
</template>

<script>
    import TabControl from "@/components/common/tabController/TabControl";
    import CollectAlbum from "@/views/myMusic/myCollection/collectAlbum/CollectAlbum";
    import CollectArtist from "@/views/myMusic/myCollection/collectArtist/CollectArtist";
    import CollectVideo from "@/views/myMusic/myCollection/collectVideo/CollectVideo";
    export default {
        name: "MyCollection",
      components: {CollectVideo, CollectArtist, CollectAlbum, TabControl}
    }
</script>

<style scoped>
  .my-collection
  {
    height: 535px;
    overflow-y: auto;
  }
  .my-collection::-webkit-scrollbar
  {
    width: 2px;
  }
  .collect-tab-control
  {
    margin: 25px 0 0px 30px;
  }
  .ask-login
  {
    width: 750px;
    height: 270px;
    margin: 100px auto 0;
    background-image: url("../../../assets/img/video-mv/mymusic.png");
    background-repeat: no-repeat;
  }
</style>