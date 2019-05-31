<template>
  <div class="home-wrap">
    <div class="home-bar">
      <HeaderBar />
      <Tab :nav="nav" type="home" @change="change" :activeIndex="activeIndex" />
    </div>
    <div class="content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
           <swiper-page-one />
        </swiper-slide>
        <swiper-slide>
          <swiper-page-two />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HeaderBar from '@/components/Header'
import Tab from '@/components/Tab'
import SwiperPageOne from '@/components/SwiperPage/page1'
import SwiperPageTwo from '@/components/SwiperPage/page2'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      activeIndex: 0,
      nav: [
        {
          text: '多点超市'
        },
        {
          text: '全球精选'
        }
      ],
      swiperOption: {
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex
          }
        }
      }
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('.content')
  },
  components: {
    HeaderBar,
    Tab,
    SwiperPageOne,
    SwiperPageTwo,
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    change (i) {
      this.activeIndex = i
      this.swiper.slideTo(i, 200, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-bar{
    width: 100%;
    height: 90px;
  }
  .content{
    flex: 1;
    overflow: hidden;
  }
}
</style>
