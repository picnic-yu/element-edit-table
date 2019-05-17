import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { Table,TableColumn} from 'element-ui'
import xtui from './packages/index.js';
console.log(xtui)
  Vue.use(xtui);
Vue.use(Table)
Vue.use(TableColumn)
new Vue({
  render: h => h(App)
}).$mount('#app')
