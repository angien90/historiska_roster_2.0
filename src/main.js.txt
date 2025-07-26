import './assets/main.css';
import 'leaflet/dist/leaflet.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n/i18n.js';  // importerar i18n-instansen

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
