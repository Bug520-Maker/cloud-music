const search=()=>import('../../components/content/searchResult/searchResult')

const danqu=()=>import('../../components/content/searchResult/danqu/danqu')
const gedan=()=>import('../../components/content/searchResult/gedan/gedan')
const geshou=()=>import('../../components/content/searchResult/geshou/geshou');
const shipin=()=>import('../../components/content/searchResult/shipin/shipin');
const yonghu=()=>import('../../components/content/searchResult/yonghu/yonghu');
const zhuanji=()=>import('../../components/content/searchResult/zhuanji/zhuanji');
const zhubodiant=()=>import ('../../components/content/searchResult/zubodiant/zhubodiant')
const geci=()=>import('../../components/content/searchResult/geci/geci')
export default {
    /*搜索结果*/
    path: '/searchResult',
    name: "searchResult",
    component: search,
    children: [

        {
            path: 'danqu',
            name: 'danqu',
            component: danqu
        },
        {
            path: 'geshou',
            name: 'geshou',
            component: geshou
        },
        {
            path: "shipin",
            name: 'shipin',
            component: shipin
        },

        {
            path: 'yonghu',
            name: 'yonghu',
            component: yonghu
        },
        {
            path: 'zhuanji',
            name: 'zhuanji',
            component: zhuanji
        },
        {
            path: 'zhubodiant',
            name: 'zhubodiant',
            component: zhubodiant
        },
        {
            path: 'geci',
            name: 'geci',
            component: geci
        },
        {
            path: 'gedan',
            name: 'gedan',
            component: gedan
        }
    ]
}