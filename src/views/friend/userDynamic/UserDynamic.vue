<!--用户动态-->
<template>
  <div class="user-dynamic">

  </div>
</template>

<script>
import {userDynamic} from "@/network/friends/hotTopic";

export default {
  name: "UserDynamic",
  created() {
    userDynamic(this.$store.state.userMsg.profile.userId).then(data=>{
      console.log(data);
    })
  }
}
</script>

<style scoped>

</style>