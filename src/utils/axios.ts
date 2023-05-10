import axios from 'axios'

const myaxios = axios.create({
  baseURL: ' https://mock.mengxuegu.com/mock/643e0f2a56377f1ed96c1594/book-manager',
  timeout: 5000,
})

export default myaxios
