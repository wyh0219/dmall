<template>
  <div id="map">地图</div>
</template>

<script>
import map from '@/utils/map'

export default {
  mounted () {
    map.geolocation().then((res) => {
      const localMap = {
        formattedAddress: res.formattedAddress,
        position: res.position
      }
      this.$store.commit('setGPS', localMap)
      const path = this.$route.query.callback || '/index/home'
      this.$router.replace(path)
    }).catch((error) => {
      if (error) {
        this.$router.replace('/selectMap')
      }
    })
  }
}
</script>

<style lang="scss">
#map {
  width:100%;
  height: 180px;
}
</style>
