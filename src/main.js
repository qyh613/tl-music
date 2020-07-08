import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局变量
import './style/base.css'

// 导入 axios
// import axios from 'axios'
import axios from './utils/http.js'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 导入 vant 插件
import { Swipe, SwipeItem, Tab, Tabs, List,PullRefresh,Cell, CellGroup ,Icon } from 'vant';
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);

import store from './store'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
