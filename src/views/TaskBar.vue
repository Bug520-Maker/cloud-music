<template>
    <div class="task-bar">
        <div id="img-container">
            <img src="../assets/img/logo/logo.jpg" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskBar"
    }
</script>

<style scoped>
    .task-bar
    {
        position: absolute;
        margin: 5px 0 0 0;
    }
    #img-container
    {
        overflow: hidden;
    }
    #img-container img
    {
        width:50px;
        height: 50px;
        border-radius: 10px;
        vertical-align: bottom;
    }
</style>