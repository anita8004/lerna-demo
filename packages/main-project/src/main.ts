import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import socialMediaAuth from 'social-media-auth'

const app = createApp(App)
// app.use(socialMediaAuth, {
//   google: {
//     clientId: '952327172004-nlgseih6hkf8sm96ju4njh2j22ibuj5f.apps.googleusercontent.com'
//   },
//   facebook: {
//     appId: '189264130891850'
//   }
// })

app.mount('#app')
