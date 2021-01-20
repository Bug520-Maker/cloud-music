<!--私人FM-->
<template>
    <div class="per-fm">
      <ul>
        <el-carousel :interval="4000" type="card" >
          <el-carousel-item v-for="(item,index) in perSong" :key="index">
            <img :src="item.album.picUrl" />
          </el-carousel-item>
<!--          <li v-for="(item,index) in perSong">
            <img :src="item.album.picUrl" />
          </li>-->
        </el-carousel>

      </ul>
    </div>
</template>

<script>
    import {perFM} from "@/network/perFm/perFM";

    export default {
        name: "perFM",
        data()
        {
          return {
            perSong:[]
          }
        },
      created() {
          perFM().then(data=>{
            console.log(data.data);
            this.perSong=data.data;
          })
      }
    }
</script>

<style scoped>
    .per-fm {
        width: 420px;
        height: 535px;
    }

    .per-fm >ul li img
    {
      width: 200px;
    }
</style>