import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from "./routes/index";
import store from "./store/index";

const pinia = createPinia();

createApp(App).use(router).use(store).use(pinia).mount('#app');
