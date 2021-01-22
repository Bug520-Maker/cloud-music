<!--侧栏-->
<template>
    <div class="sild-bar">
        <navigate>
            <nav-item><!--设置发现音乐，视频，私人FM等结构-->
                <my-list :list="['发现音乐','视频','朋友','直播','私人FM']"
                         :path="['/findMusic','/vision','/friend','/zhibo','/perFM']"></my-list>
            </nav-item>
            <nav-item>
                <div class="title">我的音乐</div>
                <MyListCpn :list="['本地音乐','下载管理','我的音乐云盘','我的电台','我的收藏']"
                           :path="['/localMusic','/downloadManage','/myYunPan','/myRadio','/myCollection']">
                    <div slot="left-0">
                        <i class="iconfont icon-music-on"></i>
                    </div>
                    <div slot="left-1">
                        <i class="iconfont icon-download"></i>
                    </div>
                    <div slot="left-2">
                        <i class="iconfont icon-Ioniconsioscloudoutline"></i>
                    </div>
                    <div slot="left-3">
                        <i class="iconfont icon-wodediantai"></i>
                    </div>
                    <div slot="left-4">
                        <i class="iconfont icon-yonghushoucang"></i>
                    </div>
                </MyListCpn>
            </nav-item>
            <nav-item>
                <!--创建的歌单-->
              <created-play-list/>
            </nav-item>
        </navigate>
    </div>
</template>

<script>
    import navigate from "../components/common/nav/naviagte";
    import NavItem from "../components/common/nav/navItem"
    import MyList from "../components/common/nav/childComponents/myList"
    import MyListCpn from "../components/common/myListCpn/MyListCpn";
    import CreatedPlayList from "@/views/createdPlayList/CreatedPlayList";
    export default {
        name: "SideBar",
        components:{
          CreatedPlayList,
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
</style>