<template>
  <div class="list-wrap">
    <div v-if="addressData && addressData.length > 0">
      <ul class="ul-list">
        <li v-for="(val, index) in addressData" :key="index" @click="address(index)">
          <span v-if="val.address">{{val.address}}</span>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    addressData: Array,
    lifeData: Array
  },
  methods: {
    address (i) {
      const localMap = {
        formattedAddress: this.addressData[i].name,
        position: this.addressData[i].location
      }
      this.$store.commit('setGPS', localMap)
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.ul-list{
  width: 100%;
  height: auto;
  li{
    height: 35px;
    line-height: 2;
    border-bottom: 1px solid #eee;
    padding: 0 10px;
  }
}
</style>
