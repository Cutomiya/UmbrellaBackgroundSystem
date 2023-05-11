import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  } as RouteRecordRaw, {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout.vue'),
    // children: []
  } as RouteRecordRaw, {
    path: '/',
    redirect: '/layout'
  }
]
//创建路由实例并传递routes配置
const router = createRouter({
  history: createWebHistory(),
  routes, //'routes: routes' 的缩写
})

export default router