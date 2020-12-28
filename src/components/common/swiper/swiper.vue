<template>
  <div id="swiper">
      <div class="outer clearfix" ref="outer">
        <ul ref="container">
            <slot>
            </slot>
        </ul>
        <!--设置轮播图小圆点-->
        <div class="circle" ref="circle">
        </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'swiper',
    data()
    {
      return {
        index:0,
        imgWidth:0,
      }
    },
    methods:{
        animate(obj,target,callback)/*动画函数*/
        {
            clearInterval(obj.timber);
            obj.timber=setInterval(function()
            {
                var speed=(target-obj.offsetLeft)/10;
                speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
                if(obj.offsetLeft==target)
                {
                    clearInterval(obj.timber);
                    callback&&callback();
                }
                obj.style.left=obj.offsetLeft+speed+'px';
            },20);
        },
        createCircle()/*创建轮播图小圆点*/
        {
            let circle=this.$refs.circle;
            for(let i=0;i<this.$refs.container.children.length-1;i++)//创建小圆点 小于图片个数的1个
            {

                circle.innerHTML+="<div ref='cir'></div>";
                circle.children[i].setAttribute('index',i);
            }
        },
        timberStart()/*当鼠标离开图片时 定时器启动*/
        {
            for(let i=0;i<this.$refs.container.children.length;i++)
            {
                this.$refs.container.children[i].addEventListener('mouseleave',()=>{
                    this.setAuto();
                })
            }
        },
        copyLastNode()/*克隆第一个节点*/
        {
            let node=this.$refs.container.children[0].cloneNode(true);
            this.$refs.container.appendChild(node);
            //console.log(node);
        },
        tuo()
        {
            let liWd=this.$refs.container.children[0].offsetWidth;//li宽度
            let ul=this.$refs.container;
            let outer=this.$refs.outer;
            let all=this.$refs.container.children.length;//图片个数
            let wd=this.$refs.container.children[0].children[0].clientWidth;//图片宽度
            let allLength=(all)*wd;
            let animate=this.animate;
            let circle=this.$refs.circle;
            ul.onmousedown=(event)=>{
                let innerL=event.pageX-(ul.offsetLeft);//鼠标在盒子内部的距离
                function fn(event)
                {
                    if(event.pageX-innerL<=0 && event.pageX-innerL>=(-allLength) )
                    {
                        ul.style.left=(event.pageX-innerL)+"px";
                    }
                }
                document.addEventListener('mouseenter',fn);
                let flag=true;
                document.onmouseup=(event)=> {  /*移除事件 */
                    document.removeEventListener('mousemove',fn);
                    let i=Math.ceil(-(event.clientX-innerL)/400);
                    if(flag) {
                        if (i >= this.$refs.container.children.length) {
                            flag=false;
                            ul.style.left = "0px";
                            animate(ul, -liWd, function () {
                            });
                            for (let i = 0; i < this.$refs.container.children.length - 1; i++)//拍他思想
                            {
                                circle.children[i].style.backgroundColor = 'rgba(206, 206, 206,.5)'
                                circle.children[i].style.border = "3px solid transparent";
                            }
                            circle.children[1].style.backgroundColor = "white";
                            circle.children[1].style.border = "3px solid rgb(193, 193, 193)";
                            this.index = 1;
                        }
                        else {
                            flag=false;
                            for (let i = 0; i < this.$refs.container.children.length - 1; i++)//拍他思想
                            {
                                circle.children[i].style.backgroundColor = 'rgba(206, 206, 206,.5)'
                                circle.children[i].style.border = "3px solid transparent";
                            }
                            // console.log(this.index);
                            if (i == this.$refs.container.children.length - 1) {
                                circle.children[0].style.backgroundColor = "white";
                                circle.children[0].style.border = "3px solid rgb(193, 193, 193)";
                                animate(ul, -(i * liWd), function () {
                                });
                            } else {
                                circle.children[i].style.backgroundColor = "white";
                                circle.children[i].style.border = "3px solid rgb(193, 193, 193)";
                                animate(ul, -(i * liWd), function () {
                                });

                            }
                            this.index++;
                            if(this.index>this.$refs.container.children.length - 1)
                            {
                                this.index=0;
                            }
                        }
                    }
                }
                event.preventDefault()
            }
        },
       setAuto()/*轮播图*/
       {
           let wd=-(this.$refs.container.children[0].children[0].clientWidth);//图片宽度
           let timbe=null;
           let circle=this.$refs.circle;
           clearInterval(timbe);
           /*轮播图切换定时器*/
           timbe=setInterval(()=>{
               if(this.index===this.$refs.container.children.length-1)/*如果图片是最后一张*/
               {
                   this.$refs.container.style.left="0px";
                   this.animate(this.$refs.container,wd,function(){});
                   this.index=0;
                   for(let i=0; i<this.$refs.container.children.length-1; i++)//拍他思想
                   {
                       circle.children[i].style.backgroundColor='rgba(206, 206, 206,.5)'
                       circle.children[i].style.border="3px solid transparent";
                   }
                   circle.children[this.index+1].style.backgroundColor="white";
                   circle.children[this.index+1].style.border="3px solid rgb(193, 193, 193)";
                   this.index++;
               }
               else
               {
                   for(let i=0; i<this.$refs.container.children.length-1; i++)
                   {
                       circle.children[i].style.backgroundColor='rgba(206, 206, 206,.5)'
                       circle.children[i].style.border="3px solid transparent";
                   }
                   if(this.index==this.$refs.container.children.length-2)/*小圆点少一个*/
                   {
                       circle.children[0].style.backgroundColor="white";
                       circle.children[0].style.border="3px solid rgb(193, 193, 193)";
                   }
                   else
                   {
                       circle.children[this.index+1].style.backgroundColor="white";
                       circle.children[this.index+1].style.border="3px solid rgb(193, 193, 193)";
                   }

                   this.animate(this.$refs.container , wd*(this.index+1),function(){});/*轮播图继续*/
                   this.index++;
               }
           },2500);
           /*当鼠标移入图片时，定时器停止*/
           for (let i=0;i<this.$refs.container.children.length;i++)
           this.$refs.container.children[i].addEventListener('mouseenter',function(){
               clearInterval(timbe);
           })
       },
    },
    mounted() {
        this.copyLastNode();/*克隆第一个节点*/
        this.createCircle();/*创建小圆点*/
        this.setAuto();/*调用轮播图函数*/
        this.timberStart();/*轮播图启动*/
        let circle=this.$refs.circle;/*获取轮播图小圆点*/
        let container=this.$refs.container/*获取轮播图外部容器*/
        let animate=this.animate;/*获取动画函数*/
        this.imgWidth=this.$refs.container.children[0].children[0].clientWidth;//获取图片宽度
        /*鼠标移入圆点图片切换*/
        for(let i=0;i<this.$refs.container.children.length-1;i++)
        {
            circle.children[i].addEventListener('mouseover',()=>{
            let index= circle.children[i].getAttribute('index');
                animate(container,(-this.imgWidth)*index,function(){});
                for(let i=0; i<container.children.length-1; i++)
                {
                    circle.children[i].style.backgroundColor='rgb(206, 206, 206,.5)'
                    circle.children[i].style.border="3px solid transparent";
                }
                circle.children[index].style.backgroundColor="white";
                circle.children[index].style.border="3px solid rgb(193, 193, 193)";
                this.index=index-1;//问题
            })
        }
        this.tuo();
    },
}
</script>

<style>
   @import "../../assets/css/base.css";
    *
    {
        margin: 0;
        padding: 0;
    }
    #swiper .outer    /*轮播图ul外部容器*/
    {
        margin:0px auto;
        width:542px;
        height: 199px;
        position: relative;
         overflow: hidden;
        border-radius: 8px;
        background-color: pink;
    }
     #swiper .outer ul
    {
        display: flex;
        /*width: 200px;*/
        position: absolute;
    }
     #swiper .outer .circle
    {
        display: flex;
        height: 30px;
        top:88.8%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
     #swiper .outer .circle div
    {
        width: 10px;
        height: 10px;
        margin: 8px 10px 0 0;
        border-radius: 50%;
        border:3px solid transparent;
        background-clip:content-box;
        background-color: rgba(193, 193, 193,.3);
    }
     #swiper .outer  .circle div:first-of-type
    {
        background-color:white;
        border:3px solid rgb(193, 193, 193);
    }
</style>