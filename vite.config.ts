// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ⬅️ Important
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/index.scss" as *;`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/shared/config/test/setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'tests/', 'src/main.ts'],
    },
  },
})
