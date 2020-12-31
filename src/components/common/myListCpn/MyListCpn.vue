<template>
    <div class="my-list">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="left-icon"><slot name="left-icon"></slot></div>
                <div class="context" @click="aclick(index,$event)" :class="{active:currentIndex==index}">
                    {{item}}
                </div>
                <div class="right-icon">
                    <slot name="right-icon"></slot>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MvListCpn",
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
                default() {
                    return [];
                }
            }
        },
        methods:{
            aclick(index,event)
            {
                this.currentIndex=index;
                /*try{
                    this.$router.push(this.path[index]);
                }
                catch (e) {
                    console.log(e+"您已在当前页");
                }*/
            }
        }
    }
</script>

<style scoped>
    .my-list
    {
        /*background-color: skyblue;*/
    }
    .my-list ul li .context
    {
        font-size: 14px;
        color: black;
        display: block ;
        padding: 8px 0px 8px 10px;
    }
    .my-list ul li .context:hover
    {
        background-color:rgb(246, 246, 247);
        cursor: pointer;
    }
    .my-list ul li
    {

        margin: 0 0 3px 0;
    }
    .my-list ul li .active
    {
        background-color:rgb(246, 246, 247);
        font-size: 14px;
    }
</style>