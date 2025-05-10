<template>
  <ul class="menu">
    <li v-for="code in COCKTAIL_CODE" :key="code" class="menu__item">
      <router-link
        :to="`/${code}`"
        class="menu__link"
        :class="{ 'menu__link--active': isActive(code) }"
      >
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
  gap: 1rem;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    margin: 0;
  }

  &__link {
    text-decoration: none;
    color: #444;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #eee;
    }

    &--active {
      background-color: #222;
      color: #fff;
    }
  }
}
</style>
