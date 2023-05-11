import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //路径配置
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASEURL, // 后台接口
        changeOrigin: true,
        // secure: false, // 如果是https接口，需要配置这个参数
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
