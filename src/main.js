import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $axios from './plugins/axios'
import $cookie from 'js-cookie'
// import './plugins/element-ui'

Vue.config.productionTip = false
Vue.prototype.$axios = $axios
Vue.prototype.$cookie = $cookie
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
