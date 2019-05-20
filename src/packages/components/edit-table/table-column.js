// 导入组件，组件必须声明 name
import tableColumn from './table-column.vue'

// 为组件提供 install 安装方法，供按需引入
tableColumn.install = function (Vue) {
  Vue.component(tableColumn.name, tableColumn)
}

// 默认导出组件
export default tableColumn