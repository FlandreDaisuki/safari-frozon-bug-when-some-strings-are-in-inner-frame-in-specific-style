import { createApp } from 'vue'
import App from './App.vue'
import SecondaryApp from './SecondaryApp.vue'

const app = createApp(App)
app.mount('#app')

const app2 = createApp(SecondaryApp)
app2.mount('#secondary-app')
