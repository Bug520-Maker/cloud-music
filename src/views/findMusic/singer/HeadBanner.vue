<template>
    <div class="head-banner">
        <div class="container">
            <span>语种 :</span><list :list="['全部','华语','欧美','日本','韩国','其他']" @btnclick="divClick"></list>
        </div>
        <div class="container">
            <span>分类 :</span><list :list="['全部','男歌手','女歌手','乐队组合']" @btnclick="divClick"></list>
        </div>
        <div class="container">
            <span>筛选 :</span> <list :list="['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]" @btnclick="divClick"></list>
        </div>
    </div>
</template>

<script>
    import List from "../../../components/list/List";
    import {singerCategory} from "../../../network/singer/singer";
    export default {
        name: "HeadBanner",
        components: {List},
        methods:{
            divClick(index)
            {
                console.log(index);
            },
        },
        data()
        {
            return {
                singer: []
            }
        },
        created() {
            singerCategory().then(data=>{
                console.log(data.artists);
                this.singer=data.artists;
                this.$store.commit({
                    type:'getSingerList',
                    singers:data.artists
                })
            })
        }
    }
</script>

<style scoped>
    .head-banner .container
    {
        display: flex;
    }
    .head-banner .container span
    {
        font-size: 13px;
        display: inline-block;
        margin: 8px 0 0 0;
        white-space: nowrap;
    }
    .head-banner .container .public-list ul li
    {
        background-color: red;
    }
</style>