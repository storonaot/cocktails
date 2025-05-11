import { createRouter, createWebHistory } from 'vue-router'
import { CocktailPage } from '@/pages/cocktail-page/ui'
import { NotFoundPage } from '@/pages/not-found-page/ui'
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
      path: `/:cocktailCode(${cocktailPattern})/:idDrink?`,
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
