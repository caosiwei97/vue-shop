import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/reset.css'
import attachFastClick from 'fastclick'// 解决移动端浏览器点击300ms延迟

attachFastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
