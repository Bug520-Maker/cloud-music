import Vue from 'vue'
import VueRouter from 'vue-router'

import findMusic from "@/router/findMusic/findMusic";
import video from "@/router/video/video";
import search from "@/router/search/search";
import {localMusicRouter,downloadManageRouter,myCollectionRouter,myRadioRouter,myYunPanRouter,UserPlayListRouter} from "@/router/myMusic/myMusic";
import {sheetMsgRuoter,singerDetailsRuoter,solePlayRuoter,videoplayRuoter,allMvRuoter} from '@/router/features/features';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const friend=()=> import('../views/friend/friend');
const perFM=()=>import('../views/perFM/perFM');
const zhibo=()=>import ('../views/zhibo/zhibo')

const routes = [
  {
    path: '',
    redirect: '/findMusic'
  },
  findMusic,
  {/*朋友路由*/
    path: '/friend',
    name: 'friend',
    component: friend
  },
  {/*私人FM路由*/
    path: '/perFM',
    name: 'perFM',
    component: perFM
  },
  video,
  {/*直播路由*/
    path: '/zhibo',
    name: 'zhibo',
    component: zhibo
  },
  /*独立组件*/
  sheetMsgRuoter,
  singerDetailsRuoter,
  solePlayRuoter,
  videoplayRuoter,
  allMvRuoter,
  /*搜索*/
  search,
  /*我的音乐*/
  localMusicRouter,
  downloadManageRouter,
  myCollectionRouter,
  myRadioRouter,
  myYunPanRouter,
  UserPlayListRouter
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
