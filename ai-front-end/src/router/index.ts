import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/component/Register.vue'
import Login from '@/component/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      component: Register
    },
    {
      path: "/login",
      component: Login
    }

  ],
})

export default router
