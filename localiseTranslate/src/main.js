import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'


import './style.css'
import App from './App.vue'

import en_US from '@/locales/en_US.json'
import ko_KR from '@/locales/ko_KR.json'
import de_DE from '@/locales/de_DE.json'
import es_CL from '@/locales/es_CL.json'

const app = createApp(App)

const getMessages = () => {
  return {
    en_US: en_US, 
    ko_KR: ko_KR,
    de_DE: de_DE,
    es_CL: es_CL,
  }
}

const initLanguage = () => {
  return 'ko_KR'
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: initLanguage(), // set locale
  fallbackLocale: 'en_US', // set fallback locale
  messages: getMessages(),
})

app.use(i18n)

app.mount('#app')
