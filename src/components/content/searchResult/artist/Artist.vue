<template>
    <div class="singer">
        <ul>
          <li v-for="(item,index) in artists" :key="item.id" @click="singerClick(item)">
           <search-result-cpn>
             <div slot="imgContainer">
               <img v-lazy="item.img1v1Url+'?param=60y60'" />
             </div>
             <div slot="stateName">
               {{item.name}}
             </div>
           </search-result-cpn>
          </li>
        </ul>
    </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    import {singerMsg} from "@/network/singer/singer";
    export default {
        name: "Artist",
        components: {SearchResultCpn},
        data()
        {
          return {
              artists:[]
          }
        },
        created() {
            this.artists=this.$store.state.searchList.artists
            //console.log(this.$store.state.searchList.artists);
        },
        methods:{
          singerClick(item)
          {
            console.log(item)
              /*路由至歌手详情页*/
              this.$router.push({
                path:'/singerDetails',
                query:{
                  artistId:item.id
                }
              })

          }
        }
    }
</script>

<style scoped>
.singer ul li:nth-child(even) {
  background-color: #f9f9f9;
}

.singer ul li:hover {
  background-color: #f0f1f2;
}

</style>