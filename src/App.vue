<template>
  <div id="app" ref="app">
      <HomeContainer></HomeContainer>
      <task-bar></task-bar>
  </div>
</template>
<script>
   import TaskBar from "./views/TaskBar";
   import HomeContainer from "./views/HomeContainer";
   export default{
     name:'app',
       components: {HomeContainer, TaskBar},
   }

</script>
<style>
  @import "./assets/css/base.css";
</style>
