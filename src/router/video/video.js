const vision=()=>import('../../views/vision/vision')
/*导入视频子路由*/
const vis=()=>import('../../views/vision/vision/vision');
const mv=()=>import('../../views/vision/mv/mv');
export default{
    /*视频路由*/
    path:'/vision',
    name:'vision',
    component:vision,
    children:[
        {
            path: '/vision',
            redirect: '/vision/vis'
        },
        {
            path:'vis',
            name:'vis',
            component:vis,
        },
        {
            path:'mv',/*MV路由*/
            name:'mv',
            component:mv
        }
    ]
}