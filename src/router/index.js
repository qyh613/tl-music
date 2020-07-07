import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePageContent from '../views/HomePageContent/HomePageContent.vue'
import Index from '../layout/Index.vue'
const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Index,
    children: [
      {
        path: "",
        component: HomePageContent,
      },
      {
        path: "singer",
        component: () => import('../views/HomePageContent/Singer.vue'),
        meta:{
          title:'歌手'
        }
      },
      {
        path: "bill",
        component: () => import('../views/HomePageContent/Bill.vue'),
        meta:{
          title:'榜单'
        }
      },
      {
        path: "my",
        component: () => import('../views/HomePageContent/My.vue'),
        meta:{
          title:'我的'
        }
      },
      {
        path: "search",
        component: () => import('../views/HomePageContent/Search.vue'),
        meta:{
          title:'搜索'
        }
      },
      {
        path: "moreMore/:type",
        component: () => import('../views/MoreMore/MoreMore.vue'),
        meta:{
          title:'更多'
        }
      }
    ]
  }
]




const router = new VueRouter({
  // 地址栏设置没有#号
  mode: "history",
  routes
})

export default router
