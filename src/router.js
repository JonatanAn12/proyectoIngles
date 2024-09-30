import { createRouter, createWebHistory } from 'vue-router';
import imagenesPapa from './components/imagenesPapa.vue';
import historiaPapa from './components/historiaPapa.vue';
import turismoPapa from './components/turismoPapa.vue';
import comidasTipicas from './components/comidasTipicas.vue';

const routes = [
  { path: '/imagenes', component: imagenesPapa },
  { path: '/historia', component: historiaPapa },
  { path: '/turismo', component: turismoPapa },
  {path: '/comidas', component: comidasTipicas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
