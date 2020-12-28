<!--专辑，用户，单曲共享组件-->
<template>
    <div id="outer">
       <slot>
       </slot>
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
    #outer ul li
    {
        display: flex;
        padding: 5px 30px ;
        cursor: pointer;
    }
    #outer ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    #outer ul li:hover
    {
        background-color:rgb(240, 241, 242);
    }
    #outer img
    {
        width: 60px;
        height: 60px;
        border:1px solid rgb(228, 228, 228);
        border-radius: 5px;
    }
</style>