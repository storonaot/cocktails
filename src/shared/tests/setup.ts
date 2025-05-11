import { config } from '@vue/test-utils'

// NOTE: Отключим предупреждения об отсутствующих глобальных компонентах
config.global.stubs = {
  transition: true,
  'router-link': true,
  'router-view': true,
}
