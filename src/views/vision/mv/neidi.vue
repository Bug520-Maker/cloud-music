<template>
    <div class="neidi">
        <ul class="neidi-mv">
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
        name: "neidi",
        data()
        {
            return{
                mvurl:''
            }
        },
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
    .neidi-mv
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .neidi-mv li
    {

        margin: 0 0 20px 0;
    }
    .neidi-mv img
    {
        width: 240px;
        height: 136px;
        border-radius: 5px;
    }
    .neidi-mv .name
    {
        font-size: 14px;
        color:rgb(55, 55, 55);
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .neidi-mv .artist
    {
        font-size: 12px;
        color: rgb(103,103,103);
    }
</style>