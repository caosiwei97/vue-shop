import Vue from 'vue'
// import moment from 'moment' // 日期格式化
import format from 'date-fns/format' // 代替moment 优化打包

//自定义过滤器
Vue.filter('dateFormat', function(value, formatStr) {
  return format(value, formatStr || 'yyyy-mm-dd hh:mm:ss')
})
