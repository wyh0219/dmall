<template>
  <div class="shop-car">
    <div>
      <div class="goods" v-for="(val,index) in cartList" :key="index">
        <input type="checkbox" @change="checked(index)" v-model="val.active">
        <div class="cont">
          <h3>{{val.name}}</h3>
          <span>￥{{val.price}}</span>
        </div>
        <div class="actions">
          <button @click="actions('reduce', index)">-</button>
          <span>{{val.num}}</span>
          <button @click="actions('add', index)">+</button>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="count-price">
        合计：<sup>￥</sup>{{countPrice}}元
      </div>
      <button @click="$router.push('/order')">选好了</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartList () {
      return this.$store.state.shopCar.cartList
    },
    countPrice () {
      return this.$store.state.shopCar.price.toFixed(2)
    }
  },
  methods: {
    actions (type, index) {
      const data = this.cartList[index]
      if (type === 'add') {
        this.$store.dispatch('changeNum', {
          productId: data.id,
          num: ++data.num
        })
      } else {
        if (data.num <= 1) {
          console.log(data)
          this.$confirm('确定要删除吗?').then(() => {
            this.$store.dispatch('deleteCartItem', data.product_id)
          })
        } else {
          this.$store.dispatch('changeNum', {
            productId: data.id,
            num: --data.num
          })
        }
      }
    },
    checked (index) {
      const data = this.cartList[index]
      if (data.active) {
        this.$store.dispatch('changeActive', {
          id: data.id,
          active: 1
        })
      } else {
        this.$store.dispatch('changeActive', {
          id: data.id,
          active: 0
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-car{
  @include wh(100%,100%);
  position: relative;
  .goods{
    padding: 0 10px;
    @include wh(100%,80px);
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    &>input{
      @include wh(15px, 15px);
    }
    .cont{
      flex: 1;
      margin-left: 30px;
    }
    &>.actions{
      @include wh(100px,30px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      button{
        @include wh(20px,20px);
        border: 1px solid #ff712b;
        color: #ff712b;
        background: #fff;
        border-radius: 3px;
      }
    }
  }
  .total{
    position: absolute;
    left: 0;
    bottom: 0;
    @include wh(100%,50px);
    padding: 0 10px;
    display: flex;
    align-items: center;
    .count-price{
      width: 75%;
      color: #ff712b;
      sup{
        color: #ff712b;
      }
    }
    &>button{
      padding: 0 22px;
      height: 44px;
      line-height: 44px;
      background: #ff7b38;
      color: #fff;
      border: 1px solid #ff7b38;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
</style>
