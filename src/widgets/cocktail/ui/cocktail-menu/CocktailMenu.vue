<template>
  <ul class="menu">
    <li v-for="code in COCKTAIL_CODES" :key="code" class="menu-item">
      <router-link :to="`/${code}`" :class="['menu-link', { isActive: isActive(code) }]">
        {{ formatName(code) }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type CocktailCode } from '@/entities/cocktail/model/types'
import { COCKTAIL_CODES } from '@/entities/cocktail/model/constants'

import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (code: CocktailCode) => route.params.cocktailCode === code

const formatName = (code: CocktailCode) => code.charAt(0).toUpperCase() + code.slice(1)
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: spacing(4);
  justify-content: center;
  list-style: none;
  padding: 0;
}

.menu-item {
  margin: 0;
}

.menu-link {
  @include control-base;
}
</style>
