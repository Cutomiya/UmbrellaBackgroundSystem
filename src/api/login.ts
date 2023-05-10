import axios from '@/utils/axios.ts'

export function login (username: string, password: string) {
  return axios({
    url: '',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export function getUserInfo (token: string) {
  return axios({
    url: '',
    method: 'GET'
  })
}