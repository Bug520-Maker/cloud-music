<template>
  <div class="all-mv-body">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <msg-list>
          <div slot="imgContainer" class="img-container" @click="playMv(item)">
            <img v-lazy="item.cover+'?param=242y136.8'" />
          </div>
          <div slot="state" class="mv-name text-nowrap">{{item.name}}</div>
          <div slot="creator" class="artist-name text-nowrap">{{item.artistName}}</div>
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
  name: "AllMvBody",
  components: {MsgList},
  props:{
    list:{
      type:Array,
      default()
      {
        return []
      }
    }
  },
  methods:{
    playCount(item)
    {
      return formatPlayCount(item);
    },
    playMv(item)
    {
      mvurl(item.id).then(res=>{
        this.$router.push({
          path:'/videoPlay',
          query:{
            url:res.data.url,
            mvId:item.id,
            type:0
          }
        })
      })

    }
  }
}
</script>

<style scoped>
.all-mv-body
{
  margin: 15px 0 0 0;
}
.all-mv-body ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.all-mv-body ul li
{
  margin: 0 0 15px 0;
}
.img-container img {
  width: 240px;
  height: 137px;
}
.mv-name,.artist-name
{
  width: 240px;
}
.artist-name
{
  font-size: 12px;
  color:#676767
}
</style>