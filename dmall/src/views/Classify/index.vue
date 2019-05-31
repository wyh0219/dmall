<template>
  <div class="classify-wrap">
    <div>
      <Tab
      :nav="classifyData"
      :activeIndex="activeIndex"
      type="classify"
      @change="change"
      >
        <span class="search" slot="search">
          <i class="iconfont icon-fangdajing"></i>
        </span>
      </Tab>
    </div>
    <div class="content">
      <ClassifyList
      :classifyData="typeData"
      :typeIndex="typeIndex"
      :contData="contData"
      :fileIndex="fileIndex"
      :typeListData="typeListData"
      @changType="changType"
      @typeChange="typeChange"
      @actions="actions"
      />
    </div>
  </div>
</template>

<script>
import Tab from '@/components/Tab'
import ClassifyList from '../../components/ClassifyList'
export default {
  data () {
    return {
      typeIndex: 0,
      activeIndex: 0,
      fileIndex: -1,
      classifyData: [],
      typeData: {},
      contData: [],
      typeListData: []
    }
  },
  created () {
    this.getAllData()
  },
  computed: {
    cartList () {
      return this.$store.state.shopCar.cartList
    }
  },
  components: {
    Tab,
    ClassifyList
  },
  methods: {
    getAllData () {
      this.$api.get('/api/api/classify/list').then(res => {
        this.classifyData = res.data.data
        this.typeData = this.classifyData[this.activeIndex]
        this.contData = this.typeData.children[this.typeIndex].children
        this.initTypeData()
      })
    },
    initTypeData () {
      const type = this.typeData.children[this.typeIndex]
      this.$api('/api/api/product', {
        params: {
          page: 1,
          pageSize: 15,
          categoryId: type.categoryId,
          id: 0
        }
      }).then(res => {
        this.typeListData = res.data.data
        this.typeListData = this.typeListData.map(item => {
          this.cartList.forEach(val => {
            if (item.id === val.product_id) {
              item.num = val.num
            }
          })
          return item
        })
      })
    },
    change (i) {
      this.activeIndex = i
      this.getAllData()
    },
    changType (i) {
      this.typeIndex = i
      this.getAllData()
    },
    typeChange (i) {
      this.fileIndex = i
      const data = this.typeData.children[this.typeIndex].children
      this.$api('/api/api/product', {
        params: {
          page: 1,
          pageSize: 15,
          categoryId: data[i].categoryId,
          price: 1
        }
      }).then(res => {
        this.typeListData = res.data.data
      })
    },
    actions ({type, index}) {
      if (type === 'add') {
        this.typeListData = this.typeListData.map((item, i) => {
          if (index === i) {
            if (!item.num) {
              item.num = 1
            } else {
              item.num++
            }
          }
          return item
        })
      } else {
        this.typeListData = this.typeListData.map((item, i) => {
          if (index === i) {
            item.num--
          }
          return item
        })
        if (this.typeListData[index].num === 0) {
          this.$store.dispatch('deleteCartItem', this.typeListData[index].id)
          return
        }
      }
      this.$store.dispatch('addCart', {
        type: type,
        productId: this.typeListData[index].id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-wrap{
  @include wh(100%, 100%);
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow: hidden;
  }
}
.search{
  @include wh(40px, auto);
  position: absolute;
  right: 10px;
  color: #666;
}
</style>
