<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>

  <CocktailViewer v-else :cocktails="cocktails" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCocktails } from '@/entities/cocktail/model/useCocktails'
import { CocktailViewer } from '@/widgets/cocktail/ui/cocktail-viewer'

const route = useRoute()
const cocktailCode = computed(() => route.params.cocktailCode as string)

const { data: cocktails, isLoading, error } = useCocktails(cocktailCode)
</script>

<style lang="scss" scoped></style>
