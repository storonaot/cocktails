import { createApp } from 'vue'
import 'modern-css-reset/dist/reset.css'
import '@/shared/styles/base/theme.scss'
import '@/shared/styles/base/globals.scss'
import App from '@/app/App.vue'
import { router } from '@/app/router'

import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
