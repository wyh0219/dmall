import axios from 'axios'

const shopCar = {
  namespace: 'shopCar',
  state: {
    cartList: [],
    price: 0
  },
  mutations: {
    setCartList (state, payload) {
      state.cartList = payload
    },
    setPrice (state, data) {
      state.price = data
    }
  },
  getters: {
    count (state) {
      return state.cartList.length
    }
  },
  actions: {
    getCartList ({commit}) {
      axios.get('/api/api/getCar').then(res => {
        commit('setCartList', res.data.data)
        commit('setPrice', res.data.contPrice)
      })
    },
    addCart ({dispatch}, {type, productId}) {
      axios.get('/api/api/addCar', {
        params: {
          type,
          product_id: productId
        }
      }).then(res => {
        dispatch('getCartList')
      })
    },
    changeNum ({dispatch}, { productId, num }) {
      axios.get('/api/api/changeNum', {
        params: {
          id: productId,
          num: num
        }
      }).then(res => {
        dispatch('getCartList')
      })
    },
    changeActive ({commit}, {id, active}) {
      axios.get('/api/api/changeActive', {
        params: {
          id,
          active
        }
      }).then(res => {
        commit('setPrice', res.data.contPrice)
      })
    },
    deleteCartItem ({dispatch}, id) {
      console.log(id)
      axios.get('/api/api/delete/cart', {
        params: {
          id
        }
      }).then(res => {
        dispatch('getCartList')
      })
    }
  }
}

export default shopCar
