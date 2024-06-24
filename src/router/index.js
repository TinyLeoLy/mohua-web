import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('../views/SolutionView.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('../views/CaseView.vue')
    },
    {
      path: '/case-pkqa',
      name: 'case-pkqa',
      component: () => import('../views/CasePkqaView.vue')
    },
    
  ]
})

export default router
