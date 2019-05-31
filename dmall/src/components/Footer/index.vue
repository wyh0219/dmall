<template>
  <footer>
    <router-link to="/index/home" tag="div">
      <i class="iconfont icon-shouye"></i>
      <div>配送到家</div>
    </router-link>
    <router-link to="/index/classify" tag="div">
      <i class="iconfont icon-fenlei-xuanzhong"></i>
      <div>分类</div>
    </router-link>
    <router-link to="/index/vip" tag="div">
      <i class="iconfont icon-youhuiquan-geren-01"></i>
      <div>会员</div>
    </router-link>
    <router-link to="/index/shopCar" tag="div">
      <i class="iconfont icon-gouwuche"></i>
      <div>
        <span>{{count}}</span>
        购物车
      </div>
    </router-link>
    <router-link to="/index/my" tag="div">
      <i class="iconfont icon-wode"></i>
      <div>我的</div>
    </router-link>
  </footer>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.getters.count
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
  @include wh(100%, 50px);
  display: flex;
  font-size: $font-size-l;
  align-items: center;
  &>div{
    flex: 1;
    text-align: center;
    &>div{
      position: relative;
      &>span{
        position: absolute;
        top: -32px;
        left: 6px;
        @include wh(24px, 16px);
        text-align: center;
        line-height: 16px;
        border-radius: 5px;
        font-size: 12px;
        color: #fff;
        background: #ff712b
      }
    }
  }
  &>div.router-link-active{
    color: #ff712b;
  }
}
</style>
