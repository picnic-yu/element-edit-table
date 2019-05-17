// 导入组件，组件必须声明 name
import extendsTable from './index.vue'

// 为组件提供 install 安装方法，供按需引入
extendsTable.install = function (Vue) {
  Vue.component(extendsTable.name, extendsTable)
}

// 默认导出组件
export default extendsTable