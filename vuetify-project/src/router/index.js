
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import PersonPage from '@/pages/PersonPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import ResultPage from '@/pages/ResultPage.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
    {
        path: '/', // Главная страница
        name: 'PersonPage',
        component: PersonPage,
    },
    {
        path: '/ProductPage', // Страница профиля
        name: 'ProductPage',
        component: ProductPage,
    },
    {
        path: '/ResultPage', // Страница входа
        name: 'ResultPage',
        component: ResultPage,
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
