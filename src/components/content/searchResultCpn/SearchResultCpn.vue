<!--专辑，用户，单曲共享组件-->
<template>
    <div id="outer">
      <!--图片-->
       <div class="img-container">
         <slot name="imgContainer"></slot>
       </div>
      <!--歌手或专辑名称-->
       <div class="state-name">
         <slot name="stateName"></slot>
       </div>
      <!--count-->
      <div class="count">
        <slot name="count"></slot>
      </div>
      <div class="creator">
        <slot name="creator"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SearchResultCpn",
        props:{
            list:{
                type:Array,
                default()
                {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    #outer
    {
        display: flex;
        padding: 5px 30px ;
        cursor: pointer;
    }
    #outer .img-container img
    {
      width:60px;
      height:60px;
      border-radius: 5px;
      border: 1px solid rgba(153,153,153,.4);
    }
    .state-name
    {
      margin:18px 0 0 20px;
      font-size: 14px;
    }
    .creator,.count
    {
      font-size: 12px;
      line-height: 60px;
    }
</style>