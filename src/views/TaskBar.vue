<!--最底部task-->
<template>
    <div class="task-bar" ref="taskBar" @click="taskClick()">
        <div id="img-container">
            <img src="../assets/img/logo/logo.jpg" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskBar",
        methods:{
            taskClick()
            {
                this.$refs.taskBar.previousSibling.classList.toggle('active');
            },
        },
        mounted() {
            if(!this.$refs.taskBar.previousSibling.classList.contains('active'))
            {
                this.$refs.taskBar.style.display="none";
            }
        }
    }
</script>

<style scoped>
    .task-bar
    {
        position: absolute;
        margin: 5px 0 0 0;
        top: 708px;
        left: 10px;
    }
    #img-container
    {
        overflow: hidden;
    }
    #img-container img
    {
        width:40px;
        height: 40px;
        border-radius: 7px;
        vertical-align: bottom;
    }
</style>