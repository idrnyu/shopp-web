import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/antminer',
    name: 'Antminer',
    component: () => import('../views/antminer/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active',
});

export default router;
