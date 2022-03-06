import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import DevView from '../views/DevView.vue'
=======
import Tugas1View from '../views/Tugas1View.vue'
>>>>>>> tugas_1

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
<<<<<<< HEAD
    path: '/dev',
    name: 'dev',
    component: DevView
=======
    path: '/tugas/1',
    name: 'tugas1',
    component: Tugas1View
>>>>>>> tugas_1
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
