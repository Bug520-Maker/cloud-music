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
                <MyListCpn :list="['本地音乐','下载管理','我的音乐云盘','我的电台','我的收藏']"></MyListCpn>
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
        color: rgba(159, 159, 159);
    }
</style>