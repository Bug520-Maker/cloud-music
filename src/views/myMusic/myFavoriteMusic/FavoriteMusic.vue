<template>
  <div class="favorite-music">
    343
  </div>
</template>

<script>
import {userFavorite} from "@/network/myMusic/myFavoriteMusic/favoriteMusic";
import {userDetail} from "@/network/user/user";

export default {
  name: "FavoriteMusic",
  created() {
     /* userFavorite(3937315155).then(data=>{
        console.log(data);
      })*/
    /* userDetail(3937315155).then(data=>{
       console.log(data);
     })*/

  }
}
</script>

<style scoped>

</style>