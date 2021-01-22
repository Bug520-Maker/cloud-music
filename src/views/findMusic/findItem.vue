<template>
    <div class="findItem">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="liClick(index)" :class="{active:currentIndex==index}">
                {{item}}

            </li>
        </ul>
      <keep-alive>
        <router-view ></router-view>
      </keep-alive><!--个性推荐，歌单,主播电台，排行榜等的路由显示-->
    </div>
</template>

<script>
    export default {
        name: "findItem",
        props:{
            path:{
                type:Array,
                default()
                {
                    return []
                }
            },
            list:{
                type:Array,
                default()
                {
                    return []
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
                this.$router.push('/findMusic'+'/'+this.path[index]);
            }
        }
    }
</script>

<style scoped>
    .findItem ul
    {
        display: flex;
    }
    .findItem ul li
    {
        cursor: pointer;
        margin: 0 25px 0 0;
        background-color:transparent;
        height:25px ;
        line-height: 25px;
        padding: 0 0 6px 0;
    }
    .findItem ul .active
    {
        font-size: 18px;
        font-weight: bold;
        border-bottom :4px solid rgb(236, 65, 65);
    }
</style>