<template>
    <div class="歌单">
       <div id="header">
           <div class="title">{{title}} ></div>
           <sheet-child @sheetchild="btnclick"></sheet-child>
       </div>
    </div>
</template>

<script>
    import SheetChild from "./sheetChild";
    export default {
        name: "songSheet",
        components: {SheetChild},
        methods:{
            btnclick(name)
            {
                this.title=name;
            }
        },
        data()
        {
            return {
                title:'华语'
            }
        }
    }
</script>

<style scoped>
    #header
    {
       display: flex;
        justify-content: space-between;
        margin: 60px 0 0 0;
        position: relative;
    }
    .title
    {
        width: 80px;
        padding: 5px 20px;
        text-align: center;
        border: 1px solid rgb(216, 216, 216);
        border-radius: 20px;
    }
</style>