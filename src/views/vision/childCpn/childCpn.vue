<template>
    <div class="child-cpn clearfix">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="liClick(index)" :class="{active:currentIndex===index}">
                {{item}}
            </li>
        </ul>
        <router-view class="routerV"></router-view>
    </div>
</template>

<script>
    export default {
        name: "childCpn",
        props:{
            list:{
                type:Array,
                default()
                {
                    return []
                }
            },
            path:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        data()
        {
            return {currentIndex:0}
        },
        methods:{
            liClick(index)
            {
                this.currentIndex=index;
                this.$router.push('/vision'+'/'+this.path[index]);
            }
        }
    }
</script>

<style scoped>
    .child-cpn
    {
        background-color: white;/*视频的整体背景颜色*/
        height: 536px;
        padding-right: 25px;
    }
    .child-cpn ul
    {
        display: flex;
        /*background-color: pink;*/
        margin: 20px 0 20px 25px;
    }
    .child-cpn ul li
    {
        cursor: pointer;
        margin: 0 25px 0 0;
        background-color:transparent;
        height:25px ;
        line-height: 25px;
    }
    .child-cpn .active
    {
        font-size: 18px;
        font-weight: bold;
    }
    .routerV
    {
       /* background-color:darkseagreen;*/
        margin: 0 0 0 25px;
    }
</style>