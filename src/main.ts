import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locales'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const i18n = createI18n({
  locale: 'en',
  messages,
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
