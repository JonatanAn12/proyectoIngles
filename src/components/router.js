import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ImagenesPapa from './components/ImagenesPapa.vue';
import HistoriaPapa from './components/HistoriaPapa.vue';
import TurismoPapa from './components/TurismoPapa.vue';

const routes = [
  { path: '/', component: App },
  { path: '/imagenes', component: ImagenesPapa },
  { path: '/historia', component: HistoriaPapa },
  { path: '/turismo', component: TurismoPapa },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
