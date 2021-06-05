import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from '@/components/BaseCard'
import BaseButton from '@/components/BaseButton'
import BaseDialog from '@/components/BaseDialog'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app')
