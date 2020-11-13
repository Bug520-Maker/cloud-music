<template>
    <div class="radion">
        <lunbo></lunbo>
        <banner :category="cateList" @itemClick="banClick"></banner>
    </div>
</template>

<script>
    import {catrgoryRadio, radionBanner} from "../../../network/radio/radio";
    import banner from "./childCpn/banner"
    import {catelistType} from "../../../network/radio/radio";

    import lunbo from "./lunbo";
    import Lunbo from "./lunbo";
    export default {
        name: "radion",
        components:{
            Lunbo,
            banner
        },
        data()
        {
            return {
                cateList: {}
            }

        },
        created() {/*获取电台分类*/
            catrgoryRadio().then(data=>{
                console.log(data);
                this.cateList=data;
            })
        },
       methods:{
           banClick(item)
           {
               console.log(item);
               catelistType(item.id).then(data=>{
                   console.log(data);
               })
           }
       }
    }
</script>

<style scoped>
    .radion
    {
        background-color: pink;
        margin: 25px 0 0 0;
    }
</style>