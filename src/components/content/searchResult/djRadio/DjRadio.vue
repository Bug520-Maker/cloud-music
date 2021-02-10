<template>
 <div class="dj-radio">
    <ul>
      <li v-for="(item,index) in djRadios" :key="item.id">
        <search-result-cpn>
          <div slot="imgContainer" @click="djRadiosRoute(item)">
            <img :src="item.picUrl+'?param=60y60'" />
          </div>
          <div slot="stateName" class="dj-state-name">
            {{item.name}}
          </div>
          <div slot="creator" class="dj-radio-creator">
            by {{item.dj.nickname}}
          </div>
        </search-result-cpn>
      </li>
    </ul>
 </div>
</template>

<script>
import SearchResultCpn from "@/components/content/searchResultCpn/SearchResultCpn";
export default {
  name: "DjRadio",
  data()
  {
    return {
      djRadios:[]
    }
  },
  components: {SearchResultCpn},
  created() {
    //console.log(this.$store.state.searchList.djRadios);
    this.djRadios=this.$store.state.searchList.djRadios
  },
  methods:{
    djRadiosRoute(item)
    {
      this.$router.push({
        path:'/djradioMsg',
        query:{
          anchorId:item.id/*主播ID*/
        }
      })
    }
  }
}
</script>

<style scoped>
  .dj-radio ul li:nth-child(odd)
  {
    background-color: #f9f9f9;
  }
  .dj-radio ul li:hover
  {
    background-color: #f0f1f2;
  }
  .dj-state-name
  {
    font-size: 12px;
    width:480px
  }
  .dj-radio-creator
  {
    color: #969697;
  }
</style>