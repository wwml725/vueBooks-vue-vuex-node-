
import Vue from 'vue'
import App from './App'
import router from './router'
//在每一次进入路由之前 都执行一次这个方法
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title;
  if(to.path==='/list'){
    next()
  }else{
    next()
  }
});

Vue.config.productionTip = false;

/*样式*/
import './styles/index.css'
import './styles/index.less'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.imgtn.bdimg.com/it/u=3779605030,1222595953&fm=27&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
});

import store from "./store/index"

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
