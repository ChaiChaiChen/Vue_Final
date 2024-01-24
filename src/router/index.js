import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/frontend/Userboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontend/UserProducts.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/frontend/UserAbout.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/frontend/UserProduct.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/frontend/UserCheckout.vue'),
      },
      {
        path: 'pay/:orderId',
        component: () => import('../views/frontend/UserPay.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
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
    component: () => import('../views/frontend/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
