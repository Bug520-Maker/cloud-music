<!--新歌榜，飙升榜cpn-->
<template>
  <div class="child-cpn">
    <div id="title">{{ title }}</div>
    <div id="list">
     <ul>
       <li v-for="(item,index) in songList" :key="index">
         <div>
           <img v-lazy="item.coverImgUrl+'?param=172y172'" @click="imgClick(item.id)" alt="暂无图片"/>
         </div>
         <ul class="songlist-container">
           <li v-for="(iten,i) in item.tracks.slice(0,5)" class="songlist" :key="iten.id">
             <p>
               <span>{{ i + 1 }}</span>
               <span class="song-name" @click="playSong(iten)">{{ iten.name }}</span>
             </p>
             <p @click="artistRouter(iten.ar)">{{ ergodic(iten.ar) }}</p>
           </li>
           <li>查看全部 ></li>
         </ul>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficalRank",
  props: {
    title: {
      type: String,
      default() {
        return '歌手榜';
      }
    },
    songList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgClick(id) {
      //console.log(this.officialList[index].id);
      this.$router.push({
        path: '/playListMsg',
        query: {
          playListId:id
        }
      });
    },
    ergodic(arr)//遍历
    {
      let newArr = arr.map((n) => {
        return n.name
      })
      return newArr.join(' / ');
    },
    playSong(iten)
    {
      this.$store.dispatch({
        type:'getSongDetail',
        id:iten.id
      })
    },
    artistRouter(artist)
    {
      this.$router.push({
        path:'/singerDetails',
        query:{
          artistId:artist[0].id
        }
      })
    }
  },
}
</script>

<style scoped>
    #title
    {
        font-size: 20px;
        font-weight: 700;
        margin: 40px 0 20px 0;
    }
    #list >ul >li
    {
        margin: 0 0 20px 0;
        display: flex;
    }
    #list >ul>li>div img
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
    .songlist-container li p:nth-child(1) span:nth-of-type(1)
    {
        color: rgb(236, 65, 65);
        margin: 0 10px 0 0 ;
    }
    .songlist-container li p:nth-child(2) {
      color: #9f9f9f;
    }
    .songlist-container li p:nth-child(2):hover{
      color: #636363;
      cursor:pointer;
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
    .song-name
    {
      cursor: pointer;
    }
</style>