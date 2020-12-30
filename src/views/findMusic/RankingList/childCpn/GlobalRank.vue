<template>
    <div class="global-rank">
        <div id="title">全球榜</div>
        <ul>
            <li v-for="(item,index) in globalRank">
                <img v-lazy="item.coverImgUrl+'?param=137y137'"/>
                <div class="play-count">{{item.playCount/10000}}万</div>
                <div class="name">{{item.name}}</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "GlobalRank",
        props:{
            globalRank:{
                type:Array,
                default()
                {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #title
    {
        font-size: 20px;
        font-weight: 700;
        margin: 40px 0 20px 0;
    }
    .global-rank ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .global-rank ul li img
    {
        width: 137px;
        border-radius: 5px;
        border: 1px solid rgba(153,153,153,.4);
    }
    .global-rank ul li
    {
        position: relative;
        width: 137px;
        margin: 0 0 20px 0;
    }
    .play-count
    {
        position: absolute;
        color: #ffffff;
        top: 0;
        font-size: 13px;
       transform: translateX(50%);
    }
    .name
    {
        width: 137px;
    }
</style>