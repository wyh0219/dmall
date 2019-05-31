<template>
  <div class="dialog">
    <div class="dialog-wrap">
      <title>确定要删除吗?</title>
      <div class="btns">
        <button>确定</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dialog{
  @include wh(100%, 100%);
  position: fixed;
  left: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  .dialog-wrap{
    @include wh(80%, 120px);
    background: #fff;
    title{
      @include wh(80%, 40px);
      text-align: center;
      line-height: 40px;
    }
    .btns{
      button{
        @include wh(80px, 40px);
      }
    }
  }
}
</style>
