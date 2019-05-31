import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import shopCar from './modules/shopCar'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shopCar
  }
})
