import Vue from 'vue'
import Vuex from 'vuex'

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
    albumImgUrl:'',
    /*-----------------------playCoin---------------------------------------*/
    mvlist:[],/*mv排行*/
   // newmv:[],/*最新mv*/
    mvurldata:{},/*获取相关视频的url等信息*/
    playlist:{
      creator:{
        nickname:''
      }
    },/*获取歌单详情*/
    songId:'',
    singleDetails:{/*获取搜索结果 单曲信息*/
      name:'',
      alias:[''],
      artists:[''],
      album:{
        name:''
      },
      id:''
    },/*获取搜索结果 单曲信息*/
    singerLists:[],
    /**************************************登录状态***************************************/
    loginType:0,
    /**************************用户信息***********************************/
    userMsg:{
      profile:{
        nickname: '未登录',
        avatarUrl:require('../assets/img/logo/logo.jpg'),
      }
    }
  },
  mutations: {
    /*----------------------搜索--------------------------------*/
    getSearchKeyWord(state,payload) /*头部搜索框输入的关键字*/
    {
      state.keyword=payload.keyword;
    },
    getSearchList(state,payload)/*获取搜索后的分类*/
     {
       state.searchList=payload.searchList
     },
    /*------------------------搜索--------------------------------*/
    
    /*-------------------单曲歌曲列表组件SongSheet-----------------------------------*/
    getSongUrl(state,payload)//获取歌曲URL
    {
      state.songUrl=payload.url;
      state.songId=payload.songId
    },
    getAlbumImg(state,payload)//获取歌曲封面
    {
      state.albumImgUrl=payload.albumImgUrl
    },
    getSingleInfo(state,payload)/*获取一首歌的详细信息*/
    {
      state.singleDetails=payload.details
    },
    /*-------------------单曲歌曲列表组件SongSheet-----------------------------------*/
    
    mvList(state,payload)/*获取mv排行*/
    {
      state.mvlist=payload.mvlist
    },
   /* newMv(state,payload)/!*获取最新mv*!/
    {
      state.newmv=payload.newmv
    },*/
    mvPlay(state,payload)
    {
      state.mvurldata=payload.mvurldata
    },
    /*获取歌单详情*/
    songListMsg(state,payload)
    {
      state.playlist=payload.playlist
    },
   
    getSingerList(state,payload)
    {
      state.singerLists=payload.singers;
    },
    /*获取登录状态*/
    changeLoginType(state,payload)
    {
      state.loginType=payload.loginType;
    },
    userMsg(state,payload)
    {
      state.userMsg=payload.userMsg;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store