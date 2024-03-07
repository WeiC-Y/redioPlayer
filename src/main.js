/*
 * @Author: wei.chenyu
 * @Date: 2024-02-26 23:51:53
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-02-29 16:54:49
 * @Descripttion: 入口文件
 */
import '@arco-design/web-vue/dist/arco.css';
import './assets/main.css'
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
