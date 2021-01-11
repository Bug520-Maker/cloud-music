<!--首页推荐歌单-->
<template>
   <div>
       <p class="rec-title" @click="recClick">推荐歌单 ></p>
       <div class="rec-list">
           <ul>
               <li v-for="(item,index) in recList" :key="index">
                   <img v-lazy="item.picUrl+'?param=137y137'" alt="" @click="sheetRouter(index,item)">
                   <p>{{item.name}}</p>
               </li>
           </ul>
       </div>
   </div>
</template>

<script>
    import {songListMsg} from "../../../../network/playlist/playlist";
    import {recommendList} from "../../../../network/recommend/recommendList";

    export default {
        name: "recommendSongSheet",
        data()
        {
            return {
                recList: [],

            }
        },
        created() {
            recommendList(10).then(data => {
                this.recList = data.result;
                //console.log(data.result);
            })
        },
        methods:{
            sheetRouter(index,item)
            {

                songListMsg(this.recList[index].id).then(res=>{
                    console.log(res.playlist);
                    this.$router.push({
                        path:'/sheetMsg',
                        query:{
                            songListMsg:res.playlist
                        }
                    });
                });

            },
            /*推荐歌单*/
            recClick()
            {
                this.$router.push('/findMusic/songSheet');
            },
        }
    }
</script>

<style scoped>
    .rec-list ul
    {
        display: flex;
        flex-wrap: wrap;
        background-color:transparent;
    }
    .rec-list ul li
    {
        flex: 1;
        margin: 0px 0 15px 0;
    }
    .rec-list ul img
    {
        width: 137px;
        border-radius:5px ;
    }
    .rec-title
    {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 20px 0;
        cursor:pointer;
    }
    .rec-list p
    {
        width:137px ;

        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>