import axios from '@/utils/axios.ts'

export function getUserIfo(page: Number, size: Number){
  return axios({
    url:'/admin/administrator/page',
    method: 'GET',
    params: {
      page,
      size
    }
  })
}