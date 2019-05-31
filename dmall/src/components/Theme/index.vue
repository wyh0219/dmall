<template>
  <div class="theme-wrap">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    lifeData: Array
  }
}
</script>

<style lang="scss" scoped>
.title{
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ff8143;
}
</style>
