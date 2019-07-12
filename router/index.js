import Vue from 'vue'
import Router from 'vue-router'
// 【@/】，意思是以 src 为根目录
import Pos from '@/components/Pos'

// 全局使用，整个项目都使用这个路由设置
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 项目的根路径，也就是http://localhost:8080/
      path: '/',
      // 组件名为 Pos
      name: 'Pos',
      // 要显示的组件
      component: Pos
    }
  ]
})
