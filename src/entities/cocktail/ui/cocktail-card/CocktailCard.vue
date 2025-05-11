<template>
  <article class="card">
    <h2 class="card-title">{{ cocktail.strDrink }}</h2>
    <img class="card-image" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" loading="lazy" />
    <p class="card-description">{{ cocktail.strInstructions }}</p>
  </article>
</template>

<script setup lang="ts">
import { Cocktail } from '@/entities/cocktail/model/types'

defineProps<{ cocktail: Cocktail }>()
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: spacing(2);
  padding: spacing(3);
  border-radius: 6px;
  background-color: var(--color-bg);
  color: var(--color-text);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.card-image {
  max-width: 100%;
  border-radius: 6px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.card-description {
  line-height: 1.4;
}
</style>
