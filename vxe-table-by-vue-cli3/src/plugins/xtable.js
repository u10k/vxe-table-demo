import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Icon,
  Header,
  Body,
  Column,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, value) => XEUtils.get(zhCNLocat, key)
})

// 按需导入需要的模块
Vue.use(Icon)
Vue.use(Header)
Vue.use(Body)
Vue.use(Column)
// 安装核心库
Vue.use(Table)
