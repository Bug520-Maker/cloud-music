<template>
    <div id="album">
        <search-result-cpn>
           <ul>
               <li v-for="(item,index) in albums" :key="index">
                   <div slot="img">
                       <img :src="item.picUrl" />
                   </div>
                   <div class="album-name">
                       {{item.name}}
                   </div>
                   <div class="artist-name">
                       {{item.artist.name}}
                   </div>
               </li>
           </ul>
        </search-result-cpn>
    </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    export default {
        name: "zhuanji",
        data()
        {
          return {
              albums:[]
          }
        },
        components: {SearchResultCpn},
        created()
        {
            this.albums=this.$store.state.searchList.albums;
            //console.log(this.$store.state.searchList.albums);
        }
    }
</script>

<style scoped>
    #album
    {
        padding-left: 0px;
    }
    .album-name
    {
        width: 300px;
        margin: 0 0 0 20px;
        color: rgb(80, 125, 175);
        font-size: 13px;
    }
    .artist-name,.album-name
    {
        line-height: 60px;
    }
    .artist-name
    {
        font-size: 12px;
        color: rgb(103, 103, 103);
    }
</style>