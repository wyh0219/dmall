<template>
  <div class="my-wrap">
    <div class="server">
      <h3>我的服务</h3>
      <ul class="list">
        <li>
          <span class="iconfont">&#xe664;</span>
          <span>会员中心</span>
        </li>
        <li @click="$router.push('/address')">
          <span class="iconfont">&#xe64e;</span>
          <span>收货地址</span>
        </li>
        <li>
          <span class="iconfont">&#xe652;</span>
          <span>帮助中心</span>
        </li>
        <li>
          <span class="iconfont">&#xe60b;</span>
          <span>客服电话</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    info () {
      return this.$store.state.user.info
    }
  }
}
</script>

<style lang="scss" scoped>
.server{
  @include wh(100%, auto);
  h3{
    font-size: 16px;
    font-weight: 400px;
    padding: 10px;
    color: #666;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 25%;
      text-align: center;
      color: #666;
      span:nth-child(1){
        display: block;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
