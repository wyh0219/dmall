<template>
  <div class="dialog-wrap" v-show="visible">
    <div class="dialog-box">
      <header>
        <span>
          {{title}}
        </span>
        <a href="javascript:;" @click="close">
          <i class="iconfont icon-guanbi-01"></i>
        </a>
      </header>
      <div class="dialog-cont">
        <slot></slot>
      </div>
      <footer>
        <button class="cancel" @click="cancel" v-if="!noCancel">取消</button>
        <button @click="success" v-if="!noSuccess">确定</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String
    },
    visible: {
      type: Boolean
    },
    noCancel: {
      type: Boolean,
      default: false
    },
    noSuccess: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
      this.close()
    },
    success () {
      this.$emit('success')
      this.close()
    },
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrap{
  @include wh(100%,100%);
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  .dialog-box{
    @include wh(80%,200px);
    background: #fff;
    margin: 150px auto;
    position: relative;
    header{
      @include wh(100%,50px);
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      &>a{
        @include wh(20px,20px);
        position: absolute;
        right: 10px;
        top: 0px;
        color: #000;
        &>.iconfont[data-v-3d73e6a6]{
          font-size: 14px;
        }
      }
    }
    .dialog-cont{
      padding: 30px;
      input{
        outline: none;
        border: 1px solid #ccc;
        padding: 0 10px;
        @include wh(100%,30px);
      }
    }
    footer{
      @include wh(100%,44px);
      text-align: center;
      line-height: 44px;
      position: absolute;
      bottom: 0;
      left: 0;
      button{
        @include wh(80px,40px);
        display: inline-block;
        border-radius: 5px;
        background: #4d95e7;
        color: #fff;
        margin: 0 auto;
      }
      button.cancel{
        background: #fff;
        color: #000;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
