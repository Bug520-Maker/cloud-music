import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";

/*element-ui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
/*图片懒加载*/
Vue.use(VueLazyload, {
  loading:require('./assets/img/placeholder/placeholder01.png'),
  error:require('./assets/img/placeholder/placeholder01.png'),
  preLoad:1.3
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
