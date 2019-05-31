<template>
  <div class="index-page">
    <div class="index-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.index-page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .index-content{
    flex: 1;
    overflow: hidden;
  }
}
</style>
