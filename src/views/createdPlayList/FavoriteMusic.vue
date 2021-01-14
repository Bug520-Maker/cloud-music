<template>
  <div class="favorite-music">
    <div class="title" style="margin:20px 0 10px  0">创建的歌单 <span><i class="iconfont icon-jia"></i></span></div>
  </div>
</template>

<script>
import MyListCpn from "@/components/common/myListCpn/MyListCpn";

export default {
  name: "FavoriteMusic",
  components:{
    MyListCpn
  },
  created() {


  }
}
</script>

<style scoped>
.title
{
  font-size: 13px;
  margin: 10px 0;
  padding: 0 0 0 10px;
  color: rgb(159, 159, 159);
}

.title span
{
  margin: 0 0 0 70px;
  color: rgb(101, 101, 101);
}
</style>