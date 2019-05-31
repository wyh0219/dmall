<template>
  <div class="load-wrap" v-show="isShow">
    <div class="load"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.load-wrap{
  background: rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  .load{
    position: absolute;
    left: 33%;
    top: 38%;
    margin-left: -64px;
    margin-top: -64px;
    background: #fff url('http://img.dmallcdn.com/common/ea483fae-ca6d-4a26-9da3-ce0f0b3f770c');
    z-index: 1004;
    width: 128px;
    height: 128px;
    background-size: auto 128px;
    background-repeat: no-repeat;
    background-position: 0 0;
    animation: loading .9s steps(25) infinite;
    border-radius: 50%;
    margin: auto;
  }
}
@keyframes loading {
  100%{
    background-position: 2176px 0;
  }
}
</style>
