const findMusic=()=> import("../../views/findMusic/findMusic");
/*导入子路由*/
const newMusic=()=> import('../../views/findMusic/newMusic/newMusic');
const radion=()=> import('../../views/findMusic/radion/radion');
const rankingList=()=> import('../../views/findMusic/RankingList/RankingList');
const recommend=()=>import('../../views/findMusic/recommend/recommend');
const singer=()=> import('../../views/findMusic/singer/singer');
const songSheet=()=>import('../../views/findMusic/songSheet/songSheet')
/*精品歌单*/
const qualitySheet=()=>import('../../components/content/qualitySheet/QualitySheet');

export default {
    path: '/findMusic',
    name: 'findMusic',
    component:findMusic,
    children: [
        {
            path: '/findMusic',
            redirect: '/findMusic/recommend'
        },
        {
            path: 'recommend',
            name: 'recommend',
            component:recommend
        },
        {
            path: 'songSheet',
            name: 'songSheet',
            component: songSheet,
            children: [
                /*精品歌单*/
                {
                    path: 'qualitySheet',
                    name: 'qualitySheet',
                    component: qualitySheet
                }
            ]
        },
        {
            path: 'radion',
            name: 'radion',
            component: radion
        },
        {
            path: 'rankingList',
            name: 'rankingList',
            component: rankingList
        },
        {
            path: 'singer',
            name: 'singer',
            component: singer
        },
        {
            path: 'newMusic',
            name: 'newMusic',
            component: newMusic
        },
    ]
}
