<!--独家放送页面-->
<template>
    <div class="sole-play"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
        <div id="title">独家放送</div>
        <ul>
            <li v-for="(item,index) in broadcastList " @click="liClick(index)">
                <div v-lazy-container="{ selector: 'img' }">
                  <img :data-src="item.picUrl+'?param=372y137.43'"
                       :data-loading="require('@/assets/img/placeholder/placeholder02.png')"/>
                </div>
                <div id="sole-name">{{item.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {broadcastList} from "../../../network/recommend/broadcast";
    import {mvurl} from "../../../network/vision/mv/mvList";

    export default {
        name: "SolePlay",
        data()
        {
          return {
              broadcastList:{}
          }
        },
        mounted() {
            broadcastList().then(data=>{
                //console.log(data.result);
                this.broadcastList=data.result;
            })
        },
        methods:{
            liClick(index)
            {
                mvurl(this.broadcastList[index].id).then(res=>{
                    //console.log(res.data.url);
                    this.$router.push({
                        path:'/videoPlay',
                        query:{
                            url:res.data.url,
                          mvId:this.broadcastList[index].id
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .sole-play
    {
        height: 535px;
        overflow: auto;
    }
    .sole-play ul
    {
        display: flex;
        flex-wrap: wrap;
        padding: 0 30px;
        justify-content: space-between;
    }
    .sole-play::-webkit-scrollbar
    {
        width: 2px;
    }
    #title
    {
        font-size: 18px;
        margin: 30px 0 20px 30px;
    }
    .sole-play ul>li>div>img
    {
        width: 372px;
        border-radius: 8px;
    }
    .sole-play ul>li
    {
        cursor:pointer;
        margin: 0 0 15px 0;
    }
    #sole-name
    {
        font-size: 14px;
        width: 370px;
    }
</style>