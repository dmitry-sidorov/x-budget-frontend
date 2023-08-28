import { createRouter, createWebHistory } from 'vue-router'
import CreatePaymentView from '../views/CreatePaymentView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CreatePaymentView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (...params) => {
        console.log('login before enter: ', params);
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
