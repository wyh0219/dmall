<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(val,index) in bannerData" :key="index">
        <img :src="val.imageUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" id="pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
    }
  },
  props: {
    bannerData: Array
  },
  mounted () {
    /* eslint-disable no-new */
    // new Swiper('.swiper-container', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   }
    // })
  },
  components: {
    swiper, swiperSlide
  }
}
</script>

<style>
img{
  display: block;
  width: 100%;
  height: auto;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #ff8143;
}
</style>
