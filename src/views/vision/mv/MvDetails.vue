<template>
    <div class="mv-msg">
        <ul class="mv-details">
            <li v-for="(item,index) in NewMv" :key="index">
                <div>
                    <img  :src="item.cover+'?param=240y136'" @click="playmv(item)">
                    <p class="name">{{item.name}}</p>
                    <p class="artist">{{item.artistName}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mvurl, newmv, similarMv} from "../../../network/vision/mv/mvList";
    import {relatedVideo} from "../../../network/vision/vis/visList";

    export default {
        name: "MvDetails",
        data()
        {
          return {
              mvurl:'',
              newmv:[],
              region:''/*获取MV地区*/
          }
        },
        props:
        {
            NewMv:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods: {
            playmv(item) {
                mvurl(item.id).then(res => {
                    console.log('-----')
                    console.log(res.data);
                    this.mvurl = res.data.url;
                    this.$store.commit({
                        type: 'mvPlay',
                        mvurldata: res.data
                    })
                });
                relatedVideo(item.id).then(data=>{
                    console.log(data);
                })
                this.$router.push('/videoPlay');
            }
        }
    }
</script>

<style scoped>
    .mv-msg .mv-details
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .mv-msg .mv-details li
    {

        margin: 0 0 20px 0;
    }
    .mv-msg .mv-details img
    {
        width: 240px;
        height: 136px;
        border-radius: 5px;
    }
    .mv-msg .mv-details .name
    {
        font-size: 14px;
        color:rgb(55, 55, 55);
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .mv-msg .mv-details .artist
    {
        font-size: 12px;
        color: rgb(103,103,103);
    }
</style>