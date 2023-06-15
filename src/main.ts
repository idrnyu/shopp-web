import { createApp } from "vue";
import router from './router/index';
import App from "./App.vue";
import "./index.css";

import VConsole from 'vconsole';

const vConsole = new VConsole();
// 或者使用配置参数来初始化，详情见文档
const vConsole = new VConsole({ theme: 'dark' });

createApp(App).use(router).mount("#shopp");
