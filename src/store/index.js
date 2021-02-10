import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    /*------------------------搜索-------------------------------------*/
    keyword:'', /*头部搜索框输入的关键字*/
    searchList:{},  /*搜索结果分类 单曲，歌手，专辑，视频 具体信息*/
    /*--------------------------搜索-----------------------------------*/
    songs:[],
    /*-----------------------playCoin---------------------------------*/
    songUrl:'',
    albumImgUrl:'',/*专辑URL*/
    singleDetails:{/*获取搜索结果 单曲信息*/
      name:'',
      alias:[''],
      artists:[''],
      album:{
        name:''
      },
      id:'',
      duration:0
    },
    /*-----------------------playCoin---------------------------------------*/
    mvlist:[],/*mv排行*/
   // newmv:[],/*最新mv*/
    mvurldata:{},/*获取相关视频的url等信息*/
    /*playlist:{
      creator:{
        nickname:''
      }
    },获取歌单详情*/
    songId:'',
    /*获取搜索结果 单曲信息*/
    singerLists:[],
    /**************************************登录状态***************************************/
    loginType:parseInt(window.sessionStorage.getItem('loginType'))||0,
    /**************************用户信息***********************************/
    userMsg:JSON.parse(window.sessionStorage.getItem('userMsg')||JSON.stringify(
        {
          profile:{
            nickname: '未登录',
            avatarUrl:require('../assets/img/login/loginPlaceholder.jpg'),
          }
        },
    )),
    /*************************是否显示loading组件***************/
    loading:false,
    /********************************************/

    /*******用户歌单信息********/
    userSongListMsg:{
      coverImgUrl:'',
      creator: {
        avatarUrl:''
      },
      tags:[],
      trackIds:[]
    },
    /*************/
    /*用户播放模式 随机播放(0) 顺序播放(1) 单曲循环(2)*/
    playMode:0,
    //用户播放列表
    playList:[
      {
        name: "我们的时光",
        id: 29567193,
        ar: [
          {
            id: 6731,
            name: "赵雷",
            alias: []
          }
        ],
        alia: [],
        al: {
          "id": 3048030,
          "name": "吉姆餐厅",
          "picUrl": "https://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
        },
        "dt": 270746,
      }
    ],
    //当前播放歌曲信息
    currentSong:{
      al:{
        id:'',
        name:'',
        picUrl:''
      },
      alia:[],
      ar:[
        {name:'',id:''}
      ],
      dt:0
    },
    //当前歌曲在列表中的索引
    currentSongIndex:0,
    //歌词
    lyricList:[],
    //某一行歌词
    lyric:''
  },
  mutations,
  actions,
  modules: {
  }
})
export default store