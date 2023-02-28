import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/homePage.vue'
import aboutPage from '@/pages/aboutPage.vue'
import MoviePage from '@/pages/MoviePage.vue'
import EpisodePage from '@/pages/EpisodePage.vue'
import activeShowPage from '@/pages/activeShowPage.vue'
import ShowsPage from '@/pages/ShowsPage.vue'

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
    },
    {
      path: '/onShow/:id/seasons/:season/episodes/:episode',
      name: 'episode',
      component: EpisodePage
    },
    {
      path: '/movie/:id',
      name: 'movie',
     component: MoviePage
    },
    {
      path: '/onShow/:id',
      name: 'activeShow',
     component: activeShowPage
    },
    {
      path: '/show',
      name: 'show',
     component: ShowsPage
    },
  ]
})

export default router
