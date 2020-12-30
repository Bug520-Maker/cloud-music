<template>
    <div class="ranking-list clearfix">
        <child-cpn :rank-list="officialList" title="官方榜" :songList="allRank"/>
        <global-rank :globalRank="globalRank"></global-rank>
    </div>
</template>

<script>
    import {allList, listcontentDetail} from "../../../network/recommend/topList/toplist";
    import ChildCpn from "./childCpn/ChildCpn";
    import {songListMsg} from "../../../network/playlist/playlist";
    import GlobalRank from "./childCpn/GlobalRank";

    export default {
        name: "RankingList",
        components: {GlobalRank, ChildCpn},
        data()
        {
          return {
              officialList:[],
              listMsg:{},
              rankMap:new Map(),
              soar:[],//飙升
              newSong:[],//新歌
              original:[],//原创
              hotSong:[],//热歌
              allRank:[],
              globalRank:[]
          }
        },
        created() {
            allList().then(data=>{

               // this.globalRank=this.globalRank.splice(0,4);
                //console.log(data.list);
                let rise="飙升榜";
                let newSong="新歌榜";
                let original="原创榜";
                let hotSong="热歌榜";
                let singer="歌手榜";
                let listLink=[];
                for(let list of data.list)
                {
                    if(rise==list.name||newSong==list.name||original==list.name||hotSong==list.name||singer==list.name)
                    {
                        listLink.push(list);
                        this.rankMap.set(list.name,list.id);
                    }
                }
                this.officialList=[...listLink];
                //console.log(...this.officialList);
                for(let key of this.rankMap.keys())
                {
                    songListMsg(this.rankMap.get(key)).then(data=>{
                        if(key==='飙升榜')
                        {
                            this.soar=data.playlist.tracks.slice(0,5);
                            this.allRank.push(this.soar)
                        }
                        else if(key==='新歌榜')
                        {
                            this.newSong=data.playlist.tracks.slice(0,5);
                            this.allRank.push(this.newSong)
                        }
                        else if(key==='原创榜')
                        {
                            this.original=data.playlist.tracks.slice(0,5);
                            this.allRank.push( this.original)
                        }
                        else if(key==='热歌榜')
                        {
                            this.hotSong=data.playlist.tracks.slice(0,5);
                            this.allRank.push( this.hotSong)
                            //console.log(this.hotSong);
                        }
                    })
                }
                //console.log(data.list);
                this.globalRank=data.list;
                this.globalRank.splice(0,4);
                //console.log(this.globalRank)
            })
        },
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