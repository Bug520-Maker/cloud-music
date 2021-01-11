<template>
   <div>
       <div class="searchNav">
           <ul>
               <li v-for="(item,index) in list" :key="index" @click="routerClick(index)" :class="{active:currentIndex==index}">
                   {{item}}
               </li>
           </ul>
       </div>
       <router-view></router-view>
   </div>
</template>

<script>
    import {search} from "../../../../network/searchResult/searchMsg";
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
            path:{/*得到父组件的path*/
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
                currentIndex:0,
                type:1
            }
        },
        methods:{
            routerClick(index)
            {
                this.currentIndex=index;
                switch (index) {
                    case 0:this.type=1;break; /*单曲*/
                    case 1:this.type=100;break;/*歌手*/
                    case 2:this.type=10;break;/*专辑*/
                    case 3:this.type=1014;break;/*视频*/
                    case 4:this.type=1000;break /*歌单*/
                    case 5:this.type=1006;break;/*歌词*/
                    case 6:this.type=1009;break;/*主播电台*/
                    case 7:this.type=1002;break;/*用户*/
                }
                /*发送请求得到 单曲，歌手，专辑，视频，歌单等分类信息*/
                search(this.$store.state.keyword,this.type).then(data=>{
                     //console.log(data.result);
                    this.$store.commit({
                        type:'getSearchList',
                        searchList:data.result
                    })
                    /*路由跳转*/
                    this.$router.push({
                        path:'/searchResult'+this.path[index],
                    });
                    /*获取结果条目*/
                    let count=data.result.songCount||data.result.artistCount||data.result.albumCount||data.result.videoCount||data.result.playlistCount||data.result.songCount||data.result.djRadiosCount||data.result.userprofileCount;
                    this.$emit('number',count,index);
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