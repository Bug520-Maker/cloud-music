<template>
    <div class="banner">
        <ul>
            <li v-for="(item,index) in category.categories" :key="index" @click="liClick(item)">
                <div class="icon">
                    <img :src="item.pic56x56Url" />
                </div>
                <span class="name">{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:{
            category:{
                type:Object,
                default()
                {
                    return []
                }
            }
        },
        methods:{
            liClick(index)
            {
                this.$emit('itemClick',index);
            }
        }
    }
</script>

<style scoped>
    .banner
    {
        /*background-color: skyblue;*/
        margin: 20px 0 0 0;
        overflow: hidden;
    }
    .banner ul
    {
        display: flex;
        padding: 0 0 0 30px;
    }
    .banner ul li
    {
        text-align: center;
        margin: 0 30px 0 0;
    }
    .banner ul li .icon img
    {
        width: 30px;
        margin-top:11px ;
    }
    .banner ul li .name
    {
        font-size: 12px;
        color: rgb(103, 103, 103);
    }
    .banner ul li .icon
    {
        text-align: center;
        background-color: rgb( 252, 235, 235);
        width: 52px;
        height: 52px;
        border-radius: 50%;
    }

</style>