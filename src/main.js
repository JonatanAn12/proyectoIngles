import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

const app = createApp(App);
app.use(router);
app.mount('#app');

// Importar Element Plus y sus estilos
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Usar Element Plus
app.use(ElementPlus);

app.mount('#app');