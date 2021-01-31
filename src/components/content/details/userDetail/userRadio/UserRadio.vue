<template>

</template>

<script>
import {userPlaylist, userRadio} from "@/network/user/user";

export default {
  name: "UserRadio",
  props:{
    userId:{
      type:String,
      default:''
    }
  },
  created() {
    userPlaylist(this.userId).then(data=>{
      //console.log(data);
    })
  }
}
</script>

<style scoped>

</style>