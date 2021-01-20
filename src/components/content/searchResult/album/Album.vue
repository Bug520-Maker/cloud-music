<template>
    <div id="album">
        <ul>
          <li v-for="(item,index) in albums" :key="item.id" @click="albumClick(item)">
            <search-result-cpn>
              <div slot="imgContainer">
                <img v-lazy="item.picUrl+'?param=60y60'" />
              </div>
              <div slot="stateName" class="album-state-name">
                {{item.name}}
              </div>
              <div slot="creator" class="creator">
                {{item.artist.name}}
              </div>
            </search-result-cpn>
          </li>
        </ul>
    </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    import {albumContent} from "@/network/singer/singer";
    export default {
        name: "Album",
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

        },
      methods:{
          albumClick(item)
          {
            albumContent(item.id).then(data=>{
              //console.log(data);
              this.$router.push({
                path:'/albumMsg',
                query:{
                  albumMsg:data
                }
              })
            })
          }
      }
    }
</script>

<style scoped>
    #album
    {
        padding-left: 0px;
    }
    #album ul li:nth-child(even)
    {
      background-color: #f9f9f9;
    }
    #album ul li:hover
    {
      background-color: #f0f1f2;
    }
    .album-state-name
    {
      width:400px;
    }

</style>