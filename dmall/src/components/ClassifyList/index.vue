<template>
  <div class="classify-list">
    <div class="left">
      <ul>
        <li
        v-if="classifyData.children && classifyData.children.length > 0"
        v-for="(val, index) in classifyData.children"
        :key="index"
        :class="{active: typeIndex === index}"
        @click="changType(index)"
        >
          {{val.categoryName}}
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="right-cont">
        <div class="type">
          <div class="type-list">
            <span :class="{all: styles==='all'}" @click="all">全部</span>
            <span
            v-for="(val,index) in contData"
            :key="index"
            :class="{active: fileIndex === index}"
            @click="typeChange(index)"
            >{{val.categoryName}}</span>
          </div>
        </div>
        <div class="type-cont">
          <dl class="dl-type-cont" v-for="(val, index) in typeListData" :key="index">
            <dt>
              <img :src="val.img" alt="">
            </dt>
            <dd>
              <div>{{val.name}}</div>
              <div>
                <span><sup>￥</sup>{{val.price}}</span>
                <div class="btns">
                  <button v-if="val.num > 0" @click="actions('reduce', index)">-</button>
                  <span v-if="val.num > 0">{{val.num}}</span>
                  <button @click="actions('add', index)">+</button>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      styles: 'all',
      shopCarData: []
    }
  },
  props: {
    classifyData: Object,
    contData: Array,
    typeListData: Array,
    typeIndex: Number,
    fileIndex: Number
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('.right')
  },
  methods: {
    changType (i) {
      this.$emit('changType', i)
    },
    typeChange (i) {
      this.styles = ''
      this.$emit('typeChange', i)
    },
    all () {
      this.styles = 'all'
      this.$parent.fileIndex = -1
      this.$parent.initTypeData()
    },
    actions (type, index) {
      this.$emit('actions', {type, index})
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-list{
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    width: 30%;
    background: #fff;
    &>ul{
      width: 100%;
      height: 100%;
      &>li{
        text-align: center;
        line-height: 40px;
        height: 40px;
        background: #eee;
      }
    }
  }
  .right{
    flex: 1;
    height: 100%;
    overflow: hidden;
    .type{
      @include wh(100%, 35px);
      line-height: 35px;
      overflow: hidden;
      white-space: nowrap;
      overflow-x: auto;
      .type-list{
        @include wh(auto, 35px);
        &>span{
          text-align: center;
          @include wh(30%, 35px);
          display: inline-block;
        }
        span.all{
          // @include wh(30px, 35px);
          // text-align: center;
          // margin-right: 6px;
          // display: inline-block;
          color: #ff8143;
        }
      }
    }
    .type-cont{
      .dl-type-cont{
        @include wh(100%, 120px);
        display: flex;
        padding: 10px 0;
        &>dt{
          @include wh(100px, 100px);
          img{
            @include wh(100%, auto);
          }
        }
        &>dd{
          flex: 1;
          height: 100%;
          padding-right: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &>div:nth-child(1){
            width: 100%;
            height: 35px;
            line-height: 35px;
          }
          &>div:nth-child(2){
            display: flex;
            height: 40px;
            align-items: center;
            justify-content: space-between;
            &>span{
              font-size: 18px;
            }
            &>.btns{
              display: flex;
              &>button{
                @include wh(20px, 20px);
                background: #ff8143;
                color: #fff;
                margin: 0 5px;
                border-radius: 3px;
              }
            }
          }
        }
      }
    }
  }
}
::-webkit-scrollbar{
  opacity: 0;
}
li.active,span.active{
  color: #ff8143;
}
</style>
