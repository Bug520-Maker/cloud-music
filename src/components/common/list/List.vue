<template>
    <div class="public-list">
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index,item)">
                {{item}}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            path: {
                type: Array,
                default() {
                    return []
                }
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            },
        },
        data()
        {
            return {
                currentIndex:0,
            }
        },
        methods:{
            btnClick(index,item)
            {
                this.currentIndex=index;
                this.$emit("btnclick",index);
            }
        }
    }
</script>

<style scoped>
    .public-list ul
    {
        display: flex;
        flex-wrap: wrap;
    }
    .public-list
    {
        margin:  0 0 0 20px;
    }
    .public-list ul li
    {
        font-size: 12px;
        margin: 6px 8px 0 8px;
        padding: 2px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .public-list ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }
</style>