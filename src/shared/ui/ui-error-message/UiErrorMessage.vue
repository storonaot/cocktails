<template>
  <div class="error-block">
    <h2 class="title">Oops, something went wrong</h2>
    <p class="subtitle">Something went wrong. Try refreshing — it might help.</p>
    <button class="retry" @click="$emit('retry')">Refresh</button>
    <p v-if="message" class="technical">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message?: string }>()
defineEmits<{ (e: 'retry'): void }>()
</script>

<style scoped lang="scss">
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: spacing(3);
  margin: spacing(6) auto;
  text-align: center;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--color-text);
}

.subtitle {
  font-size: 1em;
  color: var(--color-text-secondary);
}

.retry {
  @include control-base;
}

.technical {
  margin-top: spacing(2);
  font-size: 0.85em;
  color: var(--color-text-secondary);
  font-family: monospace;
  opacity: 0.7;
  word-break: break-word;
}
</style>
