import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
Vue.use(Vuex)

import search from './search';
import playCoin from "./playCoin";
import login from './login';
import recommend from './recommend'

const store= new Vuex.Store({
  state: {
    //搜索
    ...search,
    //播放，
    ...playCoin,
    //登录状态，用户信息
    ...login,
    //推荐
    ...recommend,
    songId:'',
    singerLists:[{'name':"45"}],

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
  },
  mutations,
  actions,
  modules: {
  }
})
export default store