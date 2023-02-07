import axios from 'axios'
import { message } from 'ant-design-vue'
// import { getQueryVariable } from './util'

const getUserToken = () => {
  return localStorage.getItem('userToken')
}

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    const token = getUserToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.Accept = 'application/json'
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    }
    if (response.status !== 401) {
      const { data } = response
      message.error(`${data.status}：${data.msg}`)
    }
    return Promise.reject(response)
  },
  error => {
    const { response } = error
    const msg = response
      ? `${response.status}：${response.statusText}`
      : '连接服务器失败'
    if (response.status !== 401) {
      message.error(msg)
    }
    return Promise.reject(error)
  }
)

const METHODS = ['get', 'post', 'delete', 'put', 'patch']

function ajax(conf, params) {
  const parameters = JSON.parse(JSON.stringify(params)) || {}
  if (!conf.method) return fetch('get', conf, parameters)
  const method = conf.method.toLowerCase()
  if (METHODS.includes(method)) {
    return fetch(method, conf, parameters)
  }
  throw new Error(`暂时不支持这个method： ${conf.method}`)
}

function fetch(method, conf, params) {
  return new Promise((resolve, reject) => {
    let request
    if (['get', 'delete'].includes(method)) {
      const query = JSON.stringify(params) === '{}' ? '' : { params }
      request = axios[method](conf.url, query)
    } else {
      request = axios[method](conf.url, params)
    }
    request.then(
      response => {
        resolve(response.data)
      },
      error => {
        reject(error)
      }
    )
  })
}

export default ajax
