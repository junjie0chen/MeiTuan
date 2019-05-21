import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from './layout/defaultPage.vue'

import index from './views/index.vue'

const changeCity = () => import('./views/changeCity.vue')
const goodsList = () => import('./views/goodsList.vue')
const login = () => import('./views/login.vue')
const register = () => import('./views/register.vue')

const err = () => import('./views/err.vue')

Vue.use(Router)

export default new Router({
  mode: "history",
  base: "/meituan",
  routes: [
    {
      path: "/",
      redirect: '/home',
      name: "defaultPage",
      component: defaultPage,
      children: [
        {
          path: 'home',
          name: 'index',
          component: index
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: changeCity
        },
        {
          path: 'goods/:name',
          name: 'goods',
          component: goodsList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '*',
      component: err
    }

  ]
});
