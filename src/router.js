import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/homePage.vue'
import aboutPage from '@/pages/aboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    }
  ]
})

export default router
