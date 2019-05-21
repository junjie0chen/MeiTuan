import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/base.css' // 重置样式
import './assets/css/main.css' // 项目的公共样式
import './api' //引入工具方法
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 切换城市 点击其他地方 下拉框隐藏
Vue.directive('document-click', {
  // 只绑定一次
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }
})
// 每次跳转路由都回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
