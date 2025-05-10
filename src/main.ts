import { createApp } from 'vue'
import 'modern-css-reset/dist/reset.css'
import '@/shared/styles/base/theme.scss'
import '@/shared/styles/base/globals.scss'
import App from '@/app/App.vue'
import { router } from '@/app/router'

createApp(App).use(router).mount('#app')
