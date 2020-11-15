<template>
    <div class="ranking-list clearfix">
        <div id="title">官方榜</div>
        <ul id="list">
            <li v-for="(item,index) in officialList" :key="index">
                <div>
                    <img :src="item.coverImgUrl" @click="imgClick(index)"/>
                </div>
                <ul class="songlist-container">
                    <li v-for="(item,index) in 5" class="songlist">1</li>
                    <li>查看全部</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {allList, listcontentDetail} from "../../../network/recommend/topList/toplist";
    import {songListMsg} from "../../../network/playlist/playlist";

    export default {
        name: "RankingList",
        data()
        {
          return {
              officialList:[],
              listMsg:{}
          }
        },
        created() {
            allList().then(data=>{
                console.log(data.list);
                let rise="飙升榜";
                let newSong="新歌榜";
                let original="网易原创歌曲榜";
                let hotSong="云音乐热歌榜";
                for(let list of data.list)
                {
                    if(new RegExp(rise).test(list.name)||new RegExp(newSong).test(list.name)||new RegExp(original).test(list.name)||new RegExp(hotSong).test(list.name))
                    {
                        this.officialList.push(list);
                    }
                }
               /* for(let i of this.officialList)
                {
                    console.log(i);
                }*/
                this.officialList.pop();
            })
            /*listcontentDetail().then(data=>{
                console.log(data);
            })*/
        },
        methods:{
            imgClick(index)
            {
                songListMsg(this.officialList[index].id).then(res=> {
                    //console.log(res.playlist);
                    this.$store.commit({
                        type: 'songListMsg',
                        playlist: res.playlist
                    })
                    this.$router.push('/sheetMsg');
                })
            }
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
    #title
    {
        font-size: 20px;
        font-weight: 700;
        margin: 40px 0 20px 0;
    }
    #list > li
    {
        background-color: skyblue;
        margin: 0 0 30px 0;
        display: flex;
    }
    #list li >div img
    {
        width: 172px;
        vertical-align: bottom;
        border-radius:8px ;
    }
    .songlist-container
    {
        margin: 0 0 0 35px;
        width: 550px;
    }
    .songlist-container li:last-of-type
    {
        font-size: 12px;
    }
    .songlist
    {
        background-color: #55a532;
        width: 100%;
        margin: 5px 0 0 0;
        padding: 5px 0;
        font-size: 12px;
    }
</style>