<template>
    <div class="local-music">
      <input type="button" @click="inpClick()" value="文件夹"/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LocalMusic",
  methods: {
    inpClick() {
      axios({
        url: 'http://localhost:8888/loaclFile'
      }).then(res=> {
        console.log(res.data)
      });
    }
  }
}
</script>

<style scoped>

</style>