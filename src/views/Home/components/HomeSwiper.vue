<template>
  <nav class="home-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 总页数 -->
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <!-- 每页的图标导航 -->
        <a
          class="swiper-icon-wrapper"
          v-for="(item, index) in page"
          :key="index"
          href="item.link"
        >
          <div class="swiper-icon">
            <img :src="BASE_IMG + item.image_url" :alt="item.iconTitle" />
          </div>
          <p class="swiper-title">{{ item.title }}</p>
        </a>
      </swiper-slide>
      <!-- 分页圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </nav>
</template>

<script>
import 'swiper/dist/css/swiper.css'
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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    BASE_IMG() {
      return process.env.VUE_APP_IMAGE
    },
    pages() {
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
  background-color $themeColor
.home-swiper >>> .swiper-wrapper
  height 0
  padding-bottom 50%
.home-swiper
  overflow hidden
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
      img
        width px2rem(50)
        display block
        margin 0 auto
    .swiper-title
      text-align center
      font-size .8em
      color $navTextColor
      ellipsis()
@media only screen and (min-width 768px)
  .swiper-icon
  .swiper-title
    position absolute
    left 50%
    transform translateX(-50%)
  .swiper-title
    bottom 50%
  .swiper-icon
    bottom 60%
</style>
