// Remove ALL duplicate Vue imports
import Vue from 'vue';
import App from './App.vue';
import router from './router/Router';
import store from './store'; // If using Vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Remove if not using Vuex
  render: h => h(App)
}).$mount('#app');
