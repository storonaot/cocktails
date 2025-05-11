<template>
  <UiSpinner v-if="isLoading" />
  <UiErrorMessage v-else-if="error" :message="error?.message" @retry="refetch" />
  <CocktailViewer v-else :cocktails="cocktails" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCocktails } from '@/entities/cocktail/model/useCocktails'
import { CocktailViewer } from '@/widgets/cocktail/ui/cocktail-viewer'
import { UiSpinner } from '@/shared/ui/ui-spinner'
import { UiErrorMessage } from '@/shared/ui/ui-error-message'

const route = useRoute()
const cocktailCode = computed(() => route.params.cocktailCode as string)

const { data: cocktails, isLoading, error, refetch } = useCocktails(cocktailCode)
</script>

<style lang="scss" scoped></style>
