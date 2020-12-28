<!--搜索结果列表-->
<template>
    <div class="container">
        <p class="find"> {{title}} </p>
        <children-cpn
                :list="['单曲','歌手','专辑','视频','歌单','歌词','主播电台','用户']"
                :path="['/danqu','/geshou','/zhuanji','/shipin','/gedan','/geci','/zhubodiant','/yonghu']"
                @number="counter"
        ></children-cpn>
    </div>
</template>

<script>
    import childrenCpn from "./childrenCpn/childrenCpn";
    import {search} from "../../../network/searchResult/searchMsg";   /*导入搜索函数*/

    export default {
        name: "searchResult",
        components:{
           childrenCpn
        },
        data()
        {
            return {
                keyword:'',
                songCount:0 ,   /*搜索到的歌曲数目*/
                title:''
            }
        },
        created()
        {
            this.keyword=this.$route.query.keyword;
            search(this.keyword).then(data=>{
                this.songCount=data.result.songCount;
                this.$children[0].routerClick(0);//等待解决
            })
        },
        methods:{
            counter(count,index)
            {
                switch(index)
                {
                    case 0:this.title="找到 "+count+" 首单曲";break;
                    case 1:this.title="找到 "+count+" 位歌手";break;
                    case 2:this.title="找到 "+count+" 张专辑";break;
                    case 3:this.title="找到 "+count+" 个视频";break;
                    case 4:this.title="找到 "+count+" 个歌单";break;
                    case 5:this.title="找到 "+count+" 首歌词";break;
                    case 6:this.title="找到 "+count+" 个电台";break;
                    case 7:this.title="找到 "+count+" 位用户";break;
                }
            }
        }
    }
</script>

<style scoped>
    .container
    {
        height: 552px;
        width: 820px;
        background-color:transparent;
        overflow: scroll;
        scrollbar-color: transparent transparent;
    }
    .container::-webkit-scrollbar
    {
        width: 1px;
    }
    .find
    {
        margin: 30px 0 20px 30px;
        font-size: 14px;
        font-weight: bold;
    }
</style>
<!--
{{$store.state.keywords}}
        {{$store.state.songCount}}
-->