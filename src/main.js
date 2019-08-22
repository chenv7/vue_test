import Vue from 'vue'
import App from './App.vue'
// 引入el模块
import ElementUI from 'element-ui'
// // 引入css样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入组件
import router from '@/router/router.js'

// use
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
