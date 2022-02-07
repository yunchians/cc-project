import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'tailwindcss/tailwind.css'
import GoogleAuth from '@/config/google_oAuth.js'
Vue.config.productionTip = false
Vue.config.devtools = true
const gauthOption = {
  clientId: '704286237031-m51827i6ukbpnds9a4pfipmuunk5ff1n.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
