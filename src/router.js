import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/ip_cat',
      name: 'ip_cat',
      component: () => import( './views/GoodsCategory.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: '/ip_cat/:id',
      name: 'ip_cat1',
      component: () => import( './views/GoodsCategory.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/GoodsPage.vue'),
      meta: {
        title: '商品页面'
      }
    },
    { /* Not Found 路由，必须是最后一个路由 */
      path: '*',
      component: () => import('./views/404.vue'),
      meta: {
        title: '找不到页面'
      }
    }
  ]
})