<!--设置整个应用容器-->
<template>
    <div class="home-container" ref="homeContainer">
        <home></home>
    </div>
</template>

<script>
    import Home from "./Home"
    export default {
        name: "HomeContainer",
        components:{
            Home,
        },
        mounted() {
            let homeContainer=this.$refs.homeContainer;
            document.onselectstart=new Function("return false");
            homeContainer.addEventListener("mousemove",function(event){
                event.preventDefault()
            })
        }
    }
</script>

<style scoped>
    .home-container
    {
        width:1021px;
        height:669px;
        box-shadow: 0px 10px 15px rgba(0,0,0,.5);
        left:50%;
        top:10px;
        transform: translateX(-50%) scale(1);
        position:relative;
        background-color:white;
        transition:all 0.3s ;
        transform-origin: left bottom;
    }
     div.active
    {
         overflow: hidden;
         background-color:white;
         opacity: 0.1;
         transform: scale(0);
    }
</style>