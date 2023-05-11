// import {useRouter} from 'vue-router'
// import { login, getUserInfo } from '@/api/login'

// const router=useRouter()

// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('manager-token')
//   if (!token) {
//     if (to.path !== '/login') {
//       next({ path: '/login' })
//     } else {
//       next()
//     }
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       getUserInfo(token).then(res => {
//         let resUser = res.data
//         if (resUser.flag) {
//           localStorage.setItem('manager-user', JSON.stringify(resUser.data))
//           next()
//         } else {
//           next({ path: '/login' })
//         }
//       })
//     }
//   }
// })