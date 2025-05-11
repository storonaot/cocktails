<template>
  <div class="cocktail-list">
    <button
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      :class="['item', { isActive: cocktail.idDrink === selectedId }]"
      @click="$emit('select', cocktail.idDrink)"
    >
      {{ cocktail.strDrink }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { Cocktail } from '@/entities/cocktail/model/types'

defineProps<{
  cocktails: Cocktail[]
  selectedId: string | null
}>()

defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<style scoped lang="scss">
$sidebar-width: 250px;

.cocktail-list {
  display: flex;
  flex-direction: column;
  gap: spacing(2);

  max-width: $sidebar-width;
  width: 100%;
}

.item {
  background: none;
  border: none;
  padding: spacing(2);
  text-align: left;
  cursor: pointer;
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
