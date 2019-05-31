<template>
  <div class="page2">
    <Swiper :bannerData="bannerData" />
    <Menu>
      <DlEl :allData="menuData" layout='five'></DlEl>
    </Menu>
    <Theme title="生活常伴">
      <List :lifeData="lifeData">
        <!-- <DlEl :allData="lifeData" layout='three'></DlEl> -->
      </List>
    </Theme>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Menu from '@/components/Menu'
import Theme from '@/components/Theme'
import List from '@/components/List'
import DlEl from '@/components/DlEl'
export default {
  data () {
    return {
      bannerData: [],
      menuData: [],
      lifeData: []
    }
  },
  components: {
    Swiper,
    Menu,
    Theme,
    List,
    DlEl
  },
  created () {
    this.$api.get('/api/api/home/banner').then(res => {
      this.bannerData = res.data.data
    })
    this.$api.get('/api/api/home/menu').then(res => {
      this.menuData = res.data.data
    })
    this.$api.get('/api/api/home/life').then(res => {
      this.lifeData = res.data.data
    })
  }
}
</script>

<style>

</style>
