<template>
    <div class="mvs">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <MsgList play-count-l="76%"
                         :duration-x-y="{x:'80%',y:'80%'}">
                    <div slot="imgContainer" class="imgContainer">
                        <img v-lazy="item.imgurl+'?param=242y136'" @click="playMv(item)"/>
                    </div>
                    <div slot="duration">
                        {{duration(item.duration)}}
                    </div>
                    <div slot="playCount">
                        {{playCount(item.playCount)}}
                    </div>
                    <div slot="state" class="state">
                        {{item.name}}
                    </div>
                </MsgList>
            </li>
        </ul>
    </div>
</template>

<script>
    import MsgList from "../../../../common/msgList/MsgList";
    import {formatDt, formatPlayCount} from "@/utils/format/format";
    import {mvurl} from "@/network/vision/mv/mvList";
    export default {
        name: "Mvs",
        components: {MsgList},
        props:{
            list:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            playCount(count)
            {
                return formatPlayCount(count);
            },
            duration(duration)
            {
                return formatDt(duration);
            },
            playMv(item)
            {
             // console.log(item);
              mvurl(item.id).then(res=>{
                //console.log(res.data.url);
                this.$router.push({
                  path:'/videoPlay',
                  query:{
                    url:res.data.url,
                    mvId:item.id
                  }
                })
              })
            }

        }
    }
</script>

<style scoped>
    .mvs ul
    {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .mvs ul li
    {
        margin: 0 0 15px 0;
    }
    .imgContainer img
    {
        width: 242px;
        height: 136px;
    }
    .state
    {
        width: 242px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>