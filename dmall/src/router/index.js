import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/views/Map'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Classify from '@/views/Classify'
import Vip from '@/views/Vip'
import ShopCar from '@/views/ShopCar'
import My from '@/views/My'
import selectMap from '@/views/SelectMap'
import Address from '@/views/Address'
import Order from '@/views/Order'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/selectMap',
      name: 'SelectMap',
      component: selectMap
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: 'vip',
          name: 'Vip',
          component: Vip
        },
        {
          path: 'shopCar',
          name: 'ShopCar',
          component: ShopCar
        },
        {
          path: 'my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})

const loginPath = ['ShopCar', 'Vip', 'Address', 'Order']
const mapPath = ['Map', 'SelectMap']
router.beforeEach((to, from, next) => {
  if (!store.state.user.localMap && mapPath.indexOf(to.name) === -1) {
    next({
      path: '/map',
      query: {
        callback: to.path
      }
    })
  } else {
    if (document.cookie.indexOf('token') !== -1) {
      next()
    } else {
      if (loginPath.indexOf(to.name) !== -1) {
        next({
          path: '/login',
          query: {
            callback: to.path
          }
        })
      } else {
        next()
      }
    }
  }
})

export default router
