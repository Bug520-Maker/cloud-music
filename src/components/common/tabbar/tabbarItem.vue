<template>
    <div class="tabbar-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbarItem"
    }
</script>

<style scoped>
    /*************设置头部Logo样式****************/
    .logo img
    {
        width: 124px;
        margin: 17px 0 0 0;
        cursor:pointer;
    }
    .logo
    {
        margin: 0 0 0 18px;
        height: 100%;
    }
    /************设置回退按钮样式*******************/
    .back
    {
        display: flex;
        margin:0 0 0 84px;
        height: 100%;
    }
    .back .left
    {
        background-color:rgba(0,0,0,.1);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        text-align: center;
        margin: 18px 5px 0 0;
    }
    .back .right
    {
        background-color:rgba(0,0,0,.1);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        text-align: center;
        margin: 18px 0px 0 5px;
    }
    .back i
    {
        font-size: 20px;
        color: rgb(246, 197, 197);
    }
    .operate
    {
        display: flex;
        margin: 15px 0 0 84px;
      line-height: 30px;
    }
    .operate li:not(:nth-child(1))
    {
        margin: 0 20px 0 0;
    }
    .operate li i
    {
        color: rgb(251, 208, 208);
        font-size: 17px;
    }
    .operate li:hover i
    {
        color: white;
    }

</style>