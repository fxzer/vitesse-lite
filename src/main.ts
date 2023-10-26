import { createApp } from 'vue'
import { setupPinia } from './stores'

import './style.css'
import App from './App.vue'
const app = createApp(App)
setupPinia(app)
app.mount('#app')
