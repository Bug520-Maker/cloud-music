<!--为所有电台分类如 创作翻唱，声音恋人-->
<template>
    <div>
        <radio-cpn :list="cateMsg" :title-text="cate" :categoryId="categoryId"/>
    </div>
</template>

<script>
import {cateRec, cateTop} from "@/network/radio/radio";
import RadioCpn from "../../../../components/content/RadioCpn/RadioCpn";

export default {
  name: "categoryCpn",
  components: {
    RadioCpn
  },
  props: {
    cate: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cateMsg: [],
      categoryId: 0
    }
  },
  created() {
    cateRec().then(res => {
      //console.log(res.data);
      for (let item of res.data) {
        if (item.categoryName === this.cate) {
          this.categoryId = item.categoryId;
          cateTop(item.categoryId, 5).then(data => {
            //console.log(data.djRadios)
            this.cateMsg = data.djRadios.slice(0, 5);
          })
        }
      }
    })
  }
}
</script>

<style scoped>

</style>