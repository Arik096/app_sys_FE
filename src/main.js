import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap 5 
//npm install bootstrap@next
//npm install --save @popperjs/core
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(router).mount('#app')
