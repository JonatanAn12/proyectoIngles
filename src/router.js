import { createRouter, createWebHistory } from 'vue-router';
import imagenesPapa from './components/imagenesPapa.vue';
import historiaPapa from './components/historiaPapa.vue';
import turismoPapa from './components/turismoPapa.vue';
import comidasTipicas from './components/comidasTipicas.vue';
import introduccionPapa from './components/introduccionPapa.vue';
import quizz from './components/quizz.vue';

const routes = [
  { path: '/introduccion', component: introduccionPapa },
  { path: '/imagenes', component: imagenesPapa },
  { path: '/historia', component: historiaPapa },
  { path: '/turismo', component: turismoPapa },
  {path: '/comidas', component: comidasTipicas },
  {path: '/evaluacion', component: quizz },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
