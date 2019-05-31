<template>
  <div class="dl-wrap">
    <dl
    :class="{'dl-list': layout === 'three'}"
    v-for="(val, index) in allData"
    :key="index"
    >
      <dt>
        <img :src="val.imageUrl" alt="">
      </dt>
      <dd v-if="val.remark">
        {{val.remark}}
      </dd>
      <dd v-if="val.name" class="cont">
        <span v-if="val.promotionDisplayLable">{{val.promotionDisplayLable}}</span>
        <span v-else class="span"></span>
        <p>{{val.name}}</p>
        <div>
          <span>￥{{Math.round(val.promotionPrice)/100}}</span>
          <button>+</button>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    allData: Array,
    layout: String
  }
}
</script>

<style lang="scss" scoped>
.dl-wrap{
  display: flex;
  justify-content: space-between;
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
  dl.dl-list{
    width: 33%;
    &>dt{
      @include wh(105px, 105px);
      margin: 0 auto;
    }
    &>dd.cont{
      &>span{
        margin-left: 20px;
        font-size: 12px;
        @include wh(40px, 20px);
        line-height: 20px;
        background: #ff6161;
        color: #fff;
        border-radius: 2px;
      }
      &>span.span{
        @include wh(60px, 20px);
        background: #fff;
      }
      &>p{
        height: 40px;
      }
      &>div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 25px;
        position: relative;
        color: #ff712b;
        &>span{
          margin-left: 15px;
        }
        button{
          margin-right: 3px;
          width: 20px;
          height: 20px;
          border: 1px solid #ff712b;
          color: #ff712b;
          background: #fff;
        }
      }
    }
  }
}
</style>
