<template>
    <div id="header">
        <tabbar>
            <tabbar-item class="logo"><!--设置logo-->
                <img src="../assets/img/banner/logo.png" alt="logo" @click="imgClick"/>
            </tabbar-item>
            <tabbar-item class="back"><!--设置回退按钮-->
                <div class="left" @click="leftBack()">
                    <i class="iconfont icon-arrow-left"></i>
                </div>
                <div class="right">
                    <i class="iconfont icon-arrow-right"></i>
                </div>
            </tabbar-item>
            <tabbar-item><!--设置搜索框容器-->
                <search></search>
            </tabbar-item>
            <tabbar-item>
                <ul class="operate">
                    <li><i class="iconfont icon-setting-copy-copy" style="font-size: 16px"></i></li>
                    <li><i class="iconfont icon-icon_skin"></i></li>
                    <li><i class="iconfont icon-e-mailletterenvelopepostmail"></i></li>
                    <li><i class="iconfont icon-suofang"></i></li>
                    <li><i class="iconfont icon-mini"></i></li>
                    <li><i class="iconfont icon-zuidahua"></i></li>
                    <li @click="disappear()" ref="dis"><i class="iconfont icon-cha"></i></li>
                </ul>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import tabbar from "../components/common/tabbar/tabbar";              /*tabbar from "./components/tabbar/tabbar";*//*导入头部*/
    import tabbarItem from "../components/common/tabbar/tabbarItem";      //tabbarItem from "./components/tabbar/tabbarItem";/*导入头部Item*/
    import search from "../components/content/search/search";
    export default {
        name: "Header",
        components:{
            tabbar,
            tabbarItem,
            search,
        },
        methods:{
            leftBack()
            {
                history.back();
            },
            imgClick()
            {
                this.$router.push('/findMusic/recommend');
            },
            disappear()
            {
                this.$refs.dis.offsetParent.classList.add('active');
                this.$refs.dis.offsetParent.nextSibling.style.display="block";
            }
        }
    }
</script>

<style scoped>

</style>