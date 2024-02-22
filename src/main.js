import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import './assets/style/tailwin.css';
import './assets/style/global.css';
import { registerGlobalComponent } from './utils/import.js';
import { fireAuth } from './configs/firebase'
let app;

fireAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    registerGlobalComponent(app)

    app.use(router)

    app.mount('#app')
  }
})
