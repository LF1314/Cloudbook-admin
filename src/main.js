// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import selfmethod from './methods/ownmethods'
Vue.use(ElementUI);
import {
  $axios
} from './until/until.js'

Vue.config.productionTip = false
Vue.prototype.$axios = $axios
Vue.prototype.$selfmethod = selfmethod

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
