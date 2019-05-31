<template>
  <div>
    <header>
      <span @click="$router.back()">
        <i class="iconfont icon-xiangzuo"></i>
      </span>
      <span>选择地址</span>
      <span></span>
    </header>
    <div class="search">
      <div>
        <input v-model="value" @change="input" type="text" placeholder="小区、街道、大厦">
        <i class="iconfont icon-fangdajing"></i>
      </div>
    </div>
    <List :addressData="addressData" />
    <div class="dw" @click="show = true">
      定位到当前位置
    </div>
    <Load v-show="show" />
    <ul class="address-list">
      <li v-for="(val, index) in addressList" :key="index">
        <div>
          <span>收货人：{{val.name}}</span>
        </div>
        <div>
          <span>手机号：{{val.phone}}</span>
        </div>
        <div><span>具体地址：{{val.location.address + val.address}}</span></div>
        <button @click="edit(index)">编辑</button>
      </li>
    </ul>
    <div class="add-address" @click="$router.push('/address')">
      <button>添加地址</button>
    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import Load from '@/components/Loading'
import map from '@/utils/map'

export default {
  data () {
    return {
      show: false,
      value: '',
      addressData: []
    }
  },
  computed: {
    addressList () {
      return this.$store.state.user.addressList
    }
  },
  components: {
    Load,
    List
  },
  methods: {
    input () {
      map.search(this.value).then(res => {
        this.addressData = res.poiList.pois
        console.log(this.addressData)
      })
    },
    edit (i) {
      this.$router.push({
        path: '/address',
        query: {
          id: this.addressList[i].id
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
.dw{
  width: 100%;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  color: #666;
}
.search{
  @include wh(100%, 50px);
  &>div{
    padding: 0 10px;
    position: relative;
    @include wh(100%, 50px);
    input{
      @include wh(80%, 35px);
      outline: none;
      border: 1px solid #ccc;
      padding: 0 30px;
    }
    .iconfont{
      position: absolute;
      left: 20px;
      top: 8px;
      z-index: 9;
    }
  }
}
.add-address{
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: absolute;
  bottom: 10px;
  left: 0;
  button{
    @include wh(80%,38px);
    background: #ff8143;
    color: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
}
.address-list{
  @include wh(100%,auto);
  padding: 0 10px;
  &>li{
    position: relative;
    &>div{
      height: 35px;
      line-height: 35px;
    }
    &>button{
      position: absolute;
      right: 10px;
      top: 20px;
      @include wh(20%,38px);
      background: #ff8143;
      color: #fff;
      border-radius: 5px;
      margin: 0 auto;
    }
  }
}
</style>
