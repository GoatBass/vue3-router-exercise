import { createApp } from 'vue'
import App from './App.vue'

// TODO add your user plugin here
import router from './router'

createApp(App).use(router).mount('#app')
