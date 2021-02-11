<template>
 <div class="program">
  <ul>
    <li v-for="(item,index) in programs" :key="item.id">
      <list-info is-flex="flex" :is-play="true">
        <div slot="imgContainer" class="program-img" @click="playdj(item)">
          <img :src="item.coverUrl+'?param=60y60'" />
        </div>
        <div slot="state" class="program-name text-nowrap">{{item.name}}</div>
        <div slot="creator" class="sub">
          <i class="iconfont icon-play4"> </i>
          <span> {{item.listenerCount}}</span>
          <i class="iconfont icon-zanpress1"> </i>
          <span> {{item.likedCount}}</span>
        </div>
        <div slot="time" class="time-dur">
          <div class="text-nowrap">{{duration(item.scheduledPublishTime,"MM-dd")}}</div>
          <div>{{duration(item.duration,"mm:ss")}}</div>
        </div>
      </list-info>
    </li>
  </ul>
 </div>
</template>

<script>
import {program, programmMsg} from "@/network/radio/radio";
import ListInfo from "@/components/common/ListInfo/ListInfo";
import {formatDate} from "@/utils/format/format";
import {checkMusic} from "@/network/public/checkMusic";
export default {
  name: "Programmer",
  components: {ListInfo},
  data()
  {
    return {
      programs:[]
    }
  },
  props:{
    rid:{
      type:Number,
      default:0
    }
  },
  created() {
    //console.log(this.rid)
    program(this.rid).then(data=>{
      //console.log(data.programs);
      this.programs=data.programs;
    })
  },
  methods:{
    duration(item,ft)
    {
      return formatDate(item,ft)
    },
    playdj(item)/*播放电台*/
    {
      /*console.log(item)*/
      this.$store.dispatch({
        type: 'getDjRadioDetail',
        id: item.id,
        picUrl:item.coverUrl
      }).then(id=>{
        this.$store.dispatch({
          type: 'getMusicUrl',
          songId: id
        })
      })
    }
  }
}
</script>

<style scoped>
  .program li:nth-child(odd)
  {
    background-color: #f9f9f9;
  }
  .program-img img
  {
    border: 1px solid rgba(153,153,153,.4);
    width:60px;
    height:60px;
    border-radius: 5px;
  }
  /*节目名称*/
  .program-name
  {
    font-size: 14px;
    color: #363636;
    margin: 20px 10px 0 0;
    width:330px;
  }
  /*播放次数，点赞数*/
  .sub{
    margin: 20px 0 0 0;
  }
  .sub i
  {
    color: #999999;
  }
  .sub span
  {
    margin: 0 30px 0 0;
  }
  /*设置持续时间，发布时间*/
  .time-dur
  {
    display: flex;
    font-size: 12px;
    color:#9b9b9b;
    margin: 24px 0 0 20px;
  }
  .time-dur div:nth-child(1)
  {
    width: 50px;
    margin: 0 30px 0 0;
  }
</style>