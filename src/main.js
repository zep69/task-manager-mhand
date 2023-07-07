import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css';

//elements
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';

const app = createApp(App);
app.use(PrimeVue);
app.use(router)
app.use(store)

app.component('Button',Button )
app.component('Card', Card)
app.component('Input', InputText)
app.component('Password', Password)
app.component('Checkbox', Checkbox)
app.component('Dialog', Dialog)





app.mount('#app')