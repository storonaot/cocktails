<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <ul v-else>
    <li v-for="drink in cocktails" :key="drink.idDrink">
      {{ drink.strDrink }}
    </li>
  </ul>
</template>

<!-- <script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCocktails } from '@/entities/cocktail/model/useCocktails'
import { computed } from 'vue'

const route = useRoute()

const cocktailCode = computed(() => route.params.cocktailCode as string)

const { data: cocktails, isLoading, error } = useCocktails(cocktailCode)

// watch(cocktailCode, () => {
//   refetch()
// })
</script> -->

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCocktails } from '@/entities/cocktail/model/useCocktails'

const route = useRoute()
const cocktailCode = computed(() => route.params.cocktailCode as string)

const { data: cocktails, isLoading, error } = useCocktails(cocktailCode)
</script>

<style lang="scss" scoped></style>
