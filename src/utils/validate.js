// 正则验证工具函数

const phoneNumber = /^[1]([3-9])[0-9]{9}$/ // 手机号
const phoneCode = /^\d{6}$/ // 手机验证码
const email = /^[a-zA-Z1-9_-]+[@][a-zA-Z0-9_-]+([.][a-zA-Z]+){1,2}$/ //邮箱
const userName = /\w+/

/**
 *  验证手机号
 *
 * @param {Number} num
 * @returns {Boolean}
 */
export function isPhoneNumber(num) {
  return phoneNumber.test(num)
}

/**
 * 验证验证码
 *
 * @export
 * @param {Number} num
 * @returns {Boolean}
 */
export function isCode(num) {
  return phoneCode.test(num)
}

/**
 * 验证邮箱
 *
 * @export
 * @param {String} str
 * @returns {Boolean}
 */
export function isEmail(str) {
  return email.test(str)
}

/**
 * 验证用户名
 *
 * @export
 * @param {*} name
 * @returns
 */
export function isUserName(name) {
  return userName.test(name)
}
