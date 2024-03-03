import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import http from "@/api/http";
const app = createApp(App);

app.config.productionTip = false;

app.provide("$http", http)

app.use(router);
app.use(store);

app.mount('#app');
