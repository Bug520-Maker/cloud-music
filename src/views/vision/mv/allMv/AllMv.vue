<template>
    <div class="all-mv">
        <h3>全部MV</h3>
        <ChooseList :list="['全部','内地','港台','欧美','韩国','日本']"
                    @btn-click="areaClick"
                    :tag="mvType.area">
          <span slot="type">地区:</span>
        </ChooseList>
        <ChooseList :list="['全部','官方版','原声','现场版','网易出品']"
                    @btn-click="typeClick"
                     :tag="mvType.type">
          <span slot="type">类型:</span>
        </ChooseList>
        <ChooseList :list="['上升最快','最热','最新']"
                    @btn-click="sortClick"
                    :tag="mvType.sort">
          <span slot="type">排序:</span>
        </ChooseList>
      <all-mv-body :list="mvList" />
    </div>
</template>

<script>
    import ChooseList from "../../../../components/common/chooseList/ChooseList";
    import {allMv} from "@/network/vision/mv/mvList";
    import AllMvBody from "@/views/vision/mv/allMv/allMVBody/AllMvBody";
    export default {
        name: "AllMv",
        data()
        {
          return {
           mvType:{
             area:'全部',
             type:'全部',
             sort:'最热'
           },
            mvList:[]
          }
        },
        components:{
          AllMvBody,
            ChooseList
        },
      created(){
        this.mvType.area=this.$route.query.area;
        this.mvType.type=this.$route.query.type;
        this.mvType.sort=this.$route.query.sort;
        let {area,type,sort}=this.mvType;
        allMv(area,type,sort,30).then(res=>{
          this.mvList=res.data;
        })
      },
      methods: {
        areaClick(index, item) {
          this.mvType.area=item;
          this.mvCategory();
        },
        typeClick(index, item) {
          this.mvType.type=item;
          this.mvCategory();
        },
        sortClick(index, item) {
          this.mvType.sort=item;
          this.mvCategory();
        },
        mvCategory()
        {
          let {area,type,sort}=this.mvType;
          allMv(area,type,sort,30).then(res=>{
            this.mvList=res.data;
          })
        }
      },

    }
</script>

<style scoped>
    .all-mv
    {
      padding: 20px 30px;
      height: 495px;
      overflow-y: auto;
    }
    .all-mv::-webkit-scrollbar
    {
      width: 2px;
    }
    .all-mv h3
    {
      margin: 0 0 20px 0;
    }
</style>