<template>
  <article class="card">
    <h2>{{ cocktail.strDrink }}</h2>
    <div class="content">
      <img
        class="card-image"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
        loading="lazy"
      />
      <p class="description">{{ cocktail.strInstructions }}</p>
    </div>
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
  gap: spacing(3);
  padding: spacing(3);
  margin: 0 auto;
  border-radius: $radius-default;
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.content {
  display: flex;
  flex-direction: column;
  gap: spacing(3);
}

.title {
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: $radius-default;
  object-fit: cover;
}

.description {
  font-size: 0.95em;
  line-height: 1.5;
}

@include media-up('tablet') {
  .content {
    flex-direction: row;
    align-items: flex-start;
  }

  .card-image,
  .description {
    width: 50%;
  }
}
</style>
