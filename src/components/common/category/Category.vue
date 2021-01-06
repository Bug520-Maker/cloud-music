<!--标签分类列表-->
<template>
  <div class="category-outer">
    <div class="title">
      {{tagTitle}}
    </div>
    <ul class="tag-list">
        <li v-for="(item,index) in list"
            :key="index"
            :class="{active:currentIndex===index}"
            @click="liClick(index,item.name)">
          {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  data()
  {
    return {
      currentIndex:0,
      isActive:false
    }
  },
  props:{
    list:{
      type:Array,
      default()
      {
        return []
      }
    },
    tagTitle:{
      type:String,
      default() {
        return '';
      }
    },
    tag:{
      type:String,
      default:''
    }
  },
  mounted() {
    for(let index in this.list)
    {
      if(this.list[index].name==this.tag)
      {
        this.currentIndex=index;
        break;
      }
    }
  },
  methods:{
    liClick(index,item)
    {
      this.currentIndex=index;
      this.$emit('tagClick',item);
    }
  }
}
</script>

<style scoped>
  .category-outer
  {
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    background-color: #ffffff;
  }
  .title
  {
    height: 50px;
    padding: 0 0 0 30px;
    line-height: 50px;
    font-size: 14px;
  }
  .tag-list
  {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #e5e5e5;
    padding: 5px 20px;
  }
  .tag-list li
  {
    padding: 5px 15px;
    margin: 10px;
    border-radius: 15px;
  }
  .tag-list li.active
  {
    color:#ec4141 ;
    background-color: #fdf5f5;
  }
</style>