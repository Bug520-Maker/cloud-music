<!--侧栏-->
<template>
    <div class="sild-bar">
        <navigate>
            <nav-item><!--设置发现音乐，视频，私人FM等结构-->
                <my-list :list="['发现音乐','视频','朋友','直播','私人FM']" :path="['/findMusic','/vision','/friend','/zhibo','/perFM']"></my-list>
                <router-view class="routerView"></router-view><!--在navItem中设置routerView的位置样式-->
            </nav-item>
            <nav-item>
                <div class="title">我的音乐</div>
                <MyListCpn :list="['本地音乐','下载管理','我的音乐云盘','我的电台','我的收藏']"
                           :path="['/localMusic','/downloadManage','/myYunPan','/myRadio','/myCollection']">
                    <div slot="0">
                        <i class="iconfont icon-music-on"></i>
                    </div>
                    <div slot="1">
                        <i class="iconfont icon-download"></i>
                    </div>
                    <div slot="2">
                        <i class="iconfont icon-Ioniconsioscloudoutline"></i>
                    </div>
                    <div slot="3">
                        <i class="iconfont icon-wodediantai"></i>
                    </div>
                    <div slot="4">
                        <i class="iconfont icon-yonghushoucang"></i>
                    </div>
                </MyListCpn>
            </nav-item>
            <nav-item>
                <div class="title" style="margin:20px 0 10px  0">创建的歌单 <span><i class="iconfont icon-jia"></i></span></div>
                <MyListCpn :list="['我喜欢的音乐']">
                    <div slot="0">
                        <i class="iconfont icon-love"></i>
                    </div>
                    <div slot="right-icon" class="rightIcon">
                        <i class="iconfont icon-xinaixin"></i>
                    </div>
                </MyListCpn>
            </nav-item>
        </navigate>
    </div>
</template>

<script>
    import navigate from "../components/common/nav/naviagte";             //navigate from "./components/nav/naviagte";/*导入左侧导航条*/
    import NavItem from "../components/common/nav/navItem"                //NavItem from "./components/nav/navItem";/*导入左侧导航item*/
    import MyList from "../components/common/nav/childComponents/myList"   //MyList from "./components/nav/childComponents/myList";/*导入左侧导航子组件*/
    import MyListCpn from "../components/common/myListCpn/MyListCpn";
    export default {
        name: "SideBar",
        components:{
            NavItem,
            navigate,
            MyList,
            MyListCpn
        }
    }
</script>

<style scoped>
    .title
    {
        font-size: 13px;
        margin: 10px 0;
        padding: 0 0 0 10px;
        color: rgb(159, 159, 159);
    }
    .rightIcon
    {
        border: 1px solid rgb(203, 203, 203);
        padding: 0px 10px;
        height: 25px;
        margin: 5px 0 0 10px;
        line-height: 25px;
        border-radius: 18px;
    }
    .title span
    {
        margin: 0 0 0 70px;
        color: rgb(101, 101, 101);
    }
</style>