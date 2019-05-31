<template>
  <div class="tab-wrap">
    <ul class="tab" v-if="type === 'home'">
      <li
      v-for="(val, index) in nav"
      :key="index"
      :class="{active: index === activeIndex}"
      @click="change(index)"
      >
        {{val.text}}
      </li>
    </ul>
    <ul class="tab" ref="tab" v-if="type === 'classify'">
      <li
      v-for="(val, index) in nav"
      :key="index"
      :class="{actives: index === activeIndex}"
      @click="change(index)"
      >
        {{val.categoryName}}
      </li>
      <slot name="search"></slot>
    </ul>
    <b class="line" :style="styles"></b>
  </div>
</template>

<script>
export default {
  props: {
    nav: Array,
    classifyData: Array,
    activeIndex: Number,
    type: String
  },
  computed: {
    styles () {
      const width = 168 / this.nav.length
      return {
        left: this.activeIndex === 0 ? width * this.activeIndex + (width * 0.3 / 2) + 'px' : width * this.activeIndex + (width * 0.8 / 2) + 'px',
        width: width + 'px'
      }
    }
  },
  methods: {
    change (i) {
      this.$emit('change', i)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrap{
  position: relative;
  .tab{
    @include wh(100%,44px);
    position: relative;
    display: flex;
    align-items: center;
    li{
      margin: 0 20px;
      font-size: 16px;
    }
    .active{
      color: #ff8143;
    }
    .actives{
      font-weight: 600;
      font-size: 18px;
      color: #ff8143;
    }
  }
  .line{
    @include wh(auto, 2px);
    background: #F2922F;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: left .5s ease;
  }
}
</style>
