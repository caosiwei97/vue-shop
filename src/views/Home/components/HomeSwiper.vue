<template>
  <nav class="home-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 总页数 -->
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <!-- 每页的图标导航 -->
        <div class="swiper-icon-wrapper" v-for="(item, index) in page" :key="index">
          <div class="swiper-icon">
            <img :src="item.iconUrl" :alt="item.iconTitle" />
          </div>
          <p class="swiper-title">{{ item.iconTitle }}</p>
        </div>
      </swiper-slide>
      <!-- 分页圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </nav>
</template>

<script>
import 'Swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HomeSwiper',
  props: {
    iconLists: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      // 分页逻辑 如果 当前页的icon个数大于8就分页，使用二维数据
      const pages = []
      this.iconLists.forEach((item, index) => {
        const page = Math.floor(index / 8) // 页数
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })

      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
.home-swiper >>> .swiper-pagination-bullet-active
  background-color $yellow
.home-swiper >>> .swiper-wrapper
  height 0
  padding-bottom 50%
.home-swiper
  background-color $white
  bottom-border-1px($borderColor)
  .swiper-icon-wrapper
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    position relative
    .swiper-icon
      margin-bottom px2rem(10)
      & > img
        width px2rem(50)
        display block
        margin 0 auto
    .swiper-title
      text-align center
      font-size .8125em
      color $navTextColor
      ellipsis()
</style>
