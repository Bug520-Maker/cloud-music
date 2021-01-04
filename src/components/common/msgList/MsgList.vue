<!--为所有列表item封装cpn-->
<template>
    <div>
        <div class="item">
            <!--图片-->
            <div class="img-container">
                <slot name="imgContainer"></slot>
            </div>
            <!--时长-->
            <div class="duration">
                <slot name="duration"></slot>
            </div>
            <!--playCount-->
            <div class="playCount">
                <slot name="playCount"></slot>
            </div>
        </div>
        <!--描述-->
        <div class="state">
            <slot name="state"></slot>
        </div>
        <!--作者-->
        <div class="creator">
            <slot name="creator"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsgList",
        props:{
            path:{
                type:String,
                default() {
                    return '';
                }
            }
        },
        divClick(index)
        {
            this.$router.push({
                path:this.path[index]
            })
        }
    }
</script>
<style scoped>

    .img-container img
    {
        border-radius: 7px;
        border: 1px solid rgba(153,153,153,.4);
    }
    .state
    {
        font-size: 14px;
    }
    .item
    {
        position: relative;
    }
    .duration
    {
        position: absolute;
        top:80%;
        left: 85%;
        font-size: 13px;
        color: #ffffff;
    }
    .playCount
    {
        color: #ffffff;
        font-size: 12px;
        position: absolute;
        top: 3%;
        left: 80%;
        transform: translateX(10%);
    }
</style>