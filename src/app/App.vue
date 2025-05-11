<template>
  <div class="app-container">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import { MainLayout } from '@/app/layout/main-layout'
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
</script>

<style lang="scss" scoped>
.app-container {
  max-width: $breakpoint-max;
  min-width: $breakpoint-min;
  margin: 0 auto;
  @include padding-x(4);
  width: 100%;
}
</style>
