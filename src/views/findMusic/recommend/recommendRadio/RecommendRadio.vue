<template>
  <div class="rec-radio">
    <div @click="djRadio">
      主播电台
      <i class="iconfont icon-arrow-right1"></i>
    </div>
    <radio-cpn :list="radios"/>
  </div>
</template>

<script>
    import RecommendCpn from "../../../../components/content/recommendCpn/RecommendCpn";
    import {Rec} from "@/network/radio/radio";
    import RadioCpn from "@/components/content/RadioCpn/RadioCpn";
    export default {
        name: "RecommendRadio",
        data()
        {
          return {
              radios:[]
          }
        },
        components: {
          RadioCpn,
            RecommendCpn
        },
        created() {
            Rec().then(data=>{
             // console.log(data.djRadios);
              this.radios=data.djRadios.slice(0,5);
            })
        },
      methods:{
        djRadio()
        {
          this.$router.push('/findMusic/radion')
        }
      }
    }
</script>

<style scoped>
.rec-radio
{
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 20px 0;
  cursor:pointer;
}
</style>