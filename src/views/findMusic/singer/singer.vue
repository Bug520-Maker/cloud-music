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
import {isScrollBottom} from "@/utils/scroll-to-bottom";

export default {
  name: "singer",
  components: {BodyContent, HeadBanner},
  data() {
    return {
      singers: [],
      types:{},
      isScroll:false,
      hasMore:true
    }
  },
  methods:
      {
        getArtists(cate,limit,offset)
        {
          if(this.hasMore)
          {
            singerCategory(cate.area,cate.type,cate.init,limit,offset).then(data => {
              console.log(data)
              this.hasMore=data.more;
              this.singers=[...this.singers,...data.artists];
              this.$store.commit({
                type: 'getSingerList',
                singers: this.singers
              })
              this.isScroll=true;
            })
          }
        },
        loadMore() {
          if(this.isScroll)
          {
            const isBottom=isScrollBottom(this.$refs.artists.scrollTop,this.$refs.artists.scrollHeight,this.$refs.artists.offsetHeight)
            if(isBottom)
            {
              console.log("滚到底部")
              this.isScroll=false;
              this.getArtists({...this.types},30,this.singers.length);
            }
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
            this.isScroll=true;
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