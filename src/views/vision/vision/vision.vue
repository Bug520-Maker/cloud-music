<template>
    <div class="vis">
        <div class="head">
            <div class="title" @click="titleClick">{{title}} >
                <div class="all-video" ref="allVideo"><!--所有视频标签-->
                    <div class="all">全部视频</div>
                    <ul>
                        <li v-for="(item,index) in allVideoTags" @click="liClick(item,index)" :class="{active:currentIndex==index}">{{item.name}}</li>
                    </ul>
                </div>
            </div>
           <vis-child-cpn :list="['现场','翻唱','舞蹈','听BGM','MV','生活','游戏','ACG音乐','最佳饭制']" :path="['xianchang','fanchang','dance','bgm','visMv','life','game','acg','bestfan']" @item-click="cpnClick"></vis-child-cpn>
        </div>
    </div>
</template>

<script>
    import VisChildCpn from "./visChildCpn/visChildCpn";
    import {allvideoList, labelList, Recvideo, visCategory, visGroup} from "../../../network/vision/vis/visList";
    export default {
        name: "vision",
        components: {
            VisChildCpn
        },
        data()
        {
            return {
                title:'现场',
                allVideoTags:[],
                currentIndex:0
            }
        },
        created() {
           /* labelList().then(result=>{
                //console.log(result.data);
                this.allVideoTags=result.data;
            });
            visCategory().then(data=>{
                console.log(data);
            })
            allvideoList().then(data=>{
                console.log(data);
            })*/
        },
        methods:{
            titleClick()
            {
                this.$refs.allVideo.style.display=="none"?this.$refs.allVideo.style.display="block":this.$refs.allVideo.style.display="none";
            },
            cpnClick(item)
            {
                this.title=item;
            },
            liClick(item,index)
            {
                this.currentIndex=index;
                this.title=item.name
                Recvideo(485).then(data=>{
                    console.log(data);
                })
                visGroup(item.id).then(data=>{
                    console.log(data);
                })
            }
        }
    }
</script>

<style scoped>
    .head
    {
        display:flex;
        justify-content: space-between;
    }
    .head .title
    {
        width: 102px;
        height: 28px;
        font-size: 14px;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 20px;
        text-align: center;
        line-height: 28px;
        cursor:pointer;
        position: relative;
    }
    .title .all-video {
        position: absolute;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        border-radius: 8px;
        font-size: 12px;
        width: 580px;
        padding: 20px;
        height: 388px;
        overflow: scroll;
        top: 38px;
        display: none;
    }
    .title .all-video::-webkit-scrollbar
    {
        width: 4px;
    }
    .title .all-video::-webkit-scrollbar-thumb
    {
        height: 100px;
        background-color: rgb(224, 224, 224);
        border-radius: 4px;
    }
    .title .all-video ul
    {
        display: flex;
        flex-wrap: wrap;
    }
    .title .all-video ul li
    {
        width: 100px;
        border-radius: 20px;
        margin: 0px 10px 10px 0;
        width:85px;
    }
    .all
    {
        border-bottom: 1px solid rgb(229, 229, 229);
        text-align: left;
        margin: 0 0 20px 0;
        padding: 10px 0;
    }
    .all-video ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }
</style>