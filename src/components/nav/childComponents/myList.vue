<!--左侧导航列表 具体内容-->
<template>
    <div class="my-list">
        <slot>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <a href="javascript:;" @click="aclick(index,$event)" :class="{active:currentIndex==index}" >{{item}}</a>
                </li>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "myList",
        data()
        {
          return {
              currentIndex:0
          }
        },
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
                default()
                {
                    return []
                }
            },
        },
        methods:{
            aclick(index,event)
            {
                this.currentIndex=index;
                this.$router.push(this.path[index]);
            }
        },
        computed:{
            isActive()
            {
                return this.$route.path.indexOf(this.path)!==-1;/*当前路径是否为活跃路径 */
            }
        }
    }
</script>

<style scoped>
    .my-list ul li a
    {
        font-size: 14px;
        color: black;
        display: block ;
        padding: 8px 0px 8px 10px;
    }
    .my-list ul li a:hover
    {
        background-color:rgb(246, 246, 247);
    }
    .my-list ul li
    {

        margin: 0 0 3px 0;
    }
    .my-list ul li .active
    {
        background-color:rgb(246, 246, 247);
        font-size: 16px;
        font-weight: bold;
    }
</style>