import type { App } from 'vue'
import { ContactPicker } from '@/components'

export default {
  install: (app: App) => {
    app.component('ContactPicker', ContactPicker)
  }
}

export { ContactPicker }
