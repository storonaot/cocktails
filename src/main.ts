import { createApp } from 'vue'
import 'modern-css-reset/dist/reset.css'
import './style.css'
import App from '@/app/App.vue'
import { router } from '@/app/router'

createApp(App).use(router).mount('#app')
