import { createApp } from 'vue'
import App from './App.vue'

if(import.meta.env.VITE_ENABLE_TEST_FONT === 'true') {
    import('./main.css')
}

createApp(App).mount('#app')
