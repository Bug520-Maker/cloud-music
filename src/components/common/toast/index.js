import Toast from "@/components/common/toast/Toast";
const obj={};
obj.install=(Vue)=>{
    //创建组件构造器
    const toastConstructor=Vue.extend(Toast);
    //new 创建组件对象
    const toast=new toastConstructor();
    //将组件对象挂载到元素上
    toast.$mount(document.createElement('div'));
    //document.querySelector('#app').appendChild(toast.$el);
    console.log(document.querySelector('#app'));
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast;
    console.log(toast.$el);
}
export default obj;