import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from 'ant-design-vue'
import 'arco-design/web-vue/dist/arco.css'
import router from '@/router'
import i18n from '@/locales'
import store from '@/store'

//createApp(App).mount('#app')

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.use(i18n);
app.use(store);
app.mount('#app');
