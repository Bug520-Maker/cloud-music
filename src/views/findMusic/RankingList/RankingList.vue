
<template>
    <div class="ranking-list clearfix">
        <offical-rank title="官方榜"
                      :songList="[this.$store.state.upRanking,this.$store.state.newRanking,this.$store.state.originRanking,this.$store.state.hotRanking]"
                      v-if="this.$store.state.upRanking.tracks&&
                            this.$store.state.newRanking.tracks&&this.$store.state.originRanking.tracks&&this.$store.state.hotRanking.tracks"/>
        <global-rank :globalRank="globalRank" />
    </div>
</template>

<script>
import {allList, listcontentDetail} from "@/network/recommend/topList/toplist";
import OfficalRank from "./childCpn/OfficalRank";
import GlobalRank from "./childCpn/GlobalRank";

export default {
  name: "RankingList",
  components: {GlobalRank, OfficalRank},
  data() {
    return {
      officialList: [],
      listMsg: {},
      rankMap: new Map(),
      allRank: [],
      globalRank: []
    }
  },
  created() {
    allList().then(data => {
      //console.log(data);
      let rise = "飙升榜";
      let newSong = "新歌榜";
      let original = "原创榜";
      let hotSong = "热歌榜";
      let listLink = [];

      for (let list of data.list) {
        if (rise === list.name || newSong === list.name || original === list.name || hotSong === list.name) {
          listLink.push(list);
          this.rankMap.set(list.name, list.id);
        }
      }
      this.officialList = [...listLink];
      //console.log(this.officialList);
      /*console.log(this.rankMap);*/
      Array.from(this.rankMap.keys()).forEach((key, index) => {
        switch (key) {
          case '飙升榜':
            this.$store.dispatch({
              type: 'getUpRankingAction',
              id: this.rankMap.get('飙升榜')
            });
            break;
          case '新歌榜':
            this.$store.dispatch({
              type: 'getNewRankingAction',
              id: this.rankMap.get('新歌榜')
            });
            break;
          case '原创榜':
            this.$store.dispatch({
              type: 'getOriginRankingAction',
              id: this.rankMap.get('原创榜')
            });
            break;
          case '热歌榜':
            this.$store.dispatch({
              type: 'getHotRankingAction',
              id: this.rankMap.get('热歌榜')
            });
            break;
        }
      })
      this.globalRank = data.list;
      this.globalRank.splice(0, 4);
      // console.log(this.globalRank)
    })
  }
}
</script>

<style scoped>
    .ranking-list
    {
        background-color: white;
        height: 490px;
        overflow: auto;
    }
    .ranking-list::-webkit-scrollbar
    {
        width: 2px;
    }

</style>