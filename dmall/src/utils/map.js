import AMap from 'AMap'

class Map {
  constructor () {
    this.aMap = {}
    this.placeSearch = ''
    AMap.plugin('AMap.PlaceSearch', () => {
      this.placeSearch = new AMap.PlaceSearch({
        city: '010'
      })
    })
  }
  geolocation () {
    return new Promise((resolve, reject) => {
      /* eslint-disable no-new */
      new AMap.Map('map', {
        resizeEnable: true
      })
      AMap.plugin('AMap.Geolocation', () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 500,
          entenssions: 'all'
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          // 定位成功返回的经度
          resolve(data)
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          reject(data)
        })
      })
    })
  }
  search (val) {
    return new Promise((resolve, reject) => {
      this.placeSearch.search(val, function (status, result) {
        resolve(result)
      })
    })
  }
}

export default new Map()
