// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

Vue.use(Vuex)

const globalStore = new Vuex.Store(store)

new Vue({
  el: '#app',
  router,
  store: globalStore,
  template: '<App/>',
  components: { App }
})
