import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import startQiankun from '@/micro'
import routes from "@/routes";
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VueRouter)
// 启动主应用

startQiankun()


const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#main-app')
