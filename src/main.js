import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import errorHandler from './utils/errorHandler'
import performanceMonitor from './utils/performanceMonitor'

// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './webxr-polyfill'

// Configuration
Vue.config.productionTip = false
Vue.use(errorHandler)
Vue.use(performanceMonitor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
