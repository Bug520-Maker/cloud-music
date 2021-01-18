<template>
 <div class="list-info">
   <div class="infouter">
     <div class="img-container">
       <slot name="imgContainer"></slot>
     </div>
     <div>
       <div class="state">
         <slot name="state"></slot>
       </div>
       <div class="creator">
         <slot name="creator"></slot>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "ListInfo"
}
</script>

<style scoped>
.list-info
{
  padding: 5px 0;
}
.infouter
{
  display: flex;
}
  .list-info:hover
  {
    background-color: #f4f4f4;
    cursor: pointer;
  }
  .img-container
  {
    margin: 0 6px 0 0 ;
  }
  .img-container img
  {
    width: 50px;
    vertical-align: bottom;
  }
  .state
  {
    font-size: 12px;
  }
  .creator{
    font-size: 12px;
    color: #cfcfcf;
  }
</style>