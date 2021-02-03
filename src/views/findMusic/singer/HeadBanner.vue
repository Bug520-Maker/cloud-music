<template>
    <div class="head-banner">
        <div class="container">
           <ChooseList :list="['全部','华语','欧美','日本','韩国','其他']" @btn-click="areaClick" tag="全部">
             <span slot="type">
               语种:
             </span>
           </ChooseList>
        </div>
        <div class="container">
            <ChooseList :list="['全部','男歌手','女歌手','乐队组合']" @btn-click="typeClick" tag="全部">
              <span slot="type">分类:</span>
            </ChooseList>
        </div>
        <div class="container">
            <ChooseList :list="['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]"
                        @btn-click="initClick"
                        tag="热门">
                        <span slot="type">筛选:</span>
            </ChooseList>
        </div>
    </div>
</template>

<script>
import ChooseList from "../../../components/common/chooseList/ChooseList";
export default {
  name: "HeadBanner",
  components: {ChooseList},
  data() {
    return {
      singer: [],
      areaParam: '',
      typeParam: '',
      initParam: '',
      param: new Map(),
    }
  },
  methods: {
    areaClick(index)
    {
      this.param.set(0, "-1");
      this.param.set(1, "7");
      this.param.set(2, "96");
      this.param.set(3, "8");
      this.param.set(4, "16");
      this.param.set(5, "0");
      this.areaParam = this.param.get(index);
      this.$emit('area',{area:this.areaParam,type:this.typeParam,init:this.initParam});
    },
    typeClick(index)
    {
      if (index === 0)
      {
        index = -1;
      }
      this.typeParam = index;
      this.$emit('type',{area:this.areaParam,type:this.typeParam,init:this.initParam} );
    },
    initClick(index)
    {
      let param = index;
      if (index === 0) {
        param = -1;
      }
      else
        {
        param = String.fromCharCode(index + 64);
      }
      this.initParam = param;
      this.$emit('init',{area:this.areaParam,type:this.typeParam,init:this.initParam});
    }
  }
}
</script>

<style scoped>
    .head-banner .container
    {
        display: flex;
    }
    .head-banner .container .public-list ul li
    {
        background-color: red;
    }
</style>