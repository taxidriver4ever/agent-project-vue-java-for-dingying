import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/component/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      component: Register
    }
  ],
})

export default router
