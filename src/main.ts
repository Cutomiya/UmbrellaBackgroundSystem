import { VueElement, createApp } from 'vue'
// import './style.css'
import './common/css/common.css'
import App from './App.vue'

import router from './router/index'
import myaxios from '@/utils/axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/utils/permission'

const app = createApp(App)

// app.config.globalProperties.$myaxios = myaxios

// app.use(router).use(ElementPlus).use(myaxios).mount('#app')
app.use(router).use(ElementPlus).mount('#app')
