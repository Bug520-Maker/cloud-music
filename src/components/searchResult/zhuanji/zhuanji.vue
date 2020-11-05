<template>
    <div class="zhuanji">
        <ul>
            <li v-for="(item,index) in this.$store.state.searchList.artists">
               <div class="outer">
                   <img :src="item.img1v1Url" />
                   <p>{{item.name}}</p>
               </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "zhuanji"
    }
</script>

<style scoped>
    .zhuanji ul li .outer img
    {
        width: 60px;
        border-radius: 5px;
        border: 1px solid rgb(226, 230, 236);
    }
    .zhuanji ul li
    {
        padding: 5px 0 5px 30px;
        font-size: 14px;
    }
    .zhuanji ul li .outer
    {
        display: flex;
    }
    .zhuanji ul li .outer p
    {
        margin: 18px 0 0 30px;
    }
    .zhuanji ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .zhuanji ul li:hover
    {
        background-color:rgb(240, 241, 242);
    }
</style>