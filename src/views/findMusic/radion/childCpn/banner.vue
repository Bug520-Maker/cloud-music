<template>
    <div class="banner">
        <ul ref="bannerTop">
            <li v-for="(item,index) in category.categories" :key="index" @click="liClick(item)">
                <div class="icon">
                    <img :src="item.pic56x56Url" />
                </div>
                <span class="name">{{item.name}}</span>
            </li>
        </ul>
      <i class="iconfont icon-arrow-right1 rightIcon" @click="rightClick"></i>
      <i class="iconfont icon-arrow-right1 leftIcon" @click="leftClick"></i>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:{
            category:{
                type:Object,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            liClick(index)
            {
                this.$emit('itemClick',index);
            },
          rightClick()
          {
            this.$refs.bannerTop.style.marginLeft='-735px';
          },
          leftClick()
          {
            this.$refs.bannerTop.style.marginLeft='0px'
          }
        },

    }
</script>

<style scoped>
    .banner
    {
       /* background-color: skyblue;*/
        margin: 20px 0 0 0;
      position: relative;
    }
    .banner ul
    {
        display: flex;
        padding: 0 0 0 30px;
      transition: all 1s;
    }
    .banner ul li
    {
        text-align: center;
        margin: 0 40px 0 0;
    }
    .banner ul li .icon img
    {
        width: 30px;
        margin-top:11px ;
    }
    .banner ul li .name
    {
        font-size: 12px;
        color: rgb(103, 103, 103);
    }
    .banner ul li .icon
    {
        text-align: center;
        background-color: rgb( 252, 235, 235);
        width: 52px;
        height: 52px;
        border-radius: 50%;
    }
    /*设置控制按钮*/
    .rightIcon
    {
      color: #d6d6d6;
      position: absolute;
      top: 50%;
      left: 97%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .leftIcon
    {
      color: #d6d6d6;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotateZ(180deg);
      display: inline-block;
      cursor: pointer;
    }
</style>