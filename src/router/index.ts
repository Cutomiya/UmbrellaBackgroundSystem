import {createRouter,createWebHashHistory} from "vue-router"

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  }, {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: []
  }
]
//创建路由实例并传递routes配置
const router = createRouter({
  //内部提供了history模式的实现。为了简单起见，我们在这里使用hash模式。
  history: createWebHashHistory(),
  routes, //'routes: routes' 的缩写
})

export default router