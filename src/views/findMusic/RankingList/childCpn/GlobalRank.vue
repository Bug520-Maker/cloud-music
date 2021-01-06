<template>
    <div class="global-rank">
        <div id="title">全球榜</div>
      <ul>
        <li v-for="(item,index) in globalRank">
          <msg-list>
            <div slot="imgContainer" class="img-container">
              <img v-lazy="item.coverImgUrl+'?param=137y137'" @click="imgClick(item,index)"/>
              <div class="play">
                <i class="iconfont icon-play3"></i>
              </div>
            </div>
              <div slot="playCount" class="play-count">
                <i class="iconfont icon-play2"></i>
                {{playCount(item.playCount)}}
              </div>
            <div slot="state">{{item.name}}</div>
          </msg-list>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
</template>

<script>
    import MsgList from "@/components/common/msgList/MsgList";
    import {formatPlayCount} from "@/assets/function/formatDt";
    import {songListMsg} from "@/network/playlist/playlist";

    export default {
        name: "GlobalRank",
      components: {MsgList},
      props:{
            globalRank:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
      methods:{
          playCount(count)
          {
            return formatPlayCount(count);
          },
        imgClick(item,index)
        {
          songListMsg(item.id).then(res=> {
            this.$router.push({
              path: '/sheetMsg',
              query: {
                songListMsg: res.playlist
                }
              })
          })
        },
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
    .global-rank ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .global-rank ul li img
    {
        width: 137px;
        border-radius: 5px;
        border: 1px solid rgba(153,153,153,.4);
    }
    .global-rank ul li
    {
      margin: 0 0 15px 0;
      width: 137px;
    }
    .play-count
    {
        position: absolute;
        left:-38px;
        white-space: nowrap;
      line-height: 14px;
    }
    .img-container:hover .play
    {
      display: block;
    }
    .play
    {
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: rgba(255,255,255,.7);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      transform: translate(-50%,-50%);
      line-height: 50px;
      text-align: center;
      display: none;
    }
    .play i
    {
      font-size: 24px;
      color: #ec4141;
    }
</style>