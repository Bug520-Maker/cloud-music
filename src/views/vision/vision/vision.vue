<template>
    <div class="vis">
        <div class="head">
            <div class="title" @click="titleClick">
              {{title}}
              <i class="iconfont icon-arrow-r"></i>
              <!--所有视频标签-->
                <div class="all-video" ref="allVideo">
                    <div class="all" @click="allVideo">全部视频</div>
                    <ul>
                        <li v-for="(item,index) in allVideoTags"
                            @click="liClick(item,index)"
                            :class="{active:currentIndex===index}">{{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
           <vis-child-cpn
               ref="videoTag"
               :list="['现场','翻唱','舞蹈','听BGM','MV','生活','游戏','ACG音乐','最佳饭制']"
               @item-click="cpnClick">
           </vis-child-cpn>
        </div>
      <vis-msg :videoMsg="videoMsg"/>
    </div>
</template>

<script>
    import VisChildCpn from "./visChildCpn/visChildCpn";
    import {allvideoList, labelList, Recvideo, visCategory, visGroup} from "@/network/vision/vis/visList";
    import VisMsg from "@/views/vision/vision/visMsg";

    export default {
        name: "vision",
        components: {
          VisMsg,
          VisChildCpn
        },
        data()
        {
            return {
                title:'现场',
                allVideoTags:[],
                currentIndex:0,
                videoMsg:[]
            }
        },
        created() {
           if(this.$store.state.loginType===1)
           {
             labelList().then(result=>{
               //console.log(result.data);//可以直接取ID
               this.allVideoTags=result.data;
               this.liClick({name:'现场',id:58100},0)
             })
           }
        },
        methods:{
            titleClick()
            {
                this.$refs.allVideo.style.display==="none" ? this.$refs.allVideo.style.display="block":this.$refs.allVideo.style.display="none";
            },
            cpnClick(item)/*子组件点击将 视频标签传过来*/
            {
              //console.log(item);
              this.title=item.name;
              /*获取标签分类下视频*/
              visGroup(item.id).then(data=>{
                //console.log(data.datas);
                this.videoMsg=data.datas;
              })
            },
            /*所有视频标签点击*/
            liClick(item,index)
            {
                this.currentIndex=index;
                this.title=item.name;
                let location=this.$refs.videoTag.list.findIndex((tagName,index)=>{
                return tagName===item.name
              })
              if(location>=0)
              {
                this.$refs.videoTag.btnClick(location,item.name);
              }
              if(this.$store.state.loginType===1)
              {
                /*获取标签分类下视频*/
                visGroup(item.id).then(data=>{
                  //console.log(data.datas);
                  this.videoMsg=data.datas;
                })
              }
            },
          allVideo()
          {
            allvideoList().then(data=>{
              console.log(data);
            })
          }
        }
    }
</script>

<style scoped>
    .vis
    {
      height: 470px;
      overflow-y:auto;
    }
    .vis::-webkit-scrollbar
    {
      width: 2px;
    }
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
      background-color: #ffffff;
       z-index: 9;
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