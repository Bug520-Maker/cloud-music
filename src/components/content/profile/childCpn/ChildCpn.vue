<!--为用户登录成功后的小窗封装组件-->
<template>
 <div class="profile-cpn">
   <ul>
     <li v-for="(item,index) in list" :key="item">
        <div><!--字体-->
          <slot :name="item+'-content-icon'"></slot>
        </div><!--内容-->
        <div class="content">{{item}}</div>
        <div class="operate">
          <slot :name="item+'-tip'"></slot>
        </div>
       <div class="enter-btn">
         <slot :name="item+'-enter'"></slot>
       </div>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: "ChildCpn",
  props:{
    list:{
      type:Array,
      default()
      {
        return ['会员中心','等级','商城']
      }
    }
  }
}
</script>

<style scoped>
  .profile-cpn
  {
    width: 100%;
  }
  .profile-cpn ul
  {
    width: 100%;
    padding: 5px 0;
  }
  .profile-cpn ul li
  {
    display: flex;
    padding: 2px 5px 2px 20px;
    cursor: pointer;
  }
  .profile-cpn ul li:hover
  {
    background-color: #f0f1f2;
  }
  .operate
  {
    font-size: 12px;
    color: #cfcfcf;
    float: end;
  }
  .content
  {
    flex: 1;
    color: #373737;
    font-size: 14px;
    margin: 0 0 0 10px;
  }
</style>