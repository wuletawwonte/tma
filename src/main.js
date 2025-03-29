import "./assets/app.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WebApp from "@twa-dev/sdk"

import App from './App.vue'
import router from './router'

WebApp.ready()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
