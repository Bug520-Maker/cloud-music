<template>
    <div class="mvchildcpn">
        <div></div>
        <ul>
            <li v-for="(item,index) in list" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index,item)">
                {{item}}
            </li>
        </ul>
        <router-view class="mvrouter"></router-view>
    </div>
</template>

<script>
   import {newmv} from "../../../network/vision/mv/mvList";

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
            return {
                currentIndex:0
            }
        },
        methods:{
            btnClick(index,item)
            {
                this.currentIndex=index;
                this.$router.push('/vision/mv/'+this.path[index])
                /*mvList(item).then(res=>{
                    console.log(res.data);
                    this.$store.commit({
                        type:'mvList',
                        mvlist:res.data
                    })
                })*/
                newmv(item).then(res=>{
                    //console.log(res);
                    this.$store.commit({
                        type:'newMv',
                        newmv:res.data
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .mvchildcpn ul
    {
        display: flex;
    }
    .mvchildcpn ul li
    {
        font-size: 12px;
        margin: 6px 8px 0 8px;
        padding: 3px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .mvrouter
    {
        /*background-color: pink;最新mv背景颜色*/
        position: absolute;
        left: 25px;
        top: 110px;
        width: 770px;
    }
    .mvchildcpn ul li.active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }

</style>