<template>
  <div class="address">
    <div class="reseive">
      <span @click="$router.back()"><i class="iconfont icon-xiangzuo"></i></span>
      <span>{{title}}</span>
      <span></span>
    </div>
    <div class="form">
      <div>
        <span>姓名</span>
        <input v-if="addressInfo" v-model="addressInfo.name" type="text" placeholder="请输入姓名" />
        <input v-else type="text" v-model="name" placeholder="请输入姓名" />
      </div>
      <div>
        <span>手机号</span>
        <input v-if="addressInfo" v-model="addressInfo.phone" type="text" placeholder="请输入手机号" />
        <input v-else type="text" placeholder="请输入手机号" />
      </div>
      <div>
        <span>地址</span>
        <div>
          <span>北京</span>
          <span v-if="addressInfo">{{address.address}}</span>
          <span v-else @click="$router.push('/selectMap')">请选择地址</span>
        </div>
      </div>
      <div>
        <span>详细地址</span>
        <input v-if="addressInfo" v-model="addressInfo.address" type="text" placeholder="请输入详细地址" />
        <input v-else type="text" placeholder="请输入详细地址" />
      </div>
    </div>
    <div class="btn">
      <button>完成</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  data () {
    return {
      title: '添加地址',
      name: 'lisi',
      addressMsg: {
        user_id: '',
        name: '李四',
        phone: '',
        location: '',
        address: '',
        active: ''
      },
      addressInfo: {},
      address: {}
    }
  },
  created () {
    if (this.$route.query.id) {
      this.title = '编辑地址'
      this.$api.get('/api/api/editAddress', {
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        res.data.data.location = JSON.parse(res.data.data.location)
        this.address = res.data.data.location
        this.addressInfo = res.data.data
      })
    } else {
      this.title = '添加地址'
    }
  },
  computed: {
    addressList () {
      return this.$store.state.user.addressList
    }
  },
  components: {
    List
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.reseive{
  width: 100%;
  height: 50px;
  @include flex();
  padding: 0 10px;
  font-size: 18px;
  margin-bottom: 10px;
}
.add{
  margin-top: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.form{
  @include wh(100%,auto);
  &>div{
    height: 40px;
    display: flex;
    align-items: center;
    &>span{
      @include wh(80px,40px);
      text-align: center;
      line-height: 40px;
    }
    &>input{
      flex: 1;
      height: 35px;
      outline: none;
      border: 0;
      border-bottom: 1px solid #ccc;
      margin-left: 10px;
    }
  }
}
.btn{
  padding: 10px;
  display: flex;
  &>button{
    display: inline-block;
    width: 50%;
    height: 38px;
    color: #000;
    border-radius: 5px;
    background: #ff712b;
    color: #fff;
    margin: 0 3px;
  }
}
</style>
