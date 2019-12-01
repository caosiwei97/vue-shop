// 单一状态存储
export default {
  latitude: 39.081086, // 纬度
  longtitude: 121.97835, // 经度
  address: {}, // 地址信息
  categories: [], // 食品分类
  shoplists: [], // 商家列表
  userInfo: {},
  proxyUrl: process.env.VUE_APP_BASE, // 代理服务器
  timeNow: Date.now()
}
