// Plugins
import { registerPlugins } from '@/plugins'


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Glassmorphic style
import './styles/glass.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
