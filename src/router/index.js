import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

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
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/listaTareas/Views/TareasView/TareasVue.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/CounterModule/Views/CounterView.vue')
  },
  {
    path: '/yes-not',
    name: 'yesno',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/yesOrNotApp/yesOrNotView/yesOrNotView.vue')
  },
  {
    path: '/acuacar',
    name: 'acuacar',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/AcuacarApi/views/AcuacarView.vue')
  },
  {
    path: '/formularios',
    name: 'formularios',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/formularios/views/FormularioView.vue')
  },
  {
    path: '/trabajo',
    name: 'trabajo',
    component: () => import(/* webpackChunkName: "TareasVue" */ '@/modules/trabajoAcuacar/views/trabajo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
