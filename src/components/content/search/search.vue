<template>
    <div class="searh-coin">
        <div class="search">
            <i class="iconfont icon-sw_sousuo"></i>
            <input type="text" placeholder="搜索" @keydown="enter($event)" v-model="keywords" @mousedown="inClick($event)" /><!--设置搜索框-->
        </div>
        <div class="micrphone"><!--语音搜索麦克风-->
            <i class="iconfont icon-MicrphoneOutline"></i>
        </div>
    </div>
</template>

<script>
    import {search,searchMult} from "../../../network/searchResult/searchMsg";
    export default {
        name: "search",
        components:{

        },
        data()
        {
            return {
                keywords:'',
                songCount:'',
                songs:[]
            }
        },
        methods:{
            enter(event)
            {
                if(event.keyCode==13&&this.keywords!='')
                {
                    this.$router.push('/searchResult');
                    search(this.keywords).then(data=>{
                        console.log(data);
                        this.songCount=data.result.songCount;
                        this.songs=data.result.songs;
                        this.$store.commit({
                            type:'searchInfo',
                            keywords: this.keywords,
                            songCount:this.songCount,
                            songs:this.songs,
                        })
                    })
                }

            },
            inClick(event)
            {
                event.stopPropagation();//防止搜索时拖拽
            }
        }
    }
</script>

<style scoped>
    .searh-coin
    {
        display: flex;
        height:100% ;
        margin: 0 0 0 20px;
        line-height: 60px;
    }
    .searh-coin .search
    {
        position: relative;
    }
    .searh-coin .search i
    {
        position: absolute;
        left: 12px;
        height: 0px;
        color: rgb(246, 197, 197);
    }
    .searh-coin .search input
    {
        width: 112px;
        border-radius: 18px;
        border: none;
        padding: 10px 30px 10px 34px;
        background: rgba(0,0,0,.1);
        font-size: 12px;
        color: white;
        caret-color:white;
    }
    .searh-coin .search input::-webkit-input-placeholder {
        color: rgb(229, 93, 93);
    }
    .searh-coin .micrphone
    {
        width: 32px;
        height: 32px;
        text-align:center;
        background: rgba(0,0,0,.1);
        border-radius: 50%;
        margin: 14px 0 0 10px;
        line-height: 32px;
    }
    .searh-coin .micrphone i
    {
        color: rgb(246, 197, 197);
    }
</style>