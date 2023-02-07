import App from './App.vue'
// import './public-path'
import store from './store'
import request from './utils/request'
import { createApp } from 'vue'
import lodash from 'lodash'
// import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from '@ant-design/icons-vue'
import './styles/const.less'
import './styles/index.less'
import './icons/index.js'
import * as VueRouter from 'vue-router'
import { routes } from './router/index'
import componentList from './components'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

import {
  Empty,
  Spin,
  DatePicker,
  Layout,
  Button,
  Menu,
  Breadcrumb,
  Table,
  Row,
  Col,
  Card,
  Input,
  // InputNumber,
  // Textarea,
  Space,
  Tabs,
  Divider,
  Avatar,
  Tag,
  Modal,
  Form,
  Radio,
  Progress,
  Select,
  Tooltip,
  List,
  Carousel,
  ConfigProvider,
  Message
} from 'ant-design-vue'

let app = null
const components = [
  Empty,
  Spin,
  DatePicker,
  Layout,
  Button,
  Menu,
  Breadcrumb,
  Card,
  Input,
  // InputNumber,
  // Textarea,
  Table,
  Row,
  Col,
  Space,
  Tabs,
  Divider,
  Avatar,
  Tag,
  Modal,
  Form,
  Radio,
  Progress,
  Select,
  Tooltip,
  List,
  Carousel,
  ConfigProvider
]

function render(props = {}) {
  const { container, base, basePath } = props
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? base || basePath || '/microVue3' : '/'
    ),
    routes
  })
  app = createApp(App)
  components.forEach(item => app.use(item))
  const icons = Icons
  for (const i in icons) {
    app.component(i, icons[i])
  }

  app.config.productionTip = false
  app.config.globalProperties.$axios = request
  app.config.globalProperties.$lodash = lodash
  app.config.globalProperties.$message = Message

  app.use(store)
  app.use(router)
  app.use(componentList)
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  props.setLoading && props.setLoading(false)
  render(props)
}
export async function unmount() {
  app.unmount()
  app._container.innerHTML = ''
  app = null
}
