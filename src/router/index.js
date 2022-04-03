import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tugas1View from '../views/Tugas1/Tugas1View.vue'

import Tugas2View from '../views/Tugas2/Tugas2View.vue'
import SetupView from '../views/Tugas2/SetupView.vue'
import BeforeMountView from '../views/Tugas2/BeforeMountView.vue'
import OnMountedView from '../views/Tugas2/OnMountedView.vue'
import BeforeUpdateAndUpdatedView from '../views/Tugas2/BeforeUpdateAndUpdatedView.vue'

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
    path: '/tugas/2/before-create-and-created',
    name: 'beforeandafter',
    component: SetupView
  },
  {
    path: '/tugas/2/before-mount',
    name: 'beforecreate',
    component: BeforeMountView
  },
  {
    path: '/tugas/2/mounted',
    name: 'mounted',
    component: OnMountedView
  },
  {
    path: '/tugas/2/update',
    name: 'update',
    component: BeforeUpdateAndUpdatedView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
