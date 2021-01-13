<!--新歌榜，飙升榜cpn-->
<template>
    <div class="child-cpn"  v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading">
        <div id="title">{{title}}</div>
        <ul id="list">
            <li v-for="(item,i) in rankList" :key="i">
                <div>
                    <img v-lazy="item.coverImgUrl+'?param=172y172'" @click="imgClick(i)"/>
                </div>
                <ul class="songlist-container" >
                    <li v-for="(item,index) in songList[i]" class="songlist">
                        <p><span>{{index+1 }}</span> {{ item.name}}</p>
                        <p>{{ergodic(item.ar)}}</p>
                    </li>
                    <li>查看全部 > </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {songListMsg} from "../../../../network/playlist/playlist";

    export default {
        name: "ChildCpn",
        props:{
            rankList:{
                type:Array,
                default()
                {
                    return []
                }
            },
            title:{
                type:String,
                default() {
                    return '歌手榜';
                }
            },
            songList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            imgClick(index)
            {
                //console.log(this.officialList[index].id);
                songListMsg(this.rankList[index].id).then(res=> {
                    //console.log(res.playlist);
                  this.$router.push({
                    path:'/sheetMsg',
                    query:{
                      songListMsg:res.playlist
                    }
                  });
                })
            },
            ergodic(arr)//遍历
            {
                let newArr=arr.map((n)=>{
                    return n.name
                })
                return newArr.join(' / ');
            }
        }
    }
</script>

<style scoped>
    #title
    {
        font-size: 20px;
        font-weight: 700;
        margin: 40px 0 20px 0;
    }
    #list > li
    {
        margin: 0 0 20px 0;
        display: flex;
    }
    #list li >div img
    {
        width: 172px;
        vertical-align: bottom;
        border-radius:8px ;
    }
    .songlist-container
    {
        margin: 0 0 0 35px;
        width: 550px;
    }
    .songlist-container li:last-of-type
    {
        font-size: 12px;
        padding: 5px 0;
        margin: 0 0 0 20px;
    }
    .songlist-container li p:nth-child(1) span
    {
        color: rgb(236, 65, 65);
        margin: 0 10px 0 0 ;
    }
    .songlist-container li p:nth-child(2)
    {
        color: rgb(155, 155, 155);
    }
   .songlist-container .songlist:nth-child(odd)
   {
       background-color: rgb(249, 249, 249);
   }
   .songlist-container li
   {
       display: flex;
       justify-content: space-between;
   }
    .songlist-container .songlist
    {
        width: 530px;
        margin: 5px 0 0 0;
        padding: 10px;
        font-size: 12px;
    }

</style>