<template>
    <div class="head-banner">
        <div class="container">
           <ChooseList :list="['全部','华语','欧美','日本','韩国','其他']" @btn-click="areaClick" tag="全部">
             <span slot="type">
               语种:
             </span>
           </ChooseList>
        </div>
        <div class="container">
            <ChooseList :list="['全部','男歌手','女歌手','乐队组合']" @btn-click="typeClick" tag="全部">
              <span slot="type">分类:</span>
            </ChooseList>
        </div>
        <div class="container">
            <ChooseList :list="['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]"
                        @btn-click="initClick"
                        tag="热门">
                        <span slot="type">筛选:</span>
            </ChooseList>
        </div>
    </div>
</template>

<script>
    import ChooseList from "../../../components/common/chooseList/ChooseList";
    import {singerCategory} from "../../../network/singer/singer";
    export default {
        name: "HeadBanner",
        components: {ChooseList},
        methods:{
            areaClick(index)
            {
                this.param.set(0,"-1");
                this.param.set(1,"7");
                this.param.set(2,"96");
                this.param.set(3,"8");
                this.param.set(4,"16");
                this.param.set(5,"0");
                this.areaParam=this.param.get(index);
                this.singerList();
            },
            typeClick(index)
            {
                if(index==0)
                {
                    index=-1;
                }
                this.typeParam=index;
                this.singerList();
            },
            initClick(index)
            {
                let param=index;
                if(index==0)
                {
                    param=-1;
                }
                else
                {
                    param=String.fromCharCode(index+64);
                }
                this.initParam=param;
                this.singerList();
            },
            singerList()
            {
                singerCategory(this.areaParam,this.typeParam,this.initParam).then(data=>{
                   // console.log(data.artists);
                    this.singer=data.artists;
                    this.$store.commit({
                        type:'getSingerList',
                        singers:data.artists
                    })
                })
            }
        },
        data()
        {
            return {
                singer: [],
                areaParam:'',
                typeParam:'',
                initParam:'',
                param:new Map()
            }
        },
        created() {
            this.singerList();
        }
    }
</script>

<style scoped>
    .head-banner .container
    {
        display: flex;
    }
    .head-banner .container .public-list ul li
    {
        background-color: red;
    }
</style>