export default{
    //登录状态
    loginType:parseInt(window.sessionStorage.getItem('loginType'))||0,
    //用户信息
    userMsg:JSON.parse(window.sessionStorage.getItem('userMsg')||JSON.stringify(
        {
            profile:{
                nickname: '未登录',
                avatarUrl:require('../../assets/img/login/loginPlaceholder.jpg'),
            }
        },
    )),
}