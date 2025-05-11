<template>
  <div class="spinner" role="status" aria-label="Загрузка..."></div>
</template>

<style scoped lang="scss">
.spinner {
  margin: spacing(5) auto;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
