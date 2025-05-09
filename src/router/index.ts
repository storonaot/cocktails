import { createRouter, createWebHistory } from 'vue-router'
import CocktailPage from '@/pages/CocktailPage.vue'
// import NotFound from '@/pages/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/margarita', // default route
    },
    {
      path: '/:cocktailCode',
      name: 'CocktailPage',
      component: CocktailPage,
    },
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'NotFound',
    //   component: NotFound,
    // },
  ],
})
