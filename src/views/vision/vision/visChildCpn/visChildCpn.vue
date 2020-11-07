<template>
    <div class="vis-child-cpn"><!--渲染'现场','翻唱','舞蹈','听BGM','MV','生活','游戏','ACG音乐','最佳饭制-->
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index,item)">
                {{item}}
            </li>
        </ul>
    <router-view></router-view>
    </div>
</template>

<script>
    import {labelList, visCategory, visGroup,allvideoList} from "../../../../network/vision/vis/visList";
    export default {
        name: "visChildCpn",
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
                    this.$emit('item-click',item);
                }
            }
    }
</script>

<style scoped>
    .vis-child-cpn ul
    {
        display: flex;
    }
    .vis-child-cpn ul li
    {
        font-size: 12px;
        margin: 6px 8px 0 8px;
        padding: 3px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .vis-child-cpn ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }

</style>