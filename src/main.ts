import { VueElement, createApp } from 'vue'
// import './style.css'
import './common/css/common.css'
import './common/css/iconfont.css'
import App from './App.vue'

import router from './router/index'
import myaxios from '@/utils/axios'
import '@/utils/permission'

import ElementPlus from 'element-plus'
import VForm3 from 'vform3-builds'  //引入VForm3库
import 'element-plus/dist/index.css'
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式


import { createPinia } from 'pinia'

const app = createApp(App)

// app.config.globalProperties.$myaxios = myaxios

// app.use(router).use(ElementPlus).use(myaxios).mount('#app')
app.use(router).use(createPinia()).use(ElementPlus).use(VForm3).mount('#app')
