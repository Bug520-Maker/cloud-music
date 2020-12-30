<!--为创作翻唱，声之剧场，音乐故事-->
<template>
    <div class="radio-cpn">
        <recommend-cpn>
            <div slot="title">
                {{titleText}}
            </div>
            <div slot="list">
                <ul class="radio">
                    <li v-for="(item,index) in list">
                        <img v-lazy="item.picUrl+'?param=140y140'" />
                        <p>{{item.rcmdText}}</p>
                        <div class="name">{{item.name}}</div>
                    </li>
                </ul>
            </div>
        </recommend-cpn>
    </div>
</template>

<script>
    import RecommendCpn from "../recommendCpn/RecommendCpn";
    export default {
        name: "RadioCpn",
        components: {RecommendCpn},
        props:{
            list:{
                type:Array,
                default()
                {
                    return []
                }
            },
            titleText:{
                type:String,
                default() {
                    return '';
                }
            }
        }
    }
</script>

<style scoped>
    .radio
    {
        display: flex;
        justify-content: space-between;
    }
    .radio li
    {
        position: relative;
    }
    .radio li img
    {
        width: 140px;
        border: 1px solid rgba(153,153,153,.3);
        border-radius:8px ;
    }
    .radio li p
    {
        width: 140px;
        font-size: 14px;
        margin: 15px 0 0 0 ;
    }
    .name
    {
        position: absolute;
        color: #ffffff;
        top: 110px;
        font-size: 13px;
        width: 100%;
        background-color: #795da3;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 5px 0px;
        background-color:rgba(0,0,0,.3);
        border-radius: 3px;
    }
</style>