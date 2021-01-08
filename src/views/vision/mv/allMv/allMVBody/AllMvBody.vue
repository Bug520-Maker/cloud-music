<template>
  <div class="all-mv-body">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <msg-list>
          <div slot="imgContainer" class="img-container">
            <img v-lazy="item.cover+'?param=242y136.8'" />
          </div>
          <div slot="state" class="mv-name">{{item.name}}</div>
          <div slot="creator" class="artist-name">{{item.artistName}}</div>
          <div slot="playCount">{{playCount(item.playCount)}}</div>
        </msg-list>
      </li>
    </ul>
  </div>
</template>

<script>
import MsgList from "@/components/common/msgList/MsgList";
import {formatPlayCount} from "@/assets/function/formatDt";

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
}
.mv-name,.artist-name
{
  width: 240px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.artist-name
{
  font-size: 12px;
  color:#676767
}
</style>