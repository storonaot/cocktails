<template>
  <div class="cocktail-list">
    <button
      v-for="cocktail in cocktails"
      :key="cocktail.idDrink"
      :title="cocktail.strDrink"
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
.cocktail-list {
  display: flex;
  flex-direction: row;
  gap: spacing(2);
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: spacing(1);
  max-width: 100%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.item {
  @include control-base;

  flex-shrink: 0;
}

@include media-up('tablet') {
  $sidebar-width: 200px;

  .cocktail-list {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-width: $sidebar-width;
    width: 100%;
  }

  .item {
    text-align: left;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
