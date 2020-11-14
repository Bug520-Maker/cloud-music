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
                    if(event.pageX-innerL>513)
                    {
                        outer.style.left=(event.pageX-innerL)+"px";
                        event.preventDefault();
                    }
                    else if(event.pageX-innerL<=513)
                    {
                        outer.style.left=513+"px";
                        event.preventDefault();
                    }
                    /*垂直方向*/
                    if(event.pageY-innerT>0)
                    {
                        outer.style.top=(event.pageY-innerT)+"px";
                        event.preventDefault();
                    }
                    else if(event.pageY-innerT<=0)
                    {
                        outer.style.top=0+"px";
                        event.preventDefault();
                    }
                }
                document.addEventListener('mousemove',fn);
                document.addEventListener('mouseup',function () {
                        document.removeEventListener('mousemove',fn);
                    })
                event.stopPropagation()
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