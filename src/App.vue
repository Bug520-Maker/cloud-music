<template>
  <div id="app" ref="app">
      <Home></Home>
      <task-bar></task-bar>
  </div>
</template>
<script>
   import Home from "./views/Home";
   import TaskBar from "./views/TaskBar";
   export default{
     name:'app',
       components: {TaskBar, Home},
       mounted() {
           let app=this.$refs.app;
           document.onselectstart=new Function("return false");
           app.addEventListener("mousemove",function(event){
               event.preventDefault()
           })
       }

   }
</script>
<style>
  @import "./assets/css/base.css";
  #app
  {
    width:1021px;
    height:669px;
    box-shadow: 0px 10px 15px rgba(0,0,0,.5);
      left:50%;
      top:10px;
      transform: translateX(-50%);
      position:relative;
      background-color:white;
  }
</style>
