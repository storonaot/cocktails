<template>
  <div class="layout">
    <nav class="layout__nav">
      <CocktailMenu />
    </nav>
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import CocktailMenu from '@/features/CocktailMenu.vue'
</script>

<style scoped lang="scss">
.layout {
  max-width: 1024px;
  min-width: 360px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__nav {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }

  &__main {
    flex: 1;
  }
}
</style>
