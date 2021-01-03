<template>
    <div class="tab-control">
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:index===currentIndex}" @click="liClick(index)">
                {{item}}
            </li>
        </ul>
        <div v-for="(item,index) in list" :key="index"
             v-show="index===currentIndex"
             class="tab-context">
            <slot :name="item"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
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
            }
        },
        methods:{
            liClick(index)
            {
                this.currentIndex=index;
            }
        }
    }
</script>

<style scoped>
    .tab-control
    {
        margin: 0 0 0 30px;
    }
    .tab-control ul
    {
        display: flex;
    }
    .tab-control ul li
    {
        margin: 0 20px 0 0;
        font-size: 14px;
        cursor: pointer;
        padding: 0 0 3px 0;
    }
    .tab-control ul li.active
    {
        font-weight: bolder;
        border-bottom: 3px solid #ec4141;
    }
    .tab-context
    {
        margin: 8px 0 0 0;
    }
</style>