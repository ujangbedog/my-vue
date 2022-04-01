import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tugas1View from '../views/Tugas1/Tugas1View.vue'

import Tugas2View from '../views/Tugas2/Tugas2View.vue'
import BeforeCreateView from '../views/Tugas2/BeforeCreateView.vue'
import AfterCreateView from '../views/Tugas2/AfterCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tugas/1',
    name: 'tugas1',
    component: Tugas1View
  },
  {
    path: '/tugas/2',
    name: 'tugas2',
    component: Tugas2View
  },
  {
    path: '/tugas/2/before-create',
    name: 'beforecreate',
    component: BeforeCreateView
  },
  {
    path: '/tugas/2/after-create',
    name: 'aftercreate',
    component: AfterCreateView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
