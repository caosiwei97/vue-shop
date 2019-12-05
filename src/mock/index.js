import Mock from 'mockjs'
import shopData from './data/shop.json'

// 请求mock接口
Mock.mock('/foods', { code: 0, data: shopData.goods })
Mock.mock('/commends', { code: 0, data: shopData.ratings })
Mock.mock('/info', { code: 0, data: shopData.info })
