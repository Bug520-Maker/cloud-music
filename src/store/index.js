import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    songCount:'',
    keywords:'',
    songs:[],
    songUrl:'',
    albumImgUrl:'',
    mvlist:[],/*mv排行*/
    newmv:[],/*最新mv*/
    mvurldata:{},/*获取相关视频的url等信息*/
    playlist:{},/*获取歌单详情*/
    searchList:{}
  },
  mutations: {
    searchInfo(state,payload)
    {
      state.songCount=payload.songCount
      state.keywords=payload.keywords
      state.songs=payload.songs
      
    },
    getSongUrl(state,payload)
    {
      state.songUrl=payload.url;
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
    /*获取搜索后的分类*/
    getSearchList(state,payload)
    {
      state.searchList=payload.searchList
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store