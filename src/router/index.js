import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/UserAbout.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/UserCheckout.vue'),
      },
      {
        path: 'pay/:orderId',
        component: () => import('../views/UserPay.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
