// 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import login from '@/views/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})
