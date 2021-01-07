<template>
  <div class="new-music-head">
    <ul id="title">
      <li v-for="(item,index) in title" :key="index"
          @click="liClick(index)"
          :class="{active:currentIndex===index}">
        {{item}}
      </li>
    </ul>
    <!--content-->
    <div v-for="(item,index) in title" :key="item" v-show="currentIndex===index">
      <slot :name="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "NewMusicHead",
  data()
  {
    return {
       currentIndex:0
    }
  },
  props:{
    title:{
      type:Array,
      default()
      {
        return []
      }
    }
  },
  methods:{
    liClick(index)
    {
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>
.new-music-head #title {
  display: flex;
  margin: 30px auto;
  border: 1px solid rgb(187, 187, 187);
  width: 216px;
  border-radius: 20px;
}

.new-music-head #title li {
  font-size: 12px;
  color: rgb(103, 103, 103);
  padding: 6px 30px;
  border-radius: 20px;
  cursor: pointer;
}

.new-music-head #title .active {
  background-color: rgb(187, 187, 187);
  color: #ffffff;
}
</style>