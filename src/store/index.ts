import { defineStore } from 'pinia'
//定义并导出容器
//参数1是容器 id 唯一，pinia 会将所有容器挂载到根容器，参数2是选项对象，返回一个函数，调用可以得到一个容器实例
export const userStore = defineStore('main', {
  //类似于data储存全局状态，必须是箭头函数形成闭包，为了在服务端渲染的时候避免交叉请求导致的数据污染与更好的ts类型推导
  state: () => {
    return {
      
    }
  },
  //类似于 computed，封装计算属性，有缓存功能
  getters: {},
  //类似于 methods，封装业务逻辑，修改 state
  actions: {},
})
//使用容器的state

//修改state

//容器中的action的使用
