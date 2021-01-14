export default{
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
    },
    /**********更改loading组件的显示*****************************/
    changeLoadingStatus(state,payload)
    {
        state.loading=payload.loadStatus
    },
    /**********************************************************/

    /******************获取用户歌单信息*******************/
    getUserSongListMsg(state,payload)
    {
        state.userSongListMsg=payload.userSongListMsg
    },
    /***************************************************/

    /******************获取登录的cookie*******************/
    getLoginCookie(state,payload)
    {
      state.loginCookie=payload.cookie
    },

    /*******************token**********************************/
    setToken(state,payload)
    {
        state.token=payload.data;
        window.sessionStorage.setItem('token',payload.data);
    },
    /*******************************************************路由传参保存************************************************/
    getSessionSongList(state,payload)
    {
        state.sessionSongListMsg=payload.data;
        window.sessionStorage.setItem('songList',JSON.stringify(payload.data) )
    }
    /*******************************************************路由传参保存************************************************/
}