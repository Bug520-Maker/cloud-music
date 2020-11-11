<template>
  <div id="app" ref="app">
      <Home></Home>
  </div>
</template>
<script>
   import Home from "./views/Home";
   export default{
     name:'app',
       components: {Home},
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
    background-color:transparent;
    box-shadow: 0px 5px 15px rgba(0,0,0,.2);
      left:50%;
      top:10px;
      transform: translateX(-50%);
      position:relative;
  }
</style>
