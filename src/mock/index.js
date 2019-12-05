import Mock from 'mockjs'
import { goods, ratings, info } from './data/shop.json'

// 请求mock接口
Mock.mock('/foods', { code: 0, data: goods })
Mock.mock('/commends', { code: 0, data: ratings })
Mock.mock('/info', { code: 0, data: info })
