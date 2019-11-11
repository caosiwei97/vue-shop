import Vue from 'vue'
import Router from 'vue-router'
// import Router Components
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Login from '@/views/Login/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '外卖',
      meta: { isShowFooterGuide: true },
      component: Home
    },
    {
      path: '/search',
      name: '搜索',
      meta: { isShowFooterGuide: true },
      component: Search
    },
    {
      path: '/order',
      name: '订单',
      meta: { isShowFooterGuide: true },
      component: Order
    },
    {
      path: '/profile',
      name: '我的',
      meta: { isShowFooterGuide: true },
      component: Profile
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    }
  ]
})

export default router
