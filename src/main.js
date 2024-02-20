/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueClipboard from 'vue3-clipboard';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate'; // 匯入 vee-validate 主套件
import { required, email, min } from '@vee-validate/rules'; // 匯入 vee-validate 相關規則
import { localize, setLocale } from '@vee-validate/i18n'; // 匯入多國語系的功能
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'; // 匯入繁體中文語系檔案
import App from './App.vue';
import router from './router';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
import { scrollTop, scrolling } from './methods/scroll';
import 'bootstrap';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW'); // 設定預設語系
// 設定預設語系
const app = createApp(App);
app.use(router);
app.config.globalProperties.$filters = {
  currency,
  date,
};
const pinia = createPinia();
app.config.globalProperties.$scroll = {
  scrollTop,
  scrolling,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
// eslint-disable-next-line vue/multi-word-component-names
// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', Loading);
app.use(VueAxios, axios);
app.use(VueClipboard);
app.use(pinia);
app.mount('#app');
