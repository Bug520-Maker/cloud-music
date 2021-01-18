<!--mv共享cpn-->
<template>
    <div class="mv-child-cpn">
        <ul class="mv-details">
            <li v-for="(item,index) in mvList" :key="index">
              <msg-list play-count-l="78%">
                <div slot="imgContainer">
                  <img  v-lazy="item.cover+'?param=240y136'" @click="playmv(item)">
                </div>
                <div slot="state" class="name">{{item.name}}</div>
                <div slot="creator" class="artist">{{item.artistName}}</div>
                <div slot="playCount">{{playCount(item.playCount)}}</div>
              </msg-list>
            </li>
        </ul>
    </div>
</template>

<script>
    import MsgList from "@/components/common/msgList/MsgList";
    import {formatPlayCount} from "@/utils/format/format";
    import {mvurl} from "@/network/vision/mv/mvList";

    export default {
        name: "ChildCpn",
      components: {MsgList},
      props:{
            mvList:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
      methods: {
        playCount(item) {
          return formatPlayCount(item)
        },
        playmv(item) {
          console.log(item);
          mvurl(item.id).then(data => {
            this.$router.push({
              path: '/videoPlay',
              query:{
                url: data.data.url,
                mvId:item.id
              }
            })
          })
        }
      }
    }
</script>

<style scoped>
    .mv-child-cpn .mv-details
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .mv-child-cpn .mv-details li
    {

        margin: 0 0 20px 0;
    }
    .mv-child-cpn .mv-details img
    {
        width: 240px;
        height: 136px;
        border-radius: 5px;
        border: 1px solid rgba(153,153,153,.5);
    }
    .mv-child-cpn .mv-details .name
    {
        font-size: 14px;
        color:rgb(55, 55, 55);
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .mv-child-cpn .mv-details .artist
    {
        font-size: 12px;
        color: rgb(103,103,103);
    }
</style>