<!--为歌单详情，作者，专辑详情cpn-->
<template>
    <div class="details-page">
        <div class="header">
            <div class="img-container">
                <slot name="imgContainer"></slot>
            </div>
            <!--右边具体信息-->
            <div class="msg">
                <!--设置详情页 标题和tag-->
                <div id="header-title">
                    <div class="details-tag">
                        <slot name="target"></slot>
                    </div>
                    <p class="title">
                        <slot name="title"></slot>
                    </p>
                </div>
                <!--设置详情页 作者-->
                <div id="creator">
                    <slot name="creator"></slot>
                </div>
                <!--详情页 控制按钮-->
                <div id="control-btn">
                    <slot name="controlBtn"></slot>
                </div>
                <div id="targets">
                    <slot name="targetMsg"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TabControl from "@/components/common/tabController/TabControl";
    export default {
        name: "DetailsPage",
      components: {TabControl}
    }
</script>

<style scoped>
    .details-page
    {
        padding: 30px;
    }
    .header
    {
        display: flex;
    }
    .img-container img
    {
        width: 184px;
        border-radius:5px ;
    }
    #creator div,#control-btn div
    {
        display: flex;
    }
    .title
    {
        font-size: 20px;
        font-weight: bolder;
    }
    .msg
    {
        margin: 0 0 0 20px;
    }
    #header-title
    {
        margin: 0 0 15px 0;
    }
    #control-btn
    {
        margin: 10px 0 ;
        font-size: 16px;
    }
    #targets
    {
        font-size: 13px;
    }
    #control-btn button
    {
      border: 1px solid #d8d8d8;
      padding:5px 15px;
      font-size: 14px;
      border-radius: 18px;
      background-color: #ffffff;
      margin: 0 10px 0 0 ;
      outline: none;
    }
    #control-btn button:nth-child(1)
    {
      background-color: #ec4141;
      color: #ffffff;
      border-color:#ec4141 ;
    }
</style>