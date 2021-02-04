import Vue from 'vue'
import VueRouter from 'vue-router'

import findMusic from "@/router/findMusic/findMusic";
import video from "@/router/video/video";
import search from "@/router/search/search";
import {localMusicRouter,
        downloadManageRouter,
        myCollectionRouter,
        myRadioRouter,
        myYunPanRouter,UserPlayListRouter} from "@/router/myMusic/myMusic";
import {sheetMsgRuoter,
  singerDetailsRuoter,
  solePlayRuoter,
  videoplayRuoter,
  allMvRuoter,
  albumMsgRouter,
  djRadioRouter,
  userMsgRouter,
  } from '@/router/features/features';

/*话题详情页*/
const topicMsg=()=>import('@/views/friend/dynamicMsg/topicDetails');
/*电台分类推荐详情*/
const radioCateMsg=()=>import('@/components/content/RadioCpn/radionCateMsg/RadioCateMsg');
/*数字专辑排行榜*/
const digitalTop=()=>import('@/views/digitalAlbum/childCpn/topList/TopList');

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const friend=()=> import('../views/friend/friend');
const perFM=()=>import('../views/perFM/perFM');
const digitalAlbum=()=>import ('../views/digitalAlbum/DigitalAlbum')

const routes = [
  {
    path: '',
    redirect: '/findMusic'
  },
  findMusic,
  {/*朋友路由*/
    path: '/friend',
    name: 'friend',
    component:friend,
    children: [
      {
        path:'topicMsg',
        name:'topicMsg',
        component:topicMsg
      }
    ]
  },
  {/*私人FM路由*/
    path: '/perFM',
    name: 'perFM',
    component: perFM
  },
  video,
  {/*直播路由*/
    path: '/digitalAlbum',
    name: 'digitalAlbum',
    component: digitalAlbum,
  },
  {
    path:'/digitalTop',
    name:'digitalTop',
    component:digitalTop
  },
  /*独立组件*/
  sheetMsgRuoter,
  singerDetailsRuoter,
  solePlayRuoter,
  videoplayRuoter,
  allMvRuoter,
  albumMsgRouter,
   djRadioRouter,
  userMsgRouter,
  /*搜索*/
  search,
  /*我的音乐*/
  localMusicRouter,
  downloadManageRouter,
  myCollectionRouter,
  myRadioRouter,
  myYunPanRouter,
  UserPlayListRouter,
  {
    path:'/radioCateMsg',
    name:'radioCateMsg',
    component:radioCateMsg
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
