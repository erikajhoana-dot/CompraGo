import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ProductosView from './views/ProductosView.vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'


const app = createApp(ProductosView)

app.use(createPinia())
app.use(router)

app.mount('#app')
