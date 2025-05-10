import { createRouter, createWebHistory } from 'vue-router'
import CocktailPage from '@/pages/CocktailPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { DEFAULT_COCTAIL_CODE } from '@/entities/cocktail/model/constants'
import { COCKTAIL_CODE } from '@/entities/cocktail/model/types'

const cocktailPattern = Object.values(COCKTAIL_CODE).join('|')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: `/${DEFAULT_COCTAIL_CODE}`,
    },
    {
      path: `/:cocktailCode(${cocktailPattern})`,
      name: 'CocktailPage',
      component: CocktailPage,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
})
