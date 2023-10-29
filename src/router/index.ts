import { createRouter, createWebHistory } from 'vue-router'
import CreatePaymentView from '../views/CreatePaymentView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import PaymentsListView from '../views/PaymentsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/payments/create',
      name: 'payments create',
      component: CreatePaymentView,
    },
    {
      path: '/payments/',
      name: 'payments list',
      component: PaymentsListView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (...params) => {
        console.log('login before enter: ', params);
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
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
