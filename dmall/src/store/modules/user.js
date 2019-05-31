const user = {
  namespace: 'user',
  state: {
    info: {},
    localMap: JSON.parse(window.localStorage.getItem('gps_map')),
    addressList: []
  },
  mutations: {
    getInfo (state, info) {
      state.info = info
    },
    setGPS (state, data) {
      state.localMap = data
      window.localStorage.setItem('gps_map', JSON.stringify(data))
    },
    setAddress (state, data) {
      state.addressList = data
    }
  },
  actions: {
    getInfo (context, paylod) {
      paylod.get('/api/api/user/info').then(res => {
        context.commit('getInfo', res.data)
      })
      paylod.get('/api/api/address').then(res => {
        const data = res.data.data.map(item => {
          // if (item.location) {
          //   item.location = JSON.parse(item.location)
          // }
          return item
        })
        context.commit('setAddress', data)
      })
    }
  }
}

export default user
