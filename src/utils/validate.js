/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const validateAccount = (rule, value, callback) => {
  if (!value) {
    callback()
  } else if (!/^[a-z][a-z0-9]{2,14}$/.test(value) && value) {
    callback(new Error('小写字母开头，3-15小写字母和数字组成'))
  }
  callback()
}
export const validateName = (rule, value, callback) => {
  if (!value) {
    callback()
  } else if (!/[\w-_]/.test(value) && value) {
    callback(new Error('由字母、数字、短横线、下划线组成，不超过100个字符'))
  }
  callback()
}
//符号包括：!@#$%-&_+*=/\（）【】[ ]<>:.
export const validateEnglishName = (rule, value, callback) => {
  let reg = /^[a-zA-Z\d+-=<>/.!@#?$%&|(){}——]{0,20}$/
  if (!value) {
    callback()
  } else if (!reg.test(value) && value) {
    callback(new Error('由字母、数字、符号组成，不超过20个字符'))
  }
  callback()
}

/*
\w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
\s 匹配任意的空白符
\d 匹配数字
\b 匹配单词的开始或结束
^ 匹配字符串的开始
$ 匹配字符串的结束
*/
//符号包括：!@#$%-&_+*=/\（）【】[ ]<>:.
export const validateChineseName = (rule, value, callback) => {
  let reg = /^[\w\u4E00-\u9FA5+-=<>/.!@#?$%&|(){}——]{0,20}$/
  if (!value) {
    callback()
  } else if (!reg.test(value) && value) {
    callback(new Error('由汉字、字母、数字、符号组成，不超过20个字符'))
  }
  callback()
}
//匹配http
export const validateHttp = (rule, value, callback) => {
  let reg = /^(http|https):\/\//
  if (!value) {
    callback()
  } else if (!reg.test(value) && value) {
    callback(new Error('请输入http或https://开头'))
  }
  callback()
}

export const validatePath = (rule, value, callback) => {
  if (!value) {
    callback()
  } else if (!/^\/[\w\d-/]{1,100}$/.test(value) && value) {
    callback(new Error('以‘/’开头,由字母、数字、符号组成，不超过100个字符'))
  }
  callback()
}
//匹配正确手机号
export const validateMobile = (rule, value, callback) => {
  const MOBILE_REGEXP =
    /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
  if (!value) {
    callback()
  } else if (!MOBILE_REGEXP.test(value)) {
    callback(new Error('请输入正确手机号'))
  }
  callback()
}
//匹配邮箱
export const validateEmail = (rule, value, callback) => {
  const EMAIL_REGEXP = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!value) {
    callback()
  } else if (!EMAIL_REGEXP.test(value)) {
    callback(new Error('请输入正确邮箱地址'))
  }
  callback()
}

/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    )
      return true
    return false
  }
  return false
}

// 深拷贝
export function deepClone(obj) {
  // 根据传入对象判断是对象还是数组 并创建
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb的子元素是否为对象，如果是对象，递归拷贝
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = this.deepClone(obj[key])
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

// 处理字典类型枚举
export function handleEnum(list, labelKey, valueKey) {
  if (!list || list.length === 0) {
    return []
  }
  return list.map(item => ({
    label: item[labelKey],
    value: item[valueKey]
  }))
}
