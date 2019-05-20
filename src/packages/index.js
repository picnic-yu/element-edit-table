

import extendsTable from './components/edit-table/index';
import tableColumn from './components/edit-table/table-column.js'

// 存储组件列表
const components = [
    
    extendsTable,
    tableColumn

]
const install = function (Vue) {
    if (install.installed) return
    // components.map(component => Vue.component(component.name, component))
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
}
  
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
  
const API = {
    install,
    ...components
}
  
export default API
