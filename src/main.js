import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router' // router 추가
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App),

  // 라우터 객체 넘겨줌!
  router,
  store,
  axios
})