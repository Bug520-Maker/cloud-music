/*我的音乐*/
const localMusic=()=>import('../../views/myMusic/localMusic/LocalMusic');/*本地音乐*/
const downloadManage=()=>import('../../views/myMusic/download/DownloadManage')/*下载管理*/
const myYunPan=()=>import('../../views/myMusic/myYunPan/MyYunPan');/*我的音乐云盘*/
const myRadio=()=>import('../../views/myMusic/myRadio/MyRadio')/*我的电台*/
const myCollection=()=>import('../../views/myMusic/myCollection/MyCollection')/*我的收藏*/
const UserPlayList=()=>import('../../components/content/userPlayList/UserPlayList')/*我喜欢的音乐*/

export const localMusicRouter =
    {/*本地音乐*/
        path: '/localMusic',
        name: 'localMusic',
        component: localMusic
    };
export const downloadManageRouter=
    {
        path: '/downloadManage',
        name: 'downloadManage',
        component: downloadManage
    };
export const myYunPanRouter =
    {
        path: '/myYunPan',
        name: 'myYunPan',
        component: myYunPan
    };
export const myRadioRouter =
    {
        path: '/myRadio',
        name: 'myRadio',
        component: myRadio
    };
export const myCollectionRouter =
    {
        path: '/myCollection',
        name: 'myCollection',
        component: myCollection
    };
/*我喜欢的音乐*/
export const UserPlayListRouter =
    {
        path: '/UserPlayList',
        name: 'UserPlayList',
        component: UserPlayList
    }