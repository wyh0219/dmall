<template>
  <div class="menu-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.menu-wrap{
  @include wh(100%, auto);
  &>div{
    display: flex;
    flex-wrap: wrap;
    dl{
      @include wh(20%, auto);
      padding: 10px 0;
      dt{
        @include wh(75px, 50px);
        img{
          @include wh(100%, auto);
        }
      }
      dd{
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
