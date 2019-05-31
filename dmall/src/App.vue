<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/icons/iconfont.css'
import './assets/fonts/iconfont.css'

export default {
  name: 'App',
  mounted () {
    if (document.cookie.indexOf('token') !== -1) {
      this.$store.dispatch('getInfo', this.$api)
      this.$store.dispatch('getCartList')
    }
  }
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
