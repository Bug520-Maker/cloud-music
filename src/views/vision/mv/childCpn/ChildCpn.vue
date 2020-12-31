<!--mv共享cpn-->
<template>
    <div class="mv-child-cpn">
        <ul class="mv-details">
            <li v-for="(item,index) in mvList" :key="index">
                <div>
                    <img  v-lazy="item.cover+'?param=240y136'" @click="playmv(item)">
                    <p class="name">{{item.name}}</p>
                    <p class="artist">{{item.artistName}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ChildCpn",
        props:{
            mvList:{
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
    .mv-child-cpn .mv-details
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .mv-child-cpn .mv-details li
    {

        margin: 0 0 20px 0;
    }
    .mv-child-cpn .mv-details img
    {
        width: 240px;
        height: 136px;
        border-radius: 5px;
        border: 1px solid rgba(153,153,153,.5);
    }
    .mv-child-cpn .mv-details .name
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
    .mv-child-cpn .mv-details .artist
    {
        font-size: 12px;
        color: rgb(103,103,103);
    }
</style>