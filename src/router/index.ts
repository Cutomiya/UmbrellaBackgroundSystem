import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  } as RouteRecordRaw, {
    path: '/',
    name: 'layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        meta:{title:'首页'}
      },{
        path:'/user',
        component: () => import('@/views/Management/User.vue'),
        meta: {title:'用户管理'}
      }, {
        path: '/umbrella',
        component: () => import('@/views/Management/Umbrella.vue'),
        meta: {title:'雨伞管理'}
      }, {
        path: '/setting',
        component: () => import('@/views/Setting.vue'),
        meta: {title:'设置'}
      }
    ],
    redirect:'home'
  } as RouteRecordRaw
]
//创建路由实例并传递routes配置
const router = createRouter({
  history: createWebHistory(),
  routes, //'routes: routes' 的缩写
})

export default router