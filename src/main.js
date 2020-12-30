import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";
/*轮播图相关插件配置*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading:require('./assets/img/placeholder/OIP.jpg'),
  lazyComponent:true
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
