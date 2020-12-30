<template>
  <div class="gedan">
      <search-result-cpn>
          <ul>
             <li v-for="(item,index) in playList">
                <div>
                    <img :src="item.coverImgUrl+'?param=60y60'"/>
                </div>
                 <div class="playList-name">{{item.name}}</div>
                 <div class="playList-track-count">{{item.trackCount}}首</div>
                 <div class="playList-nickname"><span>by </span>{{item.creator.nickname}}</div>
             </li>
          </ul>
      </search-result-cpn>
  </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    export default {
        name: "gedan",
        components: {SearchResultCpn},
        data()
        {
          return {
              playList:[]
          }
        },
        created()
        {
            console.log(this.$store.state.searchList.playlists);
            this.playList=this.$store.state.searchList.playlists;
        }
    }
</script>

<style scoped>
  .playList-name
  {
      font-size: 13px;
      line-height: 60px;
      width: 312px;
      margin: 0 0 0 15px;
  }
  .playList-track-count
  {
      line-height: 60px;
      font-size: 10px;
      width: 150px;
      text-align: left;
      color: rgb(195, 195, 196);
  }
    .playList-nickname
    {
        font-size: 12px;
        line-height: 60px;
    }
    .playList-nickname span
    {
        color:rgb(195, 195, 196);
    }
</style>