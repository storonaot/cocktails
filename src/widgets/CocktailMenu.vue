<template>
  <ul class="menu">
    <li v-for="code in COCKTAIL_CODE" :key="code" class="menu-item">
      <router-link :to="`/${code}`" :class="['menu-link', { isActive: isActive(code) }]">
        {{ formatName(code) }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { COCKTAIL_CODE, type CocktailCode } from '@/entities/cocktail/model/types'
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
  text-decoration: none;
  color: var(--color-control-fg);
  padding: spacing(2) spacing(4);
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-control-hover-bg);
  }

  &.isActive {
    background-color: var(--color-control-active-bg);
    color: var(--color-control-active-fg);
  }
}
</style>
