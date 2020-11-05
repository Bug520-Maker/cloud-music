<template>
    <div class="singer">
        <ul>
            <li v-for="(item,index) in this.$store.state.searchList.albums">
                <div class="outer">
                    <img :src="item.picUrl" />
                    <p>{{item.name}}</p>
                </div>
                <div class="artist-name">
                    {{item.artist.name}}
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "geshou"
    }
</script>

<style scoped>
    .singer
    {

        margin: 10px 20px 0 30px;
    }
    .singer ul li
    {
        display: flex;
        padding: 5px 0;
    }

    .singer ul li:nth-child(odd)
    {
        background-color: rgb(249, 249, 249);
    }
    .singer ul li:hover
    {
        background-color:rgb(240, 241, 242);
    }
    .singer .outer
    {
        display: flex;

        width: 384px;

    }
    .singer .outer p
    {
        margin:18px 0 0 20px;
        color: rgb(80, 125, 175);
        font-size: 14px;
     }
    .singer .outer img
    {
        width: 60px;
    }
    .artist-name
    {

        float: right;
        font-size: 12px;
        color: rgb(103, 103, 103);
        padding: 20px 0 0 0;
    }
</style>