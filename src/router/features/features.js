/*所有mv*/
const allMv=()=>import('../../views/vision/mv/allMv/AllMv');
/*视频播放组件路由*/
const videoplay=()=>import('../../components/content/VideoPlay/videoPlay');
/*导入歌手信息详情页*/
const singerDetails=()=>import("../../components/content/singerDetail/SingerDetai");
/*歌单详情组件*/
const sheetMsg=()=>import('../../components/content/songSheetList/songSheetList')
/*独家放送*/
const solePlay=()=>import('../../components/content/solePlay/SolePlay');
/*专辑详情*/
const albumMsg=()=>import('../../components/content/albumDetail/AlbumDetail');
/*视频播放*/
export const videoplayRuoter = {
    path: '/videoPlay',
    name: 'videoPlay',
    component: videoplay,
    beforeEnter:(to,from,next)=>{
        next()
    }
};
/*歌单详情*/
export const sheetMsgRuoter =
    {
        path: '/sheetMsg',
        name: '/sheetMsg',
        component: sheetMsg
    };
/*独家放送*/
export const solePlayRuoter =
    {
        path: '/solePlay',
        name: '/solePlay',
        component: solePlay
    };
/*歌手详情页*/
export const singerDetailsRuoter =
    {
        path: "/singerDetails",
        name: "/singerDetails",
        component: singerDetails
    };
/*所有MV*/
export const allMvRuoter =
    {
        path: '/allMv',
        name: allMv,
        component: allMv
    }
export const albumMsgRouter = {
    path: '/albumMsg',
    name: 'albumMsg',
    component: albumMsg
}