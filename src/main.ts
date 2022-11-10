import { createApp } from 'vue'
import './style.css'
import i18n from './locale/index';
import App from './App.vue'
const app = createApp(App);
app.use(i18n)
app.mount('#app')
