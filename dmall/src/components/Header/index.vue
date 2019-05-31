<template>
  <header>
    <router-link to="/selectMap" tag="div">
      <i class="iconfont icon-dingwei"></i>
      <span>送至：{{localMap.formattedAddress}}</span>
    </router-link>
  </header>
</template>

<script>
export default {
  computed: {
    localMap () {
      return this.$store.state.user.localMap
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  @include wh(100%,44px);
  padding: 0 10px;
  &>div{
    display: flex;
    align-items: center;
    padding: 10px 0;
    i{
     @include wh(30px,10px);
    }
    span{
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>
