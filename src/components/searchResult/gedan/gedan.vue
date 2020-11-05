<template>
  <div class="gedan">
      <ul>
        <li v-for="(item,index) in this.$store.state.searchList.userprofiles">
          <div class="outer">
            <img :src="item.avatarUrl">
            <p>{{item.nickname}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "gedan"
    }
</script>

<style scoped>
  .gedan ul li .outer img
  {
    width: 60px;
  }
</style>