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
    songUrl:'',
    albumImgUrl:'',
    mvlist:[],/*mv排行*/
    newmv:[],/*最新mv*/
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
    singerLists:[]
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
    /*------------------------搜索-----------------------------*/
    getSongUrl(state,payload)
    {
      state.songUrl=payload.url;
      state.songId=payload.songId
    },
    getAlbumImg(state,payload)
    {
      state.albumImgUrl=payload.albumImgUrl
    },
    mvList(state,payload)/*获取mv排行*/
    {
      state.mvlist=payload.mvlist
    },
    newMv(state,payload)/*获取最新mv*/
    {
      state.newmv=payload.newmv
    },
    mvPlay(state,payload)
    {
      state.mvurldata=payload.mvurldata
    },
    /*获取歌单详情*/
    songListMsg(state,payload)
    {
      state.playlist=payload.playlist
    },
    getSingleInfo(state,payload)
    {
      state.singleDetails=payload.details
    },
    getSingerList(state,payload)
    {
      state.singerLists=payload.singers;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store