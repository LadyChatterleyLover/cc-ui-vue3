import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ccUI from './components'

createApp(App).use(ccUI).use(router).mount('#app')
