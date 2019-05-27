import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
Vue.config.productionTip = false

import xtui from './packages/index.js';
// import 'element-ui/lib/theme-chalk/index.css'
console.log(xtui)
  Vue.use(xtui);

Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
