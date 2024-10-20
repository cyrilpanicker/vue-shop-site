import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Product from '@/views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/details/:id',
      name: 'product',
      component: Product,
    },
  ],
})

export default router
