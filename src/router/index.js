import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '外卖',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/search',
    name: '搜索',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search')
  },
  {
    path: '/order',
    name: '订单',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "order" */ '@/views/Order')
  },
  {
    path: '/profile',
    name: '我的',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile')
  },
  {
    path: '/login',
    name: '登陆',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
