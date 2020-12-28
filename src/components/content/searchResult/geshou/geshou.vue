<template>
    <div class="singer">
        <search-result-cpn>
            <ul>
                <li v-for="(item,index) in artists">
                    <div class="outer">
                        <img :src="item.img1v1Url" />
                        <p>{{item.name}}</p>
                    </div>
                    <!-- <div class="artist-name">
                         {{item.alia[0]}}
                     </div>-->

                </li>
            </ul>
        </search-result-cpn>
    </div>
</template>

<script>
    import SearchResultCpn from "../../searchResultCpn/SearchResultCpn";
    export default {
        name: "geshou",
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
        }
    }
</script>

<style scoped>
    .singer .outer
    {
        display: flex;
    }
    .singer .outer p
    {
        margin:18px 0 0 20px;
        color: rgb(80, 125, 175);
        font-size: 14px;
     }
    .artist-name
    {

        float: right;
        font-size: 12px;
        color: rgb(103, 103, 103);
        padding: 20px 0 0 0;
    }
</style>