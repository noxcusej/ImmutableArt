import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import './styles/main.css'
import { VueDapp } from 'vue-dapp'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(VueDapp, {
  infuraId: "ba5030f413794d7ab93fa0623e55d48c",
})

app.use(Notifications)
app.use(router)
app.mount('#app')
