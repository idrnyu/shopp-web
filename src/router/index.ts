import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/:type(antminer|avalon|whatsminer)',
    name: 'Type',
    redirect: { name: 'Product' },
    component: () => import('@/views/product/index.vue'),
    children: [
      {
        path: 'product',
        name: 'Product',
        redirect: { name: 'ProductList' },
        children: [
          {
            path: 'list',
            name: 'ProductList',
            component: () => import('@/views/product/list.vue'),
          },
          {
            path: 'detail',
            name: 'ProductDetail',
            component: () => import('@/views/product/detail.vue'),
          }
        ]
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active',
  scrollBehavior: (to, form) => {
    if (to.path !== form.path) {
      const mainBoxDom = document.querySelector('#shopp');
      if (mainBoxDom) {
        mainBoxDom.scrollTop = 0;
      }
      return { top: 0 };
    }
  },
});

export default router;
