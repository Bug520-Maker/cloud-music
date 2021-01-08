<template>
    <div class="public-list">
      <div class="type">
        <slot name="type"></slot>
      </div>
        <ul>
            <li v-for="(item,index) in list" :key="item" :class="{active:currentIndex===index}" @click="btnClick(index,item)">
                {{item}}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "ChooseList",
        props: {
            path: {
                type: Array,
                default() {
                    return []
                }
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            },
          tag:{
              type:String,
              default:''
          }
        },
        data()
        {
            return {
                currentIndex:0,
            }
        },
      created() {
          this.btnClick(this.list.indexOf(this.tag),this.tag);
      },
      methods:{
            btnClick(index,item)
            {
                this.currentIndex=index;
                this.$emit("btn-click",index,item);
            }
        }
    }
</script>

<style scoped>
    .public-list
    {
      display: flex;
      font-size: 12px;
      color: #373737;
    }
    .type
    {
      margin: 6px 10px 0 0;
      white-space: nowrap;
    }
    .public-list ul
    {
        display: flex;
        flex-wrap: wrap;
    }
    .public-list ul li
    {
        font-size: 12px;
        margin: 6px 8px 0 8px;
        padding: 2px 10px;
        border-radius: 10px;
        color: rgb(103, 103, 103);
        cursor: pointer;
    }
    .public-list ul .active
    {
        color: rgb(237, 65, 65);
        background-color: rgb(252, 235, 235);
    }
</style>