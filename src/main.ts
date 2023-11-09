import { createApp } from 'vue'
import './style.css'
import WebApp from '@twa-dev/sdk'
import App from './App.vue'

WebApp.ready()

createApp(App).mount('#app')
