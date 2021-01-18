<!--顶部搜索框-->
<template>
    <div class="searh-coin" @mousedown.stop>
        <div class="search">
            <i class="iconfont icon-sw_sousuo" @click="enter"></i>
            <input type="text" placeholder="搜索" @keydown.enter="enter" v-model="keyword" @focus="changeShow" @blur="changeShowStatus"/><!--设置搜索框-->
            <transition name="search-match">
              <search-match :searchMatch="searchMatch"
                            :keyword="keyword"
                            v-show="isShow && keyword!==''"
                            @search-match="matchRes"
                            />
            </transition>
        </div>
        <div class="micrphone"><!--语音搜索麦克风-->
            <i class="iconfont icon-MicrphoneOutline"></i>
        </div>
    </div>
</template>

<script>
    import SearchMatch from "@/components/content/search/SearchMatch";
    import {searchMsg} from "@/network/searchResult/searchMsg";

    export default {
        name: "search",
        components:{
          SearchMatch
        },
        data()
        {
            return {
                keyword:'',
                songCount:'',
                songs:[],
                searchMatch:{},
                isShow:true
            }
        },
        methods:{
          enter() {
            this.isShow=false;
            this.$router.push({
              path: '/searchResult',
              query: {
                keyword: this.keyword
              }
            });
            this.$store.commit({  /*提取搜索关键字*/
              type: 'getSearchKeyWord',
              keyword: this.keyword
            })

          },
          matchRes(val)
          {
            this.keyword=val;
            this.isShow=false;
          },
          changeShow()
          {
            this.isShow=true;
          },
          changeShowStatus()
          {
            this.isShow=false
          },
        },
        watch:{
          keyword:function(newVal,oldVal)
          {
            if(newVal!==''&&newVal!==null&&newVal.trim().length!==0) {
              searchMsg(newVal).then(data => {
                //console.log(data.result);
                this.searchMatch = data.result;
              })
            }
          }
        },
    }
</script>

<style scoped>
    .searh-coin
    {
        display: flex;
        height:100% ;
        margin: 0 0 0 20px;
        line-height: 60px;
    }
    .searh-coin .search
    {
        position: relative;
    }
    .searh-coin .search i
    {
        position: absolute;
        left: 12px;
        height: 0px;
        color: rgb(246, 197, 197);
    }
    .searh-coin .search input
    {
        width: 112px;
        border-radius: 18px;
        border: none;
        padding: 10px 30px 10px 34px;
        background: rgba(0,0,0,.1);
        font-size: 12px;
        color: white;
        caret-color:white;
    }
    .searh-coin .search input::-webkit-input-placeholder {
        color: rgb(229, 93, 93);
    }
    .searh-coin .micrphone
    {
        width: 32px;
        height: 32px;
        text-align:center;
        background: rgba(0,0,0,.1);
        border-radius: 50%;
        margin: 14px 0 0 10px;
        line-height: 32px;
    }
    .searh-coin .micrphone i
    {
        color: rgb(246, 197, 197);
    }
    .search
    {
      position: relative;
    }
    /*设置搜索建议的动画*/
    .search-match-enter-active{
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.2s,transform 0.2s;
      transform-origin: top center;
    }
    .search-match-enter-to{
      transform: scale(1);
      opacity: 1;
    }
    .search-match-leave-active{
      transition: opacity 0.2s;
      opacity: 1;
    }
    .search-match-leave-to{
      opacity: 0;
    }
</style>