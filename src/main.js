import { createApp } from 'vue';
import App from './App.vue';

// Importar Element Plus y sus estilos
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

// Usar Element Plus
app.use(ElementPlus);

app.mount('#app');