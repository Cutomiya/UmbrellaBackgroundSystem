import axios from '@/utils/axios.ts'

export function login (username: string, password: string) {
  return axios({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export function getUserInfo (token) {
  return axios({
    url: `/user/info/${token}`,
    method: 'GET'
  })
}

export function logoutUser (token) {
  return axios({
    url: `/user/logout/${token}`,
    method: 'POST',
    data: {
      token
    }
  })
}