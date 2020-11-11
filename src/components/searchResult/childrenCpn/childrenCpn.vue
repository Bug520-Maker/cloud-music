<template>
    <div class="searchNav">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="routerClick(index)" :class="{active:currentIndex==index}">
                {{item}}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import {search} from "../../../network/searchResult/searchMsg";
    export default {
        name: "childrenCpn",
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
            }
        },
        data()
        {
            return {
                currentIndex:0
            }
        }
        ,
        methods:{
            routerClick(index)
            {
                this.$router.push('/searchResult'+this.path[index]);
                this.currentIndex=index;
                let type=1;
                if(index>=0 &&index <=3)
                {
                    type=Math.pow(10,index);
                }
                else
                {
                    switch (index) {
                        case 4:type=1002;break;
                        case 5:type=1004;break;
                        case 6:type=1006;break;
                    }
                }
                search(this.$store.state.keywords,type).then(data=>{
                    console.log(data.result);
                    this.$store.commit({
                        type:'getSearchList',
                        searchList:data.result
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .searchNav
    {
        border-bottom: 2px solid rgb(225, 225, 225);
    }
    .searchNav ul
    {
        display: flex;
        font-size: 14px;
        margin: 0 0 10px 30px;
    }
    .searchNav ul li
    {
        margin: 0 30px 0 0;
        cursor: pointer;
    }
    .searchNav ul .active
    {
        font-weight: bold;
    }
</style>