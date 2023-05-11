import axios from 'axios'

const myaxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 5000,
})

// 请求拦截器
myaxios.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器
myaxios.interceptors.response.use(function (response) {
  // 统一设置接口相应错误, 比如 token 过期失效, 服务端异常
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default myaxios
