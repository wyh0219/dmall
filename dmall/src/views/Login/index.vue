<template>
  <div class="my-wrap">
    <header>
      <span @click="$router.back()">
        <i class="iconfont icon-xiangzuo"></i>
      </span>
      <span>验证手机</span>
      <span></span>
    </header>
    <div class="img">
      <img style="-webkit-user-select: none;cursor: zoom-in;" src="http://img.dmallcdn.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H" width="375" height="175">
    </div>
    <section class="form">
      <div class="phone">
        <input v-model="input" type="tel" placeholder="请输入手机号">
        <div class="get-code" @click="getCode">
          <span>获取验证码</span>
        </div>
      </div>
      <div class="phone">
        <input type="text" placeholder="请输入验证码">
      </div>
    </section>
    <div class="sure" @click="login">
      <button>确定</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      input: '',
      code: ''
    }
  },
  created () {

  },
  methods: {
    getCode () {
      if (!this.input) {
        alert('请输入手机号!')
      } else {
        this.$api.get('/api/api/user/msg_code', {
          params: {
            phone: this.input
          }
        }).then(res => {
          this.code = res.data.msg_code.split('[')[1].split(']')[0]
        })
      }
    },
    login () {
      this.$api.post('/api/api/user/login', {
        phone: this.input,
        code: this.code
      }).then(res => {
        if (res.data.code === 0) {
          const path = this.$route.query.callback || '/index/home'
          this.$store.dispatch('getInfo', this.$api)
          this.$router.replace(path)
        } else {
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  @include wh(100%, 50px);
  @include flex();
}
section{
  margin-top: 10px;
  border-top: #f0f0f0;
  background: #fff;
  .phone {
    height: 60px;
    line-height: 46px;
    padding: 8px 10px;
    position: relative;
    padding-right: 120px;
    input{
      height: 30px;
      outline: none;
      border: 0;
    }
    .get-code{
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #ff712b;
      font-size: 14px;
      border: 1px solid #ff712b;
      border-radius: 8px;
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
  }
}
.sure{
  @include wh(100%, 50px);
  padding: 8px 10px;
  button{
     @include wh(90%, 38px);
     background: #ff712b;
     margin: 0 auto;
     color: #fff;
     border-radius: 5px;
  }
}
</style>
