/**
 * api接口的统一出口
 */

import axios from '@/utils/request'

// 统一url管理
const url = {
  getLocationUrl: '/position',
  getShoplistsByLocationUrl: '/shops',
  getShopCategoryUrl: '/index_category',
  getShoplistsBySearchUrl: '/search_shops',
  getMessageCodeUrl: '/sendcode',
  getUserInfoUrl: '/userinfo',
  getUserLogoutUrl: '/logout',
  getCaptchaUrl: '/captcha',
  postUserLoginByPasswordUrl: '/login_pwd',
  postUserLoginByMessageCodeUrl: '/login_sms'
}

/**
 * 根据经纬度获取位置详情
 *
 * @param {String} geohash 经纬度
 * @returns {Promise}
 */
function getLocationApi(geohash) {
  return axios.get(`${url.getLocationUrl}/${geohash}`)
}

/**
 * 根据经纬度获取商铺列表
 *
 * @param {Object} { latitude, longitude }
 * @returns {Promise}
 */
function getShoplistsByLocationApi({ latitude, longitude }) {
  return axios.get(url.getShoplistsByLocationUrl, {
    params: {
      latitude,
      longitude
    }
  })
}

/**
 * 根据关键字搜索商家列表
 *
 * @param {Object} { keywords, geohash }
 * @returns {Promise}
 */
function getShoplistsBySearchApi({ keywords, geohash }) {
  return axios.get(url.getShoplistsBySearchUrl, {
    params: {
      keywords,
      geohash
    }
  })
}

/**
 * 获取食品分类列表
 *
 * @returns {Promise}
 */
function getShopCategoryApi() {
  return axios.get(url.getShopCategoryUrl)
}

/**
 * 请求手机验证码
 *
 * @param {Number} phone
 * @returns {Promise}
 */
function getMessageCodeApi(phone) {
  return axios.get(url.getMessageCodeUrl, {
    params: {
      phone
    }
  })
}

/**
 * 根据会话获取用户信息
 *
 * @returns {Promise}
 */
function getUserInfoApi() {
  return axios.get(url.getUserInfoUrl)
}

/**
 * 获取一次性验证码
 *
 * @returns {Promise}
 */
function getCaptchaApi() {
  return axios.get(url.getCaptchaUrl)
}

/**
 * 用户退出登录
 *
 * @returns {Promise}
 */
function getUserLogoutApi() {
  return axios.get(url.getUserLogoutUrl)
}

/**
 *  用户使用密码登陆
 *
 * @param {Object} { name, pwd, captcha }
 * @returns {Promise}
 */
function postUserLoginByPasswordApi({ name, pwd, captcha }) {
  return axios.post(url.postUserLoginByPasswordUrl, {
    name,
    pwd,
    captcha
  })
}

/**
 * 手机号验证码登陆
 *
 * @param {*} { phone, messageCode }
 * @returns {Promise}
 */
function postUserLoginByMessageCodeApi({ phone, code }) {
  return axios.post(url.postUserLoginByMessageCodeUrl, {
    phone,
    code
  })
}

export default {
  getLocationApi,
  getShoplistsByLocationApi,
  getShopCategoryApi,
  getShoplistsBySearchApi,
  getMessageCodeApi,
  getUserInfoApi,
  getCaptchaApi,
  getUserLogoutApi,
  postUserLoginByPasswordApi,
  postUserLoginByMessageCodeApi
}
