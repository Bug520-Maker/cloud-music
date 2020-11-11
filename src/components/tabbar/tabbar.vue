<!--设置头部banner-->
<template>
    <div class="tabbar" ref="header">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
        methods:{
        },
        mounted() {
            let header=this.$refs.header;
            let outer=header.parentNode.parentNode;
            header.addEventListener('mousedown',function(event){
                let innerL=event.pageX-outer.offsetLeft;//鼠标在盒子内部的距离
                let innerT=event.pageY-outer.offsetTop;
                function fn(event)
                {
                    outer.style.left=(event.pageX-innerL)+"px";
                    outer.style.top=(event.pageY-innerT)+"px";
                }
                document.addEventListener('mousemove',fn);
                document.addEventListener('mouseup',function () {
                        document.removeEventListener('mousemove',fn);
                    })
                //event.preventDefault();
                })
        }

    }
</script>

<style scoped>
    @import "../../assets/font/bannerFont/iconfont.css";
    .tabbar
    {
        height: 60px;
        width: 100%;
        background-color:rgb(236, 65, 65) ;
        display: flex;
        /*line-height: 60px;*/
    }
</style>