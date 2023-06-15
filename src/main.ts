import { createApp } from "vue";
import router from './router/index';
import App from "./App.vue";
import "./index.css";

import VConsole from 'vconsole';

const vConsole = new VConsole({ theme: 'dark' });

createApp(App).use(router).mount("#shopp");
