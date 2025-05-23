<template>
  <div class="viewer">
    <CocktailList :cocktails="cocktails" :selected-id="selectedId" @select="selectCocktail" />
    <CocktailCard v-if="selectedCocktail" :cocktail="selectedCocktail" />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CocktailList } from '@/features/cocktail-list/ui'
import { CocktailCard } from '@/entities/cocktail/ui/cocktail-card'
import { Cocktail } from '@/entities/cocktail/model/types'

const props = defineProps<{
  cocktails: Cocktail[]
}>()

const route = useRoute()
const router = useRouter()

const selectedId = computed(() => route.params.idDrink as string)

const selectedCocktail = computed(() => props.cocktails.find((c) => c.idDrink === selectedId.value))

function selectCocktail(id: string) {
  router.push({ params: { ...route.params, idDrink: id } })
}

watch(
  () => props.cocktails,
  (newCocktails) => {
    if (newCocktails.length > 0 && !newCocktails.some((c) => c.idDrink === route.params.idDrink)) {
      router.replace({
        params: { idDrink: newCocktails[0].idDrink },
      })
    }
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
.viewer {
  display: flex;
  flex-direction: column;
  gap: spacing(4);

  @include media-up('tablet') {
    flex-direction: row;
    align-items: flex-start;
  }
}
</style>
