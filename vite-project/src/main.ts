import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//映入arco-design-vue
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
//引入路由
import router from './router';

//createApp(App).mount('#app')

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.mount('#app');