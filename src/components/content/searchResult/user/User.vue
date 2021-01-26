<!--搜索结果用户-->
<template>
  <div class="user">
    <ul>
      <li v-for="(item,index) in users" @click="userRouter(item)" :key="item.userId">
        <search-result-cpn>
          <div slot="imgContainer" class="user-img"><!--可以获取userId-->
            <img :src="item.avatarUrl+'?param=60y60'" />
          </div>
          <div slot="stateName" class="user-state-name">
            {{item.nickname}}
          </div>
          <div slot="creator" class="user-creator">
            {{item.signature}}
          </div>
        </search-result-cpn>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchResultCpn from "@/components/content/searchResultCpn/SearchResultCpn";
export default {
  name: "User",
  components: {SearchResultCpn},
  data()
  {
    return {
      users:[]
    }
  },
  created() {
    //console.log(this.$store.state.searchList.userprofiles);
    this.users=this.$store.state.searchList.userprofiles
  },
  methods:{
    userRouter(item)
    {
      this.$router.push({
        path:'/userDetail',
        query:{
          userId:item.userId
        }
      })
    }
  }
}
</script>

<style scoped>
  .user ul li:nth-child(even)
  {
    background-color: #f9f9f9;
  }
  .user ul li:hover
  {
    background-color: #f0f1f2;
  }
   .user .user-img img
  {
    border-radius:50px!important;
  }
   .user-state-name
   {
     width: 340px;
   }
   .user-creator
   {
     color: #999999;
     width: 316px;
     text-align: right;
   }
</style>