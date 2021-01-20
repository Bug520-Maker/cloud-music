const search=()=>import('../../components/content/searchResult/searchResult')

const single=()=>import('../../components/content/searchResult/single/Single')
const playList=()=>import('../../components/content/searchResult/playList/PlayList')
const artist=()=>import('../../components/content/searchResult/artist/Artist');
const video=()=>import('../../components/content/searchResult/video/Video');
const user=()=>import('../../components/content/searchResult/user/User');
const album=()=>import('../../components/content/searchResult/album/Album');
const djRadio=()=>import ('../../components/content/searchResult/djRadio/DjRadio')
const lyrics=()=>import('../../components/content/searchResult/lyrics/Lyrics')
export default {
    /*搜索结果*/
    path: '/searchResult',
    name: "searchResult",
    component: search,
    children: [

        {
            path: 'single',
            name: 'single',
            component: single
        },
        {
            path: 'artist',
            name: 'artist',
            component: artist
        },
        {
            path: "video",
            name: 'video',
            component: video
        },

        {
            path: 'user',
            name: 'user',
            component: user
        },
        {
            path: 'album',
            name: 'album',
            component: album
        },
        {
            path: 'djRadio',
            name: 'djRadio',
            component: djRadio
        },
        {
            path: 'lyrics',
            name: 'lyrics',
            component: lyrics
        },
        {
            path: 'playList',
            name: 'playList',
            component: playList
        }
    ]
}