// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import plugin from './plugins'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Dialog from './components/Dialog'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(plugin)
Vue.use(VueAwesomeSwiper)
Vue.use(Dialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
