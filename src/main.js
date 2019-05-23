import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { Table,TableColumn,Input} from 'element-ui'
import xtui from './packages/index.js';
console.log(xtui)
  Vue.use(xtui);
Vue.use(Table)
Vue.use(Input)
Vue.use(TableColumn)
new Vue({
  render: h => h(App)
}).$mount('#app')
