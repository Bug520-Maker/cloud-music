import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const findMusic=()=> import("../views/findMusic/findMusic");
const friend=()=> import('../views/friend/friend');
const perFM=()=>import('../views/perFM/perFM');
const vision=()=>import('../views/vision/vision')
const zhibo=()=>import ('../views/zhibo/zhibo')
const search=()=>import('../components/content/searchResult/searchResult')
/*导入子路由*/
const newMusic=()=> import('../views/findMusic/newMusic/newMusic');
const radion=()=> import('../views/findMusic/radion/radion');
const rankingList=()=> import('../views/findMusic/RankingList/RankingList');
const recommend=()=>import('../views/findMusic/recommend/recommend');
const singer=()=> import('../views/findMusic/singer/singer');
const songSheet=()=>import('../views/findMusic/songSheet/songSheet')

const danqu=()=>import('../components/content/searchResult/danqu/danqu')
const gedan=()=>import('../components/content/searchResult/gedan/gedan')
const geshou=()=>import('../components/content/searchResult/geshou/geshou');
const shipin=()=>import('../components/content/searchResult/shipin/shipin');
const yonghu=()=>import('../components/content/searchResult/yonghu/yonghu');
const zhuanji=()=>import('../components/content/searchResult/zhuanji/zhuanji');
const zhubodiant=()=>import ('../components/content/searchResult/zubodiant/zhubodiant')
const geci=()=>import('../components/content/searchResult/geci/geci')

/*导入视频子路由*/
const vis=()=>import('../views/vision/vision/vision');
const mv=()=>import('../views/vision/mv/mv');

/*导入视频中的视频子路由*/


/*视频播放组件路由*/
const videoplay=()=>import('../components/content/VideoPlay/videoPlay');
const singerDetails=()=>import("../components/content/singerDetail/SingerDetai");/*导入歌手信息详情页*/

/*歌单详情组件*/
const sheetMsg=()=>import('../components/content/songSheetList/songSheetList')

/*精品歌单*/
const qualitySheet=()=>import('../components/content/qualitySheet/QualitySheet');

/*独家放送*/
const solePlay=()=>import('../components/content/solePlay/SolePlay')
const routes = [
  {
    path:'',
    redirect:'/findMusic'
  },
  {/*发现音乐路由*/
    path:'/findMusic',
    name:'findMusic',
    component:findMusic,
    children:[
      {
        path:'/findMusic',
        redirect:'/findMusic/recommend'
      },
      {
        path:'recommend',
        name:'recommend',
        component:recommend
      },
      {
        path:'songSheet',
        name:'songSheet',
        component:songSheet,
        children: [
          /*精品歌单*/
          {
            path: 'qualitySheet',
            name:'qualitySheet',
            component:qualitySheet
          }
        ]
      },
      {
        path:'radion',
        name:'radion',
        component:radion
      },
      {
        path:'rankingList',
        name:'rankingList',
        component:rankingList
      },
      {
        path:'singer',
        name:'singer',
        component:singer
      },
      {
        path:'newMusic',
        name:'newMusic',
        component:newMusic
      },
    ]
  },
  {/*朋友路由*/
    path:'/friend',
    name:'friend',
    component:friend
  },
  {/*私人FM路由*/
    path:'/perFM',
    name:'perFM',
    component:perFM
  },
  {/*视频路由*/
    path:'/vision',
    name:'vision',
    component:vision,
    children:[
      {
        path: '/vision',
        redirect: '/vision/vis'
      },
      {
        path:'vis',
        name:'vis',
        component:vis,
      },
      {
        path:'mv',/*MV路由*/
        name:'mv',
        component:mv
      }
    ]
    
  },
  {/*直播路由*/
    path:'/zhibo',
    name:'zhibo',
    component:zhibo
  },
  {/*搜索结果*/
    path:'/searchResult',
    name:"searchResult",
    component:search,
    children: [
      
      {
        path:'danqu',
        name:'danqu',
        component:danqu
      },
      {
        path:'geshou',
        name:'geshou',
        component:geshou
      },
      {
        path: "shipin",
        name:'shipin',
        component:shipin
      },
      
      {
        path:'yonghu',
        name:'yonghu',
        component:yonghu
      },
      {
        path:'zhuanji',
        name:'zhuanji',
        component:zhuanji
      },
      {
        path:'zhubodiant',
        name:'zhubodiant',
        component:zhubodiant
      },
      {
        path:'geci',
        name:'geci',
        component:geci
      },
      {
        path: 'gedan',
        name:'gedan',
        component:gedan
      }
    ]
  },
  {
    path: '/videoPlay',
    name:'videoPlay',
    component:videoplay
  },
    /*歌单详情*/
  {
    path:'/sheetMsg',
    name:'/sheetMsg',
    component:sheetMsg
  },
  /*独家放送*/
  {
    path: '/solePlay',
    name: '/solePlay',
    component:solePlay
  },
  /*歌手详情页*/
  {
    path: "/singerDetails",
    name:"/singerDetails",
    component:singerDetails
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
