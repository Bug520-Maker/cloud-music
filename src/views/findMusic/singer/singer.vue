<template>
    <div class="singer">
        <head-banner></head-banner>
        <body-content></body-content>
    </div>
</template>

<script>
    import HeadBanner from "./HeadBanner";
    import BodyContent from "./BodyContent";
    export default {
        name: "singer",
        components: {BodyContent, HeadBanner},
        data(){
            return {
                singers:[]
            }
        }

    }
</script>

<style scoped>
    .singer
    {
        height: 460px;
        overflow: auto;
        margin: 20px 0 0 0;
    }
    .singer::-webkit-scrollbar
    {
        width: 2px;
    }
</style>