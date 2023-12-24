/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import App from './App.vue';
import router from './router';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const app = createApp(App);
app.use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.mount('#app');
