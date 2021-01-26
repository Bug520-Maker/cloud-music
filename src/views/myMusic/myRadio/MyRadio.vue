<template>
    <div class="my-radio">
      <h3>我的电台</h3>
      <h4>我订阅的电台{{}}</h4>
      <ul>
        <li v-for="(item,index) in userDj"></li>
      </ul>
    </div>
</template>

<script>
    import {userRadio} from "@/network/myMusic/myRadio/myRadio";

    export default {
        name: "MyRadio",
        data()
        {
          return {
            userDj:[]
          }
        },
      created() {
          userRadio(this.$store.state.userMsg.profile.userId).then(data=>{
            console.log(data);
          })
      }
    }
</script>

<style scoped>
  .my-radio
  {
    height:535px;
    overflow-y: auto;
  }
  .my-radio::-webkit-scrollbar
  {
    width: 2px;
  }
</style>