<template>
    <div class="body-content"
         v-loading="this.$store.state.loading"
         element-loading-text="载入中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="#ffffff">
        <ul >
            <li v-for="(item,index) in this.$store.state.singerLists" :key="item.id" @click="liClick(index)">
              <div class="cover"></div>
                <div>
                  <img v-lazy="item.img1v1Url+'?param=139y139'" />
                </div>
                <div>
                    {{item.name}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BodyContent",
        methods:{
            liClick(index)
            {
                let singerId=this.$store.state.singerLists[index].id;
                  this.$router.push({
                    path:"/singerDetails",
                    query:{
                     artistId:singerId
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .body-content
    {
        margin: 20px 0 0 0;
    }
    .body-content ul
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .body-content ul li div:nth-of-type(2)
    {
        margin: 5px 0;
        font-family: "微软雅黑";
        font-size: 14px;
    }
    .body-content ul li div:nth-of-type(2) img
    {
        width: 139px;
        border-radius: 8px;
    }
    .body-content ul li
    {
        margin: 0 0  10px 0;
      position: relative;
    }
    .cover{
      background-image: url("../../../assets/img/cover/coverall.png");
      background-position: 0 -3px;
      position: absolute;
      top: 3px;
      width: 139px;
      height: 130px;
      overflow: hidden;
    }
</style>