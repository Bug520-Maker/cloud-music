<template>
    <div class="singer" @scroll="loadMore" ref="artists">
        <head-banner @type="category" @area="category" @init="category"></head-banner>
        <body-content></body-content>
    </div>
</template>

<script>
import HeadBanner from "./HeadBanner";
import BodyContent from "./BodyContent";
import {singerCategory} from "@/network/singer/singer";

export default {
  name: "singer",
  components: {BodyContent, HeadBanner},
  data() {
    return {
      singers: [],
      types:{}
    }
  },
  methods:
      {
        getArtists(cate,limit,offset)
        {
          singerCategory(cate.area,cate.type,cate.init,limit,offset).then(data => {
            this.singers=[...this.singers,...data.artists];
             this.$store.commit({
              type: 'getSingerList',
              singers: this.singers
            })
          })
        },
        loadMore() {
          const slide1Bottom=this.$refs.artists.scrollHeight-this.$refs.artists.offsetHeight===(Math.floor(this.$refs.artists.scrollTop));
          const slide2Bottom=this.$refs.artists.scrollHeight-this.$refs.artists.offsetHeight===(Math.ceil(this.$refs.artists.scrollTop));
          if(slide1Bottom||slide2Bottom)
          {
            console.log(this.singers.length)
            this.getArtists({...this.types},30,this.singers.length);
          }

        },
        category(cate)
        {
          this.types=cate;
          singerCategory(cate.area,cate.type,cate.init,30).then(data=>{
            this.singers=data.artists
            this.$store.commit({
              type: 'getSingerList',
              singers:data.artists
            })
          })
        }
      }

}
</script>

<style scoped>
    .singer
    {
        height: 460px;
        overflow: auto;
        margin: 20px 0 0 0;
    }
    .singer::-webkit-scrollbar
    {
        width: 2px;
    }
</style>