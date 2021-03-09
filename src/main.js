import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//扫入toast插件
import toast from "./components/content/toast";
//解决移动端点击300毫秒延迟
import FastClick from 'fastclick'
//图片懒加载
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false
//安装toast插件
Vue.use(toast)
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)
Vue.use(VueLazyload)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

