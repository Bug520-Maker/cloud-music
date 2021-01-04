<template>
    <div class="mvs">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <MsgList>
                    <div slot="imgContainer" class="imgContainer">
                        <img v-lazy="item.imgurl+'?param=242y136'" />
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
    import MsgList from "../../../common/msgList/MsgList";
    import {formatDt, formatPlayCount} from "../../../../assets/function/formatDt";
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