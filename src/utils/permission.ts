import {createRouter,createWebHashHistory} from "vue-router"
import { getUserInfo } from '@/api/login'
import router from '../router'

router.beforeEach((to, _from, next) => {
  let token = localStorage.getItem('manager-token')
  if (!token) {
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      getUserInfo(token).then(res => {
        let resUser = res.data
        if (resUser.flag) {
          localStorage.setItem('manager-user', JSON.stringify(resUser.data))
          next()
        } else {
          next({ path: '/login' })
        }
      })
    }
  }
})