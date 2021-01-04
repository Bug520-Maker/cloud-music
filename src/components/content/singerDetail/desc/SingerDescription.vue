<template>
    <div class="description">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p class="ti">{{item.ti}}</p>
                <p class="des">{{item.txt}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SingerDescription",
        props:{
            list:{
                type:Array,
                default()
                {
                    return []
                }
            }
        },
        created() {
            console.log(this.list);
        }
    }
</script>

<style scoped>
    .ti
    {
        font-size: 16px;
        font-weight: bolder;
        margin: 0 0 8px 0;
    }
    .des
    {
        font-size: 14px;
        color:#676767;
        line-height: 28px;
        text-indent: 2em;
    }
</style>