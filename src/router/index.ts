/*
 * @Author       : code13
 * @Date         : 2021-02-04 14:41:59
 * @LastEditTime : 2021-02-04 17:51:21
 * @LastEditors  : code13
 * @Description  : router
 * @FilePath     : \src\router\index.ts
 * @https://github.com/Code-13
 */

import Home from '@/views/Home'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/element',
    name: 'Element',
    component: () => import('../views/ElementPlus')
  },
  {
    path: '/antd',
    name: 'AntD',
    component: () => import('../views/Antd')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
