<template>
    <div class="radion">
        电台
        <banner :category="cateList" @itemClick="banClick"></banner>
    </div>
</template>

<script>
    import {catrgoryRadio} from "../../../network/radio/radio";
    import banner from "./childCpn/banner"
    import {catelistType} from "../../../network/radio/radio";
    export default {
        name: "radion",
        components:{
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
        background-color: #e7e1cd;
        margin: 25px 0 0 0;
    }
</style>