<template>
  <div class="layout">
    <nav class="nav">
      <CocktailMenu />
    </nav>
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { CocktailMenu } from '@/widgets/cocktail/ui/cocktail-menu'
</script>

<style scoped lang="scss">
.layout {
  margin: 0 auto;
  padding: spacing(4);
  display: flex;
  flex-direction: column;
  gap: spacing(4);
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: var(--line-height);
}

.nav {
  border-bottom: 1px solid var(--color-control-hover-bg);
  padding-bottom: spacing(2);
}

.main {
  flex: 1;
}
</style>
