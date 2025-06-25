// Polyfills for Vue 2 + Node 18 compatibility
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Vue imports
import Vue from 'vue';
import App from './App.vue';
import router from './router/Router';
import store from './store'; // Remove this line if not using Vuex

// Prevent production tip warning
Vue.config.productionTip = false;

// Mount app with error boundary
try {
  new Vue({
    router,
    store, // Remove if not using Vuex
    render: h => h(App)
  }).$mount('#app');
} catch (err) {
  console.error('Vue mount error:', err);
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: sans-serif;
        color: red;
        text-align: center;
      ">
        Failed to load app.<br/>
        Please check browser console for errors.
      </div>
    `;
  }
}
