<template>
    <div class="my-list">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="aclick(index,$event)" :class="{active:currentIndex==index}">
                <div class="left-icon"><slot :name="index"></slot></div>
                <div class="context" >
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
                try{
                    this.$router.push(this.path[index]);
                }
                catch (e) {
                    console.log(e);
                }
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
    .my-list ul li:hover
    {
        background-color:rgb(246, 246, 247);
        cursor: pointer;
    }
    .my-list ul li
    {
        display: flex;
        margin: 0 0 3px 0;
    }
    .my-list ul li.active
    {
        background-color:rgb(246, 246, 247);
        font-size: 14px;
    }
    .my-list ul li .left-icon,.right-icon
    {
        font-size: 18px;
        line-height: 35px;
        margin: 0 0 0 8px;
    }
</style>