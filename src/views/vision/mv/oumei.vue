<template>
    <div class="oumei">
        <ul class="oumei-mv">
            <li v-for="(item,index) in this.$store.state.newmv" :key="index">
                <div>
                    <img  :src="item.cover" @click="playmv(item)">
                    <p class="name">{{item.name}}</p>
                    <p class="artist">{{item.artistName}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mvurl} from "../../../network/vision/mv/mvList";

    export default {
        name: "oumei",
        methods:{
            playmv(item)
            {
                mvurl(item.id).then(res=>{
                    console.log('-----')
                    console.log(res.data);
                    this.mvurl=res.data.url;
                    this.$store.commit({
                        type:'mvPlay',
                        mvurldata:res.data
                    })
                });
                this.$router.push('/videoPlay');
            }
        }
    }
</script>

<style scoped>
    .oumei-mv
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .oumei-mv li
    {
        margin: 0 0 20px 0;

    }
    .oumei-mv img
    {
        width: 240px;
        height: 136px;
        border-radius: 5px;
    }
    .oumei-mv .name
    {
        width: 240px;
        font-size: 14px;
        color:rgb(55, 55, 55);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .oumei-mv .artist
    {
        font-size: 12px;
        color: rgb(103,103,103);
    }
</style>