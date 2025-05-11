<template>
  <div class="wrapper">
    <div v-if="!isLoaded" class="placeholder">
      <UiSpinner />
    </div>
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      :class="['image', { isTransparent: !isLoaded }]"
      @load="onLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { UiSpinner } from '@/shared/ui/ui-spinner'

const props = defineProps<{
  src: string
  alt?: string
}>()

const isLoaded = ref(false)

function onLoad() {
  isLoaded.value = true
}

watch(
  () => props.src,
  () => {
    isLoaded.value = false
  },
)
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  background-color: var(--color-control-hover-bg);
  border-radius: $radius-default;
  overflow: hidden;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--color-surface);
  animation: pulse 1.5s infinite;
}

.image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  &.isTransparent {
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
